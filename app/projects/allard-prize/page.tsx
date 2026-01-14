import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ExternalLink, Target, Lightbulb, Zap, CheckCircle2 } from "lucide-react"

export default function AllardPrizePage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Allard Prize Donor Outreach Automation
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            AI-powered workflow system for automated donor intelligence gathering and personalized outreach
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              n8n
            </span>
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              Claude AI
            </span>
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              SendGrid
            </span>
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              Google Sheets
            </span>
          </div>
        </div>

        {/* Problem Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">The Challenge</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                The Allard Prize for International Integrity needed to identify and engage potential
                donors who align with their mission of promoting global integrity and anti-corruption efforts.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Manual monitoring of news sources, social media, and email communications was time-consuming
                and inconsistent. The organization needed an automated system that could:
              </p>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                <li>Monitor multiple information sources continuously</li>
                <li>Identify prospects with relevant interests and capacity</li>
                <li>Generate personalized outreach recommendations</li>
                <li>Track all interactions in their CRM system</li>
                <li>Scale without adding significant manual workload</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">The Solution</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-400">
                Built a comprehensive n8n workflow system that automates the entire donor intelligence
                pipeline from monitoring to outreach recommendations.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    1. Automated Data Collection
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Daily RSS feed monitoring captures relevant news and updates. LinkedIn scraping
                    identifies prospect activities and interests. Email capture workflow processes
                    incoming communications automatically.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    2. AI-Powered Analysis
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Claude AI evaluates each data point for relevance to the Allard Prize mission,
                    assesses donor capacity indicators, and generates personalized touchpoint
                    recommendations based on prospect interests and engagement patterns.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    3. Data Tracking & Reporting
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    All prospect data and AI insights automatically sync to Google Sheets, maintaining
                    a comprehensive view of each donor relationship with flexible tracking and reporting
                    capabilities for the development team.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    4. Workflow Architecture
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• <strong>update-rss-results.json</strong> - Daily RSS monitoring and processing</li>
                    <li>• <strong>capture-ap-emails.json</strong> - Email capture and analysis</li>
                    <li>• <strong>capture-linkedin-posts.json</strong> - LinkedIn activity scraping</li>
                    <li>• <strong>ap-donor-outreach.json</strong> - Weekly AI analysis and touchpoint generation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">Technology Stack</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Core Platform</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• <strong>n8n</strong> - Self-hosted workflow automation</li>
                    <li>• <strong>Claude AI API</strong> - Natural language processing and analysis</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Integrations</h4>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• <strong>SendGrid</strong> - Email delivery infrastructure</li>
                    <li>• <strong>Google Sheets</strong> - Data tracking and reporting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">Results & Impact</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Automated monitoring of 50+ RSS feeds daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>AI-generated personalized outreach recommendations for high-value prospects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Seamless integration with Google Sheets for donor tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Significant reduction in manual data entry and prospect research time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Scalable system that adapts to organizational growth</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Links Section */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://allardprize.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <ExternalLink className="h-4 w-4" />
              About Allard Prize
            </Button>
          </a>
          <Link href="/projects">
            <Button variant="outline" size="lg">
              <ArrowRight className="h-4 w-4" />
              More Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
