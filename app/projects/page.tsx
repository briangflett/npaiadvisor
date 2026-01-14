import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <Code2 className="mx-auto h-12 w-12 text-zinc-600 dark:text-zinc-400" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            AI automation projects helping nonprofits work more efficiently
          </p>
        </div>

        {/* Featured Project - Allard Prize */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Project
          </h2>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Allard Prize Donor Outreach Automation</CardTitle>
              <CardDescription className="text-base">
                Full-stack AI workflow for automated donor intelligence and personalized outreach
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-zinc-600 dark:text-zinc-400">
                  A comprehensive system that monitors potential donors through RSS feeds, LinkedIn,
                  and email, analyzes relevance using Claude AI, and generates personalized outreach
                  recommendations. Tracks all data in Google Sheets with SendGrid for
                  email delivery.
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• Automated RSS feed monitoring for donor prospects</li>
                      <li>• LinkedIn post scraping and analysis</li>
                      <li>• Email capture and processing</li>
                      <li>• AI-powered relevance scoring and touchpoint recommendations</li>
                      <li>• Google Sheets integration for tracking and reporting</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                        n8n (self-hosted)
                      </span>
                      <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                        Claude AI API
                      </span>
                      <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                        SendGrid
                      </span>
                      <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                        Google Sheets
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/projects/allard-prize">
                    <Button>
                      View Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Projects */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            More Projects Coming Soon
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">CiviCRM AI Integration</CardTitle>
                <CardDescription>
                  Exploring AI-powered donor insights and automated communication workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Planning phase
                </p>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">Nonprofit AI Assessment Tool</CardTitle>
                <CardDescription>
                  AI and workflow automation readiness assessment for small nonprofits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Planning phase
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
