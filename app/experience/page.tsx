import Link from "next/link";

import { EXPERIENCE } from "@/lib/experience";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#professional", label: "Professional" },
  { href: "/experience", label: "Experience", active: true },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function ExperiencePage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
        <div className="grid grid-cols-3 items-center max-w-[1440px] mx-auto px-gutter py-6 w-full">
          <Link
            href="/"
            className="font-display text-headline-md tracking-tighter text-on-surface flex items-center gap-2 justify-self-start"
          >
            Jian Chen
            <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full shadow-[0_0_8px_rgba(0,230,57,0.8)] animate-blink" />
          </Link>
          <div className="hidden md:flex gap-10 items-center justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.active
                    ? "text-primary-fixed-dim border-b border-primary-fixed-dim font-label-caps text-[12px] tracking-[0.3em] transition-all duration-300"
                    : "text-on-surface-variant/60 font-label-caps text-[12px] tracking-[0.3em] hover:text-primary-fixed-dim transition-all duration-300"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div aria-hidden />
        </div>
      </nav>

      <main className="pt-32 pb-20 max-w-[1440px] mx-auto px-gutter">
        {/* Header */}
        <header className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim animate-pulse" />
            <span className="font-label-caps text-[12px] text-primary-fixed-dim tracking-[0.4em]">
              SYSTEMS NOMINAL // ACTIVE DEPLOYMENTS
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-display uppercase tracking-tight mb-4">
            Mission Log
          </h1>
          <p className="text-body-lg text-on-surface-variant/80 max-w-2xl">
            A chronological record of engineering deployments and architectural
            milestones — from civil infrastructure and consulting through EV
            propulsion, manufacturing, robotics, and engineering leadership.
          </p>
        </header>

        {/* Mission grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {EXPERIENCE.map((entry, idx) => {
            const Icon = entry.icon;
            const num = String(idx + 1).padStart(2, "0");
            return (
              <Link
                href={`/experience/${entry.slug}`}
                key={entry.company}
                className="glass-panel border border-white/10 flex flex-col hover:border-primary-fixed-dim transition-colors duration-500 group overflow-hidden"
              >
                {entry.heroImage ? (
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
                    <img
                      src={entry.heroImage}
                      alt={entry.company}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent"
                    />
                    <Icon
                      strokeWidth={1.25}
                      aria-hidden
                      className="absolute top-4 right-4 w-6 h-6 text-primary-fixed-dim drop-shadow-[0_0_6px_rgba(0,230,57,0.6)]"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 grid-bg flex items-center justify-center">
                    <Icon
                      strokeWidth={0.75}
                      aria-hidden
                      className="w-24 h-24 text-primary-fixed-dim/30"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col gap-6 flex-1">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-label-caps text-[10px] tracking-[0.3em] text-on-tertiary-container mb-2 block uppercase">
                      DEPLOY_{num}
                    </span>
                    <h2 className="font-display text-2xl md:text-headline-md text-on-surface uppercase tracking-wide">
                      {entry.company}
                    </h2>
                    <p className="text-primary-fixed-dim font-label-caps text-[11px] tracking-[0.3em] mt-2 uppercase">
                      {entry.role}
                    </p>
                    <p className="text-on-surface-variant/50 font-label-caps text-[10px] tracking-[0.3em] mt-1">
                      {entry.location}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-tertiary-container mb-3 uppercase">
                    MISSION_OBJECTIVES
                  </p>
                  <ul className="space-y-2 text-on-surface-variant text-body-md">
                    {entry.objectives.map((obj) => (
                      <li key={obj} className="flex gap-2">
                        <span className="text-primary-fixed-dim/60 font-label-caps shrink-0">
                          //
                        </span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 flex flex-wrap gap-2 items-center justify-between">
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
                  <span className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40 group-hover:text-primary-fixed-dim transition-colors">
                    OPEN BRIEF →
                  </span>
                </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Core specs panel */}
        <section className="border border-white/5 bg-surface-container-low p-8 md:p-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-label-caps text-[12px] tracking-[0.3em] text-primary-fixed-dim mb-6 uppercase">
                CORE_SPECS
              </h3>
              <div className="space-y-4">
                {[
                  { label: "DEPLOYMENTS", value: "06" },
                  { label: "DOMAINS", value: "06" },
                  { label: "STATUS", value: "ACTIVE" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-end border-b border-white/10 pb-2"
                  >
                    <span className="text-on-surface-variant/60 font-label-caps text-[10px] tracking-[0.3em]">
                      {row.label}
                    </span>
                    <span className="text-primary-fixed-dim font-label-caps text-[12px] tracking-[0.2em]">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className="font-display text-2xl md:text-3xl leading-tight tracking-tighter mb-4">
                Six deployments,{" "}
                <span className="text-primary-fixed-dim">one trajectory.</span>
              </p>
              <p className="text-on-surface-variant/70 max-w-2xl">
                From port construction through structural consulting, electric
                marine propulsion, automotive manufacturing, and warehouse
                robotics — each role added a new layer to how I think about
                building hardware systems at scale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="px-6 py-3 border border-on-surface font-label-caps text-[11px] tracking-[0.2em] hover:bg-on-surface hover:text-background transition-all duration-500"
                >
                  VIEW PROJECT ARCHIVE
                </Link>
                <Link
                  href="/#contact"
                  className="px-6 py-3 font-label-caps text-[11px] tracking-[0.2em] flex items-center gap-3 group text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
                >
                  <span className="w-6 h-px bg-on-surface-variant group-hover:w-10 group-hover:bg-primary-fixed-dim transition-all duration-500" />
                  OPEN CHANNEL
                </Link>
              </div>
            </div>
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
              href="/#home"
            >
              Home
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
