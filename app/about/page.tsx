import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Briefcase, Code2, Heart, Music, Trophy } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">
            Building AI automation for nonprofits from Oakville, Ontario
          </p>
        </div>

        {/* Background Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">Background</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                I'm Brian Flett, a retired senior director from Bentley Systems where I led software
                development teams in the energy sector. After stepping away from corporate tech, I've
                focused my energy on applying AI and automation to help nonprofits work more effectively.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                I volunteer with Management Advisory Services (MAS), a nonprofit
                consulting organization serving nonprofits across Canada and internationally. My focus
                areas include CiviCRM implementation, AI adoption strategy, and n8n workflow automation.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                Based in Oakville, Ontario, Canada, I'm passionate about using technology to amplify
                the impact of organizations doing good work in the world.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Technical Focus Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">Technical Focus</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Tools & Platforms</h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• <strong>n8n</strong> - Self-hosted automation workflows</li>
                    <li>• <strong>Claude Code</strong> - AI-assisted development</li>
                    <li>• <strong>CiviCRM</strong> - Nonprofit CRM implementation</li>
                    <li>• <strong>WordPress</strong> - Website development</li>
                    <li>• <strong>Next.js</strong> - Modern web applications</li>
                    <li>• <strong>Vercel</strong> - Application deployment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Specializations</h3>
                  <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Workflow automation with n8n</li>
                    <li>• AI integration (Claude, OpenAI APIs)</li>
                    <li>• CiviCRM + AI workflows</li>
                    <li>• Nonprofit technology strategy</li>
                    <li>• Data integration & ETL pipelines</li>
                    <li>• Self-hosted infrastructure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Work Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                <CardTitle className="text-2xl">Current Work</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Management Advisory Services (MAS)
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                  Technology advisor providing CiviCRM implementation, AI strategy, and automation
                  consulting to nonprofits worldwide.
                </p>
                <a
                  href="https://masadvise.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Visit MAS
                  </Button>
                </a>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                  Allard Prize Automation
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Building AI-powered donor outreach automation using n8n, Claude AI, and Google Sheets
                  to help the Allard Prize team identify and engage potential supporters.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Looking For Section */}
        <section className="mb-12">
          <Card className="bg-zinc-50 dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-2xl">Looking for Tech Peer Collaborators</CardTitle>
              <CardDescription className="text-base">
                Seeking a few professionals who share my interests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-zinc-600 dark:text-zinc-400">
                I'm looking for tech peers who enjoy building with n8n, working with AI/LLMs, and
                applying technology to nonprofit challenges. Not looking to build a formal community
                or business—just informal monthly calls to share what we're building and bounce ideas
                around.
              </p>
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Interests Include:</h4>
                <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• n8n and workflow automation tools</li>
                  <li>• AI/LLMs (Claude, OpenAI, etc.)</li>
                  <li>• Nonprofit technology and CiviCRM</li>
                  <li>• Learning while building real projects</li>
                  <li>• Self-hosted infrastructure</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Outside Interests Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Outside Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-start gap-3">
                  <Music className="h-5 w-5 text-zinc-600 dark:text-zinc-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Guitar</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Playing and collecting</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-zinc-600 dark:text-zinc-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Squash</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Staying active</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Music className="h-5 w-5 text-zinc-600 dark:text-zinc-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">Live Jazz</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Local shows</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Connect Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
              <CardDescription className="text-base">
                Reach out if you're interested in tech peer collaboration or nonprofit AI automation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>
                    Get in Touch
                  </Button>
                </Link>

                <a
                  href="https://www.linkedin.com/in/brianflett/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
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
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
