import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SiteNav } from "@/components/ui/site-nav";
import { EXPERIENCE, getExperienceBySlug } from "@/lib/experience";

export function generateStaticParams() {
  return EXPERIENCE.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getExperienceBySlug(slug);
  if (!entry) return { title: "Mission Brief | Jian Chen" };
  return {
    title: `Mission Brief: ${entry.company} | Jian Chen`,
    description: entry.tagline,
  };
}

export default async function MissionBriefPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getExperienceBySlug(slug);
  if (!entry) notFound();

  const Icon = entry.icon;
  const idx = EXPERIENCE.findIndex((e) => e.slug === slug);
  const num = String(idx + 1).padStart(2, "0");

  return (
    <>
      <SiteNav scope="page" active="experience" />

      <main className="pt-32">
        {/* Back link */}
        <div className="max-w-[1440px] mx-auto px-gutter mb-8">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 font-label-caps text-[11px] tracking-[0.3em] text-on-surface-variant/60 hover:text-primary-fixed-dim transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            RETURN TO MISSION LOG
          </Link>
        </div>

        {/* Hero */}
        <section className="relative min-h-[60dvh] md:min-h-[720px] flex flex-col justify-end max-w-[1440px] mx-auto px-gutter pb-16 md:pb-20 overflow-hidden">
          {entry.heroImage ? (
            <>
              {/* Photo background — desaturated + darkened so the type stays legible */}
              <Image
                src={entry.heroImage}
                alt=""
                aria-hidden
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 z-0 object-cover grayscale brightness-[0.35]"
              />
              <div
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(19,19,19,0.92) 0%, rgba(19,19,19,0.55) 60%, rgba(19,19,19,0.85) 100%), linear-gradient(180deg, rgba(19,19,19,0) 40%, #131313 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 60% at 80% 30%, rgba(0,230,57,0.12), transparent 60%)",
                }}
              />
            </>
          ) : (
            <>
              <div
                aria-hidden
                className="absolute inset-0 z-0 grid-bg opacity-50"
              />
              <div
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(0,230,57,0.10), transparent 60%), linear-gradient(180deg, transparent 0%, #131313 100%)",
                }}
              />
              <Icon
                strokeWidth={0.5}
                aria-hidden
                className="absolute top-1/2 right-4 md:right-16 -translate-y-1/2 w-[280px] h-[280px] md:w-[420px] md:h-[420px] text-primary-fixed-dim/10 pointer-events-none"
              />
            </>
          )}
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse" />
              <span className="font-label-caps text-[12px] tracking-[0.4em] text-primary-fixed-dim">
                SYSTEMS NOMINAL : PROJECT BRIEFING
              </span>
            </div>
            <div className="font-label-caps text-[11px] tracking-[0.3em] text-on-surface-variant/50">
              DEPLOY_{num} / {entry.location}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-display uppercase max-w-4xl tracking-tight leading-[0.95]">
              Mission Brief:{" "}
              <span className="text-primary-fixed-dim">{entry.company}</span>
            </h1>
            <p className="text-body-lg md:text-2xl text-on-surface-variant/80 max-w-2xl">
              {entry.tagline}
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6">
              <div>
                <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40 mb-1">
                  ROLE
                </p>
                <p className="font-headline-md text-lg md:text-xl text-on-surface">
                  {entry.role}
                </p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40 mb-1">
                  DOMAIN
                </p>
                <p className="font-headline-md text-lg md:text-xl text-on-surface">
                  {entry.domain}
                </p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40 mb-1">
                  DURATION
                </p>
                <p className="font-headline-md text-lg md:text-xl text-on-surface">
                  {entry.duration}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Briefing body */}
        <section className="max-w-[1440px] mx-auto px-gutter py-section-gap grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left col — sticky objectives */}
          <aside className="md:col-span-4 space-y-8">
            <div className="md:sticky md:top-32 space-y-10">
              <div className="space-y-4">
                <h3 className="font-label-caps text-[12px] tracking-[0.3em] text-primary-fixed-dim">
                  01 // MISSION OBJECTIVES
                </h3>
                <p className="text-on-surface-variant/80 text-body-lg">
                  {entry.briefingSummary}
                </p>
              </div>
              <ul className="space-y-5">
                {entry.objectives.map((obj) => (
                  <li
                    key={obj}
                    className="flex items-start gap-3 border-b border-white/5 pb-4 last:border-b-0"
                  >
                    <span className="text-primary-fixed-dim font-label-caps mt-1 shrink-0">
                      //
                    </span>
                    <p className="text-on-surface text-body-md">{obj}</p>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/5">
                <h4 className="font-label-caps text-[11px] tracking-[0.3em] text-on-surface-variant/40 mb-4">
                  TECH STACK
                </h4>
                <div className="flex flex-wrap gap-2">
                  {entry.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-label-caps tracking-[0.15em] text-on-surface-variant/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/5">
                <h4 className="font-label-caps text-[11px] tracking-[0.3em] text-on-surface-variant/40 mb-3">
                  TAGS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container font-label-caps text-[10px] tracking-[0.3em] border border-white/5 text-on-surface-variant/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right col — section narrative */}
          <div className="md:col-span-8 space-y-16 md:space-y-24">
            <h3 className="font-label-caps text-[12px] tracking-[0.3em] text-primary-fixed-dim md:hidden">
              02 // OPERATIONS
            </h3>

            {entry.sections.map((section, sIdx) => (
              <article key={section.title} className="space-y-6">
                {section.image && (
                  <div className="relative aspect-video w-full overflow-hidden border border-white/10 group">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="object-cover [object-position:50%_25%] grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    />
                  </div>
                )}
                <div className="flex items-baseline gap-4">
                  <span className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40">
                    {String(sIdx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl md:text-headline-lg text-on-surface tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="flex gap-3 pl-0 md:pl-12">
                  <span className="text-primary-fixed-dim font-label-caps shrink-0">
                    ●
                  </span>
                  <p className="text-on-surface-variant/80 text-body-lg max-w-2xl leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </article>
            ))}

            {/* Metrics row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-white/5">
              {entry.metrics.map((metric) => (
                <div key={metric.label} className="text-left">
                  <p className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-fixed-dim leading-none">
                    {metric.value}
                  </p>
                  <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/50 mt-3">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1440px] mx-auto px-gutter pb-section-gap">
          <div className="glass-panel border border-white/10 p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-headline-lg text-on-surface tracking-tight mb-3">
                Technical Deep Dive Required?
              </h2>
              <p className="text-on-surface-variant/70 max-w-xl">
                Open a channel to talk through the engineering details, architectural
                decisions, or operational tradeoffs behind this mission.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-primary-fixed-dim text-on-primary px-8 md:px-10 py-4 font-label-caps text-[11px] tracking-[0.3em] hover:brightness-110 transition-all duration-300 group whitespace-nowrap"
            >
              ACCESS TERMINAL
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-surface border-t border-white/5 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto px-gutter gap-8">
          <div className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container">
            © 2026 JIAN CHEN. SYSTEMS NOMINAL.
          </div>
          <div className="flex gap-10">
            <Link
              className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container hover:text-on-surface transition-colors"
              href="/experience"
            >
              Mission Log
            </Link>
            <Link
              className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container hover:text-on-surface transition-colors"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container hover:text-on-surface transition-colors"
              href="/#contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
