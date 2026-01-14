import Link from "next/link"
import { Github, Linkedin, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  <MessageSquare className="h-4 w-4" />
                  Contact Form
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/brianflett/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/briangflett"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Projects</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://github.com/briangflett/npaiadvisor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Strategic Planning Repo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/briangflett/n8n-ap-workflows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Allard Prize Workflows
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Organizations</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://masadvise.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Management Advisory Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Brian Flett. Building AI automation for nonprofits.
          </p>
        </div>
      </div>
    </footer>
  )
}
