import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ghost-black border-t border-ghost-gray/10">
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                GhostPad
              </div>
              <p className="text-sm text-ghost-gray leading-relaxed">
                Your invisible AI assistant. Lightweight, privacy-first, and built for Windows users who want AI assistance without the bloat.
              </p>
              <a
                href="https://github.com/ghostpad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-ghost-gray hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">Star on GitHub</span>
              </a>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ghost-gray hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ghost-gray hover:text-white transition-colors duration-200 inline-flex items-center space-x-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-ghost-gray hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ghost-gray hover:text-white transition-colors duration-200 inline-flex items-center space-x-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-ghost-gray hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-ghost-gray/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-ghost-gray text-center md:text-left">
                Made with ☕ for Windows users who want AI assistance without the bloat.
              </p>
              <p className="text-sm text-ghost-gray">
                © {new Date().getFullYear()} GhostPad. Open source under MIT License.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
