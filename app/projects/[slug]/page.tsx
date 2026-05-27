import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SiteNav } from "@/components/ui/site-nav";
import {
  PROJECTS,
  getProjectBySlug,
  type ProjectSection,
} from "@/lib/projects";

type SectionGroup = "my-work" | "pod-overview" | "result";

const GROUP_LABEL: Record<SectionGroup, string> = {
  "my-work": "MY CONTRIBUTION",
  "pod-overview": "POD OVERVIEW — TEAM",
  result: "RESULT",
};

/**
 * Accepts either a full YouTube URL (watch?v=, youtu.be/, embed/) or a bare
 * 11-character video ID. Returns the canonical embed URL or null. Honors any
 * `t=` / `start=` start timestamp (1s, 1m30s, 2h15m, or bare seconds).
 */
function youTubeEmbedUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return `https://www.youtube.com/embed/${trimmed}`;
  }
  const idMatch = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  if (!idMatch) return null;

  let startSeconds = 0;
  const timeMatch = trimmed.match(/[?&](?:t|start)=([0-9hms]+)/);
  if (timeMatch) {
    const raw = timeMatch[1];
    if (/^\d+$/.test(raw)) {
      startSeconds = parseInt(raw, 10);
    } else {
      const h = raw.match(/(\d+)h/);
      const m = raw.match(/(\d+)m/);
      const s = raw.match(/(\d+)s/);
      startSeconds =
        (h ? parseInt(h[1], 10) * 3600 : 0) +
        (m ? parseInt(m[1], 10) * 60 : 0) +
        (s ? parseInt(s[1], 10) : 0);
    }
  }

  const base = `https://www.youtube.com/embed/${idMatch[1]}`;
  return startSeconds > 0 ? `${base}?start=${startSeconds}` : base;
}

/**
 * Falls back to title patterns when section.group isn't explicitly set.
 * Recognizes the hyperloop section conventions ("Pod Overview — …",
 * "Result — …", "Competition Day").
 */
function inferGroup(section: ProjectSection): SectionGroup {
  if (section.group) return section.group;
  if (section.title.startsWith("Pod Overview")) return "pod-overview";
  if (
    section.title.startsWith("Result") ||
    section.title.startsWith("Competition Day")
  ) {
    return "result";
  }
  return "my-work";
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Brief | Jian Chen" };
  return {
    title: `${project.title} | Project Brief | Jian Chen`,
    description: project.tagline,
  };
}

export default async function ProjectBriefPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Icon = project.icon;
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const num = String(idx + 1).padStart(2, "0");

  return (
    <>
      <SiteNav scope="page" active="projects" />

      <main className="pt-32">
        {/* Back link */}
        <div className="max-w-[1440px] mx-auto px-gutter mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-label-caps text-[11px] tracking-[0.3em] text-on-surface-variant/60 hover:text-primary-fixed-dim transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            RETURN TO ARCHIVE
          </Link>
        </div>

        {/* Hero */}
        <section className="relative min-h-[60dvh] md:min-h-[720px] flex flex-col justify-end max-w-[1440px] mx-auto px-gutter pb-16 md:pb-20 overflow-hidden">
          {project.heroImage ? (
            <>
              <Image
                src={project.heroImage}
                alt=""
                aria-hidden
                fill
                priority
                sizes="100vw"
                className={`absolute inset-0 z-0 object-cover brightness-[0.55] ${project.heroImageFlipped ? "-scale-x-100" : ""}`}
              />
              <div
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(19,19,19,0.85) 0%, rgba(19,19,19,0.30) 60%, rgba(19,19,19,0.65) 100%), linear-gradient(180deg, rgba(19,19,19,0) 50%, #131313 100%)",
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
                SYSTEMS NOMINAL : PROJECT DOSSIER
              </span>
            </div>
            <div className="font-label-caps text-[11px] tracking-[0.3em] text-on-surface-variant/50">
              ART-{num} / {project.category}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-display uppercase max-w-4xl tracking-tight leading-[0.95]">
              <span className="text-primary-fixed-dim">{project.title}</span>
            </h1>
            <p className="text-body-lg md:text-2xl text-on-surface-variant/80 max-w-2xl">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-6">
              <div>
                <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40 mb-1">
                  ROLE
                </p>
                <p className="font-headline-md text-lg md:text-xl text-on-surface">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40 mb-1">
                  DOMAIN
                </p>
                <p className="font-headline-md text-lg md:text-xl text-on-surface">
                  {project.domain}
                </p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40 mb-1">
                  TIMELINE
                </p>
                <p className="font-headline-md text-lg md:text-xl text-on-surface">
                  {project.year}
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
                  01 // PROJECT OBJECTIVES
                </h3>
                <p className="text-on-surface-variant/80 text-body-lg">
                  {project.briefingSummary}
                </p>
              </div>
              <ul className="space-y-5">
                {project.objectives.map((obj) => (
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
                  {project.tools.map((tool) => (
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-container font-label-caps text-[10px] tracking-[0.3em] border border-white/5 text-on-surface-variant/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-label-caps text-[11px] tracking-[0.3em] text-primary-fixed-dim hover:underline underline-offset-4 group"
                >
                  ORIGINAL WIX PAGE
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </aside>

          {/* Right col — section narrative */}
          <div className="md:col-span-8 space-y-16 md:space-y-24">
            <h3 className="font-label-caps text-[12px] tracking-[0.3em] text-primary-fixed-dim md:hidden">
              02 // OPERATIONS
            </h3>

            {project.sections.map((section, sIdx) => {
              const currGroup = inferGroup(section);
              const prevGroup =
                sIdx > 0 ? inferGroup(project.sections[sIdx - 1]) : null;
              const showDivider = sIdx > 0 && currGroup !== prevGroup;

              return (
                <Fragment key={section.title}>
                  {showDivider && (
                    <div className="flex items-center gap-4 md:gap-5 pt-4 pb-6 border-t border-primary-fixed-dim/30">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim animate-pulse shrink-0 shadow-[0_0_10px_rgba(0,230,57,0.7)]" />
                      <span className="font-label-caps text-xs md:text-[13px] tracking-[0.4em] text-primary-fixed-dim shrink-0">
                        {GROUP_LABEL[currGroup]}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-primary-fixed-dim/50 via-primary-fixed-dim/20 to-transparent" />
                    </div>
                  )}
                  <article className="space-y-6">
                {section.video ? (
                  (() => {
                    const embed = youTubeEmbedUrl(section.video);
                    return embed ? (
                      <div className="aspect-video w-full overflow-hidden border border-white/10 bg-black">
                        <iframe
                          src={embed}
                          title={section.title}
                          className="w-full h-full"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : null;
                  })()
                ) : section.images && section.images.length > 0 ? (
                  <div className="space-y-3 md:space-y-4">
                    {/* First image: featured, full-width 16:9 */}
                    <div className="relative aspect-video w-full overflow-hidden group/img">
                      <Image
                        src={section.images[0]}
                        alt={`${section.title} 1`}
                        fill
                        sizes="(min-width: 768px) 66vw, 100vw"
                        className="object-contain transition-transform duration-700 group-hover/img:scale-[1.02]"
                      />
                    </div>
                    {/* Remaining images: 2-column grid */}
                    {section.images.length > 1 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {section.images.slice(1).map((src, i) => (
                          <div
                            key={src + i}
                            className="relative aspect-[4/3] w-full overflow-hidden group/img"
                          >
                            <Image
                              src={src}
                              alt={`${section.title} ${i + 2}`}
                              fill
                              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                              className="object-contain transition-transform duration-700 group-hover/img:scale-[1.02]"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : section.image ? (
                  <div className="relative aspect-video w-full overflow-hidden border border-white/10 group">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                      style={{ objectPosition: section.objectPosition ?? "50% 25%" }}
                    />
                  </div>
                ) : null}
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
                {section.detailSlug && (
                  <div className="pl-0 md:pl-12">
                    <Link
                      href={`/projects/${section.detailSlug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary-fixed-dim/40 font-label-caps text-[11px] tracking-[0.3em] text-primary-fixed-dim hover:bg-primary-fixed-dim hover:text-on-primary transition-colors group/cta"
                    >
                      READ FULL BRIEF
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                    </Link>
                  </div>
                )}
                  </article>
                </Fragment>
              );
            })}

            {/* Metrics row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-white/5">
              {project.metrics.map((metric) => (
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
                Want to dig deeper?
              </h2>
              <p className="text-on-surface-variant/70 max-w-xl">
                Open a channel to talk through the engineering details, design
                choices, or build process behind this project.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-primary-fixed-dim text-on-primary px-8 md:px-10 py-4 font-label-caps text-[11px] tracking-[0.3em] hover:brightness-110 transition-all duration-300 group whitespace-nowrap"
            >
              OPEN CHANNEL
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
              className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container hover:text-on-surface transition-colors py-2 -my-2"
              href="/projects"
            >
              Archive
            </Link>
            <Link
              className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container hover:text-on-surface transition-colors py-2 -my-2"
              href="/experience"
            >
              Mission Log
            </Link>
            <Link
              className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container hover:text-on-surface transition-colors py-2 -my-2"
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
