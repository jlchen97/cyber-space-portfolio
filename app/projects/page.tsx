import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Terminal } from "lucide-react";

import { GlowyWavesHero } from "@/components/ui/glowy-waves-hero";
import { SiteNav } from "@/components/ui/site-nav";
import { PROJECTS } from "@/lib/projects";

const TELEMETRY = [
  { value: "08", label: "Projects Logged" },
  { value: "04", label: "Hyperloop Seasons" },
  { value: "06", label: "Technical Domains" },
];

const COMMAND_LOG = [
  "INITIALIZING PROJECT_ARCHIVE…",
  "FETCHING METRIC_DATA…",
  "CROSS-REFERENCING CAD_FILES…",
  "DEPLOYING MISSION_DOSSIERS…",
];

export default function ProjectsPage() {
  return (
    <>
      <SiteNav scope="page" active="projects" />

      <GlowyWavesHero />

      {/* Mission Dossier — telemetry sidebar + dossier list */}
      <section
        id="archive"
        className="scroll-mt-24 max-w-[1440px] mx-auto px-gutter py-24 md:py-32"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Telemetry sidebar */}
          <aside className="lg:w-1/4 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-12">
              <div>
                <h3 className="font-label-caps text-[12px] tracking-[0.3em] text-on-surface-variant/40 mb-6 uppercase">
                  Telemetry
                </h3>
                <div className="space-y-8">
                  {TELEMETRY.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-l border-white/10 pl-6"
                    >
                      <div className="font-display text-3xl md:text-4xl text-primary-fixed-dim leading-none">
                        {stat.value}
                      </div>
                      <div className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/70 uppercase mt-2">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel border border-white/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal
                    className="w-4 h-4 text-primary-fixed-dim"
                    aria-hidden
                  />
                  <span className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/70 uppercase">
                    COMMAND_LOG
                  </span>
                </div>
                <pre className="font-label-caps text-[10px] leading-relaxed text-on-surface/60 whitespace-pre-wrap break-words">
                  {COMMAND_LOG.join("\n")}
                </pre>
              </div>
            </div>
          </aside>

          {/* Dossier list — hidden entries (e.g. individual hyperloop comp pages
              accessed only from inside the combined SpaceX brief) are filtered
              out here but their detail routes still resolve. */}
          <div className="lg:w-3/4 space-y-16 md:space-y-24 lg:space-y-32">
            {PROJECTS.filter((p) => !p.hidden).map((project, idx) => {
              const Icon = project.icon;
              const flipped = idx % 2 === 1;
              const num = String(idx + 1).padStart(2, "0");

              const Visual = (
                <div className="w-full md:w-1/2 overflow-hidden glass-panel border border-white/10 transition-all duration-500 hover:border-primary-fixed-dim group-hover:border-primary-fixed-dim relative">
                  {project.heroImage ? (
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover [object-position:50%_25%] grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] grid-bg flex items-center justify-center relative overflow-hidden">
                      <Icon
                        strokeWidth={0.75}
                        aria-hidden
                        className="w-24 h-24 md:w-32 md:h-32 text-primary-fixed-dim/30 group-hover:text-primary-fixed-dim/60 group-hover:scale-105 transition-all duration-700"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,230,57,0.06), transparent 70%)",
                        }}
                      />
                      <div className="absolute top-3 left-3 font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40">
                        ART_{num}
                      </div>
                      <div className="absolute bottom-3 right-3 font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40">
                        DOSSIER
                      </div>
                    </div>
                  )}
                </div>
              );

              const Body = (
                <div
                  className={`w-full md:w-1/2 flex flex-col justify-between py-2 ${
                    flipped ? "md:text-right md:items-end" : ""
                  }`}
                >
                  <div>
                    <div
                      className={`flex items-center gap-6 mb-4 ${flipped ? "md:justify-end" : "justify-between md:justify-start"}`}
                    >
                      <span
                        className={`font-label-caps text-[12px] tracking-[0.3em] text-primary-fixed-dim ${flipped ? "md:order-2" : ""}`}
                      >
                        ART-{num} // {project.category}
                      </span>
                      <span
                        className={`font-label-caps text-[11px] tracking-[0.3em] text-on-surface-variant/40 ${flipped ? "md:order-1" : ""}`}
                      >
                        {project.year}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-headline-lg text-on-surface mb-6 leading-tight tracking-tight group-hover:text-primary-fixed-dim transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-body-md text-on-surface-variant/80 mb-8 max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap items-center gap-2 ${flipped ? "md:justify-end" : ""}`}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-white/10 font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/70"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1 px-3 py-1 border border-primary-fixed-dim/40 font-label-caps text-[10px] tracking-[0.3em] text-primary-fixed-dim group-hover:bg-primary-fixed-dim group-hover:text-on-primary transition-colors">
                      OPEN DOSSIER
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );

              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group relative block"
                >
                  <div
                    className={`flex flex-col md:flex-row gap-8 md:gap-12 items-start ${flipped ? "md:flex-row-reverse" : ""}`}
                  >
                    {Visual}
                    {Body}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1440px] mx-auto px-gutter py-24 md:py-32 text-center border-t border-white/5">
        <h2 className="font-display text-3xl md:text-headline-lg uppercase tracking-widest mb-6">
          Ready to initiate a new mission?
        </h2>
        <p className="text-on-surface-variant/70 mb-10 max-w-xl mx-auto">
          Open to high-stakes engineering projects, technical leadership roles,
          and conversations about ambitious hardware programs.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-primary-fixed-dim text-on-primary px-8 md:px-10 py-4 font-label-caps text-[11px] tracking-[0.3em] hover:brightness-110 transition-all duration-300 group"
          >
            OPEN CHANNEL
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center gap-3 px-8 md:px-10 py-4 border border-on-surface font-label-caps text-[11px] tracking-[0.3em] text-on-surface hover:bg-on-surface hover:text-background transition-all duration-500"
          >
            VIEW MISSION LOG
          </Link>
        </div>
      </section>

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
              href="/experience"
            >
              Experience
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
