"use client";

import { Calendar, Download, GitCommit } from "lucide-react";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CHANGELOG, SITE_CONFIG } from "@/lib/constants";

export default function ReleasesPage() {
  return (
    <main className="min-h-screen bg-shade-bg">
      <Navigation />

      <Section spacing="xl" className="pt-32">
        <Container size="md">
          {/* Page Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
              Release Notes
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
              Stay up to date with the latest features, improvements, and bug fixes in {SITE_CONFIG.name}.
            </p>
          </div>

          {/* Releases Timeline */}
          <div className="space-y-8">
            {CHANGELOG.map((release) => (
              <Card key={release.version} variant="glass" hover={false}>
                <div className="space-y-6">
                  {/* Release Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-border">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2 className="text-3xl font-bold text-text-primary">
                          v{release.version}
                        </h2>
                      </div>
                      <div className="flex items-center gap-2 text-text-tertiary text-sm">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={release.date}>
                          {new Date(release.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => window.open(`${SITE_CONFIG.githubReleases}/tag/v${release.version}`, "_blank")}
                      className="flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </Button>
                  </div>

                  {/* Changes List */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <GitCommit className="w-5 h-5 text-accent" />
                      <h3 className="text-lg font-semibold text-text-primary">
                        Changes
                      </h3>
                    </div>
                    <ul className="space-y-2 ml-2">
                      {release.changes.map((change, index) => (
                        <li
                          key={index}
                          className="text-text-secondary flex items-start gap-3"
                        >
                          <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-4">
              View all releases and source code on GitHub
            </p>
            <Button
              variant="secondary"
              onClick={() => window.open(SITE_CONFIG.githubReleases, "_blank")}
            >
              View on GitHub →
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
