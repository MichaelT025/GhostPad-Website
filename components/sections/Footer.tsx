import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-shade-panel-muted border-t border-border/50">
      <Container size="lg">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand Column */}
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="text-xl font-semibold text-text-primary">
                {SITE_CONFIG.name}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                {SITE_CONFIG.tagline}. Privacy-first, open source, built for Windows.
              </p>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Product</h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-4">Resources</h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-tertiary hover:text-text-primary transition-colors inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
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
              <h3 className="text-sm font-semibold text-text-primary mb-4">Legal</h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-tertiary hover:text-text-primary transition-colors inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
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
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-text-tertiary text-center sm:text-left">
                Built for Windows users who want AI assistance without the bloat.
              </p>
              <p className="text-xs text-text-tertiary">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. MIT License.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
