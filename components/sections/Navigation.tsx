"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ghost-black/80 backdrop-blur-md border-b border-ghost-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              GhostPad
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ghost-light hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open("https://github.com/ghostpad", "_blank")}
              className="flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ghost-light hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ghost-light hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                window.open("https://github.com/ghostpad", "_blank");
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
