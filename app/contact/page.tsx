"use client"

import { Suspense, useState, useEffect, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import Script from "next/script"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

type ContactType = "nonprofit" | "ai-engineer" | "other"

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""

function ContactForm() {
  const searchParams = useSearchParams()
  const defaultType = (searchParams.get("type") as ContactType) || "nonprofit"

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: defaultType,
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  const handleRecaptchaLoad = useCallback(() => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setRecaptchaLoaded(true)
      })
    }
  }, [])

  useEffect(() => {
    if (window.grecaptcha) {
      handleRecaptchaLoad()
    }
  }, [handleRecaptchaLoad])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      // Get reCAPTCHA token
      if (!window.grecaptcha || !recaptchaLoaded) {
        throw new Error("reCAPTCHA not loaded. Please refresh the page and try again.")
      }

      const recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "contact_form",
      })

      // Submit to our API route (which verifies reCAPTCHA and forwards to n8n)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          type: defaultType,
          message: "",
        })
      } else {
        console.error("Form submission failed:", response.status, result.error)
        throw new Error(result.error || "Failed to submit form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "There was a problem submitting your message. Please try again or reach out via LinkedIn."
      )
    }
  }

  if (status === "success") {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Message Sent!
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Thanks for reaching out. I'll get back to you soon.
            </p>
            <Button onClick={() => setStatus("idle")} variant="outline">
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
        onLoad={handleRecaptchaLoad}
      />
      <Card>
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                placeholder="Your first name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-3">
              I am a...
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="nonprofit"
                  checked={formData.type === "nonprofit"}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as ContactType })}
                  className="h-4 w-4 border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-50"
                />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Nonprofit professional interested in AI automation
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="ai-engineer"
                  checked={formData.type === "ai-engineer"}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as ContactType })}
                  className="h-4 w-4 border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-50"
                />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  AI Engineer interested in collaboration
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="other"
                  checked={formData.type === "other"}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as ContactType })}
                  className="h-4 w-4 border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-50"
                />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Other
                </span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-50 dark:focus:ring-zinc-50"
              placeholder="Tell me about your interest in AI automation or collaboration..."
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          <Button type="submit" disabled={status === "submitting" || !recaptchaLoaded} className="w-full">
            {status === "submitting" ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      </CardContent>
    </Card>
    </>
  )
}

function ContactFormLoading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
        <CardDescription>
          Fill out the form below and I'll get back to you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="animate-pulse space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-16 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
            <div className="h-16 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
          </div>
          <div className="h-16 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
          <div className="h-24 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
          <div className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
          <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Interested in nonprofit AI automation or AI Engineer collaboration? I'd love to hear from you.
          </p>
        </div>

        <Suspense fallback={<ContactFormLoading />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  )
}
