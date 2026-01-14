import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl mb-6">
            AI Automation for Nonprofits
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Helping nonprofits amplify their mission through practical AI workflow automation
          </p>
        </div>

        {/* Two-Choice Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Link href="/nonprofits">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
                  <CardTitle className="text-2xl">For Nonprofits</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Learn how AI automation can streamline your operations and amplify your impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  <li>• Understand what AI can do for your organization</li>
                  <li>• See real examples of nonprofit automation</li>
                  <li>• Learn about safe AI adoption strategies</li>
                  <li>• Explore practical use cases</li>
                </ul>
                <Button className="w-full">
                  Explore for Nonprofits
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tech-peers">
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
                  <CardTitle className="text-2xl">For Tech Peers</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Join a small network of tech professionals building AI automation for nonprofits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  <li>• Collaborate with like-minded tech peers</li>
                  <li>• Share n8n and AI automation projects</li>
                  <li>• Learn while building real solutions</li>
                  <li>• Informal monthly knowledge sharing</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Join the Network
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            Or explore directly:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/projects">
              <Button variant="ghost" size="sm">View Projects</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" size="sm">About Brian</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
