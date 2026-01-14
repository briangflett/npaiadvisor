"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

type ContactType = "nonprofit" | "tech-peer" | "other"

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch(
        "https://n8n.masadvise.org/webhook/06ea1519-0c93-4737-b898-4a280108bc37",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_N8N_WEBHOOK_TOKEN}`,
          },
          body: JSON.stringify(formData),
        }
      )

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
        const errorText = await response.text()
        console.error("Form submission failed:", response.status, errorText)
        throw new Error(`Failed to submit form: ${response.status}`)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setErrorMessage("There was a problem submitting your message. Please try again or reach out via LinkedIn.")
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
                  value="tech-peer"
                  checked={formData.type === "tech-peer"}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as ContactType })}
                  className="h-4 w-4 border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-700 dark:text-zinc-50 dark:focus:ring-zinc-50"
                />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Tech peer interested in collaboration
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

          <Button type="submit" disabled={status === "submitting"} className="w-full">
            {status === "submitting" ? (
              "Sending..."
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
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
            Interested in nonprofit AI automation or tech peer collaboration? I'd love to hear from you.
          </p>
        </div>

        <Suspense fallback={<ContactFormLoading />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  )
}
