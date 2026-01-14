import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Code2, Lightbulb, Calendar, Github, Linkedin, Mail, ArrowRight } from "lucide-react"

export default function TechPeersPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-16 text-center">
          <Users className="mx-auto h-12 w-12 text-zinc-600 dark:text-zinc-400 mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl mb-6">
            Looking for Tech Peer Collaborators
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Seeking a few tech professionals who enjoy building with n8n, working with AI/LLMs,
            and applying technology to nonprofit challenges
          </p>
        </div>

        {/* What This Is */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What I'm Looking For</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                I'm building AI automation solutions for nonprofits and want to connect with
                like-minded tech peers for informal knowledge sharing and collaboration.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Not a formal community, not a business network, not a side project commitment.
                Just a few people who enjoy this kind of work and want to share what we're learning.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Three Columns */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  <CardTitle className="text-lg">What We'll Do</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Regular async collaboration</li>
                  <li>• Periodic video calls</li>
                  <li>• Share what we're building</li>
                  <li>• Bounce ideas off each other</li>
                  <li>• Learn together</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  <CardTitle className="text-lg">Tech I Use</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• n8n (self-hosted automation)</li>
                  <li>• Claude Code & AI tools</li>
                  <li>• CiviCRM + WordPress</li>
                  <li>• Next.js + Vercel</li>
                  <li>• Self-hosted infrastructure</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                  <CardTitle className="text-lg">What This Isn't</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Not a formal commitment</li>
                  <li>• Not community management</li>
                  <li>• Not a service business</li>
                  <li>• Not a mentorship program</li>
                  <li>• Just peer learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current Work */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
            What I'm Working On
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Allard Prize Donor Outreach Automation</CardTitle>
                <CardDescription>
                  AI-powered workflow for monitoring prospects and generating outreach
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  Built with n8n, Claude AI, and SendGrid. Monitors 50+ RSS feeds daily,
                  scrapes LinkedIn, analyzes relevance with AI, and generates personalized touchpoint
                  recommendations. Fully automated pipeline from data collection to Google Sheets tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    n8n
                  </span>
                  <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Claude AI
                  </span>
                  <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    Google Sheets
                  </span>
                </div>
                <Link href="/projects/allard-prize">
                  <Button variant="outline" size="sm">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">MAS Nonprofit Consulting</CardTitle>
                <CardDescription>
                  Technology advisor for Management Advisory Services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  I volunteer with MAS, focusing on CiviCRM implementation, AI adoption
                  strategy, and n8n workflow automation for nonprofits across Canada and internationally.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ideal Collaborator */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
            <CardHeader>
              <CardTitle className="text-2xl">You Might Be a Good Fit If...</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li>• You enjoy building with n8n or similar automation tools</li>
                <li>• You're exploring AI/LLMs (Claude, OpenAI, etc.) in practical projects</li>
                <li>• You care about nonprofit technology and social impact</li>
                <li>• You prefer learning by building rather than theory</li>
                <li>• You want peer collaboration, not formal networking</li>
                <li>• You're comfortable with self-hosted infrastructure</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Connect */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
              <CardDescription className="text-base">
                Reach out if you're interested in informal tech peer collaboration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="https://www.linkedin.com/in/brianflett/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>

                <a
                  href="https://github.com/briangflett"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                </a>

                <a href="mailto:brian@masadvise.org">
                  <Button variant="outline">
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                </a>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Note:</strong> I'm specifically looking for a few people for regular collaboration.
                  If you're just curious about my work, check out the{" "}
                  <Link href="/projects" className="text-zinc-900 hover:underline dark:text-zinc-50">
                    projects page
                  </Link>{" "}
                  or{" "}
                  <Link href="/about" className="text-zinc-900 hover:underline dark:text-zinc-50">
                    learn more about me
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Me Quick Link */}
        <section className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Want to learn more about my background first?
          </p>
          <Link href="/about">
            <Button variant="outline">
              About Brian
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
