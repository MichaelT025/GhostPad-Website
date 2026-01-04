"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { NAVIGATION_LINKS, SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-shade-bg/90 backdrop-blur-md border-b border-border/50 shadow-elev-1"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-xl font-semibold text-text-primary group-hover:text-accent-strong transition-colors">
              {SITE_CONFIG.name}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-shade-panel"
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-5 bg-border mx-2" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(SITE_CONFIG.github, "_blank")}
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">GitHub</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-md hover:bg-shade-panel"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            isMenuOpen ? "max-h-80 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-1 pt-2 border-t border-border/50">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-shade-panel rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-shade-panel rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
