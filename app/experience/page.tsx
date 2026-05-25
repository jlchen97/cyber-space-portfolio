import Link from "next/link";
import Image from "next/image";

import { Globe } from "@/components/ui/cobe-globe";
import { EXPERIENCE } from "@/lib/experience";

const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#professional", label: "Professional" },
  { href: "/experience", label: "Experience", active: true },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

// Color-code by company so the globe reads at a glance. Each company gets a
// distinct hue; Seattle stays cyber-green as the multi-role home base.
const COLOR_HOME: [number, number, number] = [0, 0.9, 0.22]; // cyber green
const COLOR_LEVELUP: [number, number, number] = [0.65, 0.4, 1]; // purple
const COLOR_TESLA: [number, number, number] = [0.95, 0.25, 0.2]; // red
const COLOR_AMAZON: [number, number, number] = [1, 0.6, 0.1]; // amber

const SEA: [number, number] = [47.6062, -122.3321];
const GLOBE_MARKERS = [
  { id: "seattle", location: SEA, label: "Seattle", color: COLOR_HOME },
  {
    id: "redmond",
    location: [47.674, -122.1215] as [number, number],
    label: "Redmond",
    color: COLOR_LEVELUP,
  },
  {
    id: "reno",
    location: [39.5296, -119.8138] as [number, number],
    label: "Reno",
    color: COLOR_TESLA,
  },
  {
    id: "shanghai",
    location: [31.2304, 121.4737] as [number, number],
    label: "Shanghai",
    color: COLOR_TESLA,
  },
  {
    id: "lasvegas",
    location: [36.1699, -115.1398] as [number, number],
    label: "Las Vegas",
    color: COLOR_AMAZON,
  },
  {
    id: "nyc",
    location: [40.7128, -74.006] as [number, number],
    label: "New York",
    color: COLOR_AMAZON,
  },
  {
    id: "miami",
    location: [25.7617, -80.1918] as [number, number],
    label: "Miami",
    color: COLOR_AMAZON,
  },
  {
    id: "austin",
    location: [30.2672, -97.7431] as [number, number],
    label: "Austin",
    color: COLOR_AMAZON,
  },
  {
    id: "chicago",
    location: [41.8781, -87.6298] as [number, number],
    label: "Chicago",
    color: COLOR_AMAZON,
  },
  {
    id: "sandiego",
    location: [32.7157, -117.1611] as [number, number],
    label: "San Diego",
    color: COLOR_AMAZON,
  },
];

// Arcs are drawn but left unlabeled — the chips were piling up over North
// America. The line itself conveys the deployment trajectory.
const GLOBE_ARCS = [
  { id: "sea-reno", from: SEA, to: [39.5296, -119.8138] as [number, number] },
  { id: "sea-sha", from: SEA, to: [31.2304, 121.4737] as [number, number] },
  { id: "sea-las", from: SEA, to: [36.1699, -115.1398] as [number, number] },
  { id: "sea-nyc", from: SEA, to: [40.7128, -74.006] as [number, number] },
  { id: "sea-miami", from: SEA, to: [25.7617, -80.1918] as [number, number] },
  { id: "sea-austin", from: SEA, to: [30.2672, -97.7431] as [number, number] },
  { id: "sea-chicago", from: SEA, to: [41.8781, -87.6298] as [number, number] },
  {
    id: "sea-sandiego",
    from: SEA,
    to: [32.7157, -117.1611] as [number, number],
  },
];

// Legend rendered below the globe — maps colors → companies.
const GLOBE_LEGEND = [
  { color: "#00e63a", label: "Home Base", note: "Seattle (4 roles)" },
  { color: "#a766ff", label: "Level Up Live", note: "Redmond" },
  { color: "#f24033", label: "Tesla", note: "Reno · Shanghai" },
  {
    color: "#ff9919",
    label: "Amazon",
    note: "Las Vegas · NYC · Miami · Austin · Chicago · San Diego",
  },
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
        {/* Hero — Mission Log header + Cobe deployment globe */}
        <header className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-fixed-dim animate-pulse" />
              <span className="font-label-caps text-[12px] text-primary-fixed-dim tracking-[0.4em]">
                SYSTEMS NOMINAL // ACTIVE DEPLOYMENTS
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-display uppercase tracking-tight">
              Mission Log
            </h1>
            <p className="text-body-lg text-on-surface-variant/80 max-w-2xl">
              A chronological record of engineering deployments and architectural
              milestones — from civil infrastructure and consulting through EV
              propulsion, manufacturing, robotics, and engineering leadership.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 max-w-md">
              <div>
                <div className="font-display text-2xl md:text-3xl text-primary-fixed-dim">
                  10
                </div>
                <div className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/50 mt-1">
                  CITIES
                </div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-3xl text-primary-fixed-dim">
                  02
                </div>
                <div className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/50 mt-1">
                  CONTINENTS
                </div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-3xl text-primary-fixed-dim">
                  06
                </div>
                <div className="font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/50 mt-1">
                  DEPLOYMENTS
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
            <Globe
              markers={GLOBE_MARKERS}
              arcs={GLOBE_ARCS}
              dark={1}
              mapBrightness={6}
              baseColor={[0.12, 0.12, 0.12]}
              markerColor={[0, 0.9, 0.22]}
              arcColor={[0, 0.9, 0.22]}
              glowColor={[0.05, 0.3, 0.1]}
              markerSize={0.05}
              markerElevation={0.02}
              arcWidth={0.8}
              arcHeight={0.4}
            />
            <ul className="mt-6 space-y-2.5">
              {GLOBE_LEGEND.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-[12px]"
                >
                  <span
                    aria-hidden
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 8px ${item.color}80`,
                    }}
                  />
                  <span className="font-label-caps text-[11px] tracking-[0.2em] text-on-surface w-[120px] shrink-0">
                    {item.label}
                  </span>
                  <span className="text-on-surface-variant/60 text-[12px] truncate">
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-center font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/30 mt-6">
              DRAG TO SPIN
            </p>
          </div>
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
                    <Image
                      src={entry.heroImage}
                      alt={entry.company}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-100 group-hover:scale-105"
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
