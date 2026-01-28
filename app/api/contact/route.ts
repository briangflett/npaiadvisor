import { NextRequest, NextResponse } from "next/server"

interface RecaptchaResponse {
  success: boolean
  score: number
  action: string
  challenge_ts: string
  hostname: string
  "error-codes"?: string[]
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { recaptchaToken, ...formData } = body

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA verification required" },
        { status: 400 }
      )
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY not configured")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    // Verify with Google
    const verifyResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: recaptchaToken,
        }),
      }
    )

    const recaptchaResult: RecaptchaResponse = await verifyResponse.json()

    // Check if verification succeeded and score is acceptable (0.5+ is typical threshold)
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.warn("reCAPTCHA verification failed:", {
        success: recaptchaResult.success,
        score: recaptchaResult.score,
        errors: recaptchaResult["error-codes"],
      })
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      )
    }

    // Forward to n8n webhook
    const n8nResponse = await fetch(
      "https://n8n.masadvise.org/webhook/06ea1519-0c93-4737-b898-4a280108bc37",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_N8N_WEBHOOK_TOKEN}`,
        },
        body: JSON.stringify({
          ...formData,
          recaptchaScore: recaptchaResult.score,
        }),
      }
    )

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text()
      console.error("n8n webhook failed:", n8nResponse.status, errorText)
      return NextResponse.json(
        { error: "Failed to submit form" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
