import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Zap, CheckCircle2, ExternalLink } from "lucide-react"

export default function NonprofitsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl mb-6">
            AI Automation for Nonprofits
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Learn how AI-powered workflow automation can amplify your mission, streamline operations,
            and create deeper connections with your communities
          </p>
        </div>

        {/* What is AI Automation */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">What is Workflow Automation?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                Workflow automation uses AI to handle repetitive tasks automatically, freeing your team
                to focus on mission-critical work. Think of it as a smart assistant that monitors information,
                analyzes data, and takes action based on rules you define.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Unlike complex enterprise software, modern AI automation tools can be tailored to your
                specific needs without extensive technical expertise or large budgets.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
            What Can AI Do for Your Nonprofit?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Donor Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  Automatically monitor news, social media, and communications to identify donor prospects
                  and engagement opportunities. AI analyzes relevance and suggests personalized outreach.
                </p>
                <Link href="/projects/allard-prize" className="text-sm text-zinc-900 hover:underline dark:text-zinc-50">
                  See case study →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Financial Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Use AI to analyze financial data, generate insights, and answer complex questions
                  about your organization's financial health in plain language.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Strategic Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Leverage AI to research trends, analyze stakeholder feedback, and support
                  data-driven strategic decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Program Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Automate program intake, participant communications, and reporting workflows
                  to reduce administrative burden.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real Example */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">Real Example: Allard Prize</CardTitle>
              </div>
              <CardDescription className="text-base">
                How automation transformed donor outreach
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">The Challenge</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  The Allard Prize needed to identify and engage potential donors aligned with their
                  global integrity mission, but manual monitoring of news and social media was
                  time-consuming and inconsistent.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">The Solution</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  An automated workflow that monitors 50+ news sources daily, scrapes LinkedIn activity,
                  and uses AI to analyze relevance and generate personalized outreach recommendations.
                </p>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Automated daily monitoring of 50+ RSS feeds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>AI-generated personalized outreach recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Seamless CRM integration for donor tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Significant time savings for development team</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <Link href="/projects/allard-prize">
                  <Button>
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Safe Adoption */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Safe AI Adoption</CardTitle>
              <CardDescription className="text-base">
                A guided approach to implementing AI in your organization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                Adopting AI doesn't mean replacing your team or risking your data. A safe,
                guided approach focuses on:
              </p>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50 min-w-32">Start Small:</span>
                  <span>Begin with one specific workflow that has clear, measurable impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50 min-w-32">Build Understanding:</span>
                  <span>Learn by doing - hands-on experience builds confidence and capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50 min-w-32">Maintain Control:</span>
                  <span>AI suggests, humans decide - you remain in control of all actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50 min-w-32">Scale Gradually:</span>
                  <span>Expand to new use cases once your team is comfortable</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* MAS Resources */}
        <section className="mb-16">
          <Card className="border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30">
            <CardHeader>
              <CardTitle className="text-2xl">Learn More with MAS</CardTitle>
              <CardDescription className="text-base">
                Free resources and guidance for nonprofits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                I volunteer with Management Advisory Services (MAS), helping nonprofits understand
                and safely adopt AI technology. MAS offers free resources including:
              </p>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• White papers on AI for analytics, finance, and strategic planning</li>
                <li>• Webinars on practical AI adoption for nonprofits</li>
                <li>• Guided consulting for organizations ready to implement AI</li>
              </ul>
              <div className="pt-4">
                <a
                  href="https://www.masadvise.org/services-finance-and-info-tech/#ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4" />
                    Explore MAS AI Resources
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Ready to Explore AI Automation?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
            See more examples of nonprofit automation projects or learn about my background
            working with organizations like yours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                About Brian
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
