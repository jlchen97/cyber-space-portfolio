import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  FileText,
  Satellite,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { EXPERIENCE } from "@/lib/experience";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { SiteNav } from "@/components/ui/site-nav";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { LazySpline } from "@/components/ui/lazy-spline";
import { SpecialText } from "@/components/ui/special-text";

const RESUME_URL =
  "https://cf9590f3-77e3-40c9-8362-58710c7c207a.filesusr.com/ugd/0a5de4_c4c204ce42aa4aeb8a5142ba84d7dd91.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/jianlchen/";
const SPLINE_SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const SPLINE_BRAIN = "https://prod.spline.design/oCgPgJzTzCupWGW2/scene.splinecode";

const JOURNEY_FEATURED = ["Level Up Live", "Amazon Robotics", "Tesla"];
const JOURNEY = JOURNEY_FEATURED.map(
  (name) => EXPERIENCE.find((e) => e.company === name)!,
);

export default function Home() {
  return (
    <>
      <SiteNav scope="home" active="home" />

      {/* Hero with Spline 3D scene — full-bleed so the robot has room to breathe. */}
      <section
        id="home"
        className="anchor-offset relative min-h-[100dvh] w-full pt-24 pb-12 flex items-center"
      >
        <Card className="w-full h-[calc(100dvh-7rem)] min-h-[520px] md:min-h-[600px] bg-black/[0.96] relative overflow-hidden rounded-none border-y border-x-0 border-white/10">
          {/* Directional spotlight anchored upper-left so the beam pools over
              the name area. Color softened to a less saturated green. */}
          <Spotlight
            className="-top-40 -left-10 md:-top-20 md:left-20 opacity-60"
            fill="#3aa84d"
          />

          {/* Subtler halo behind "JIAN CHEN". */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 18% 42%, rgba(0,230,57,0.18), rgba(0,230,57,0.05) 45%, transparent 75%)",
            }}
          />
          {/* Right-side darkener — gentle, just enough to recede the robot. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(to right, transparent 55%, rgba(0,0,0,0.22) 92%)",
            }}
          />
          {/* Bottom vignette to ground the composition. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 110%, rgba(0,0,0,0.5), transparent 55%)",
            }}
          />

          <div className="flex flex-col md:flex-row h-full">
            {/* Left: copy. Inner max-w keeps text legible on ultra-wide. */}
            <div className="md:flex-[1] p-8 md:p-14 lg:p-20 relative z-10 flex flex-col justify-center space-y-6 md:max-w-2xl lg:max-w-3xl">
              <div className="flex items-center gap-3 text-primary-fixed-dim font-label-caps text-[12px] tracking-[0.4em]">
                <span className="w-2 h-2 bg-primary-fixed-dim rounded-full shadow-[0_0_8px_rgba(0,230,57,0.8)] animate-blink" />
                SYSTEMS NOMINAL
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-[84px] uppercase tracking-tight leading-none">
                <SpecialText
                  speed={42}
                  className="font-display !h-auto !leading-none uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >
                  JIAN CHEN
                </SpecialText>
              </h1>

              <p className="font-headline-md text-xl md:text-2xl text-neutral-300 max-w-xl leading-snug">
                HERE TO BUILD THE FUTURE
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-label-caps text-[12px] tracking-[0.3em] text-on-surface-variant/60">
                <span>UW ALUM</span>
                <span className="text-on-surface-variant/30">/</span>
                <span>SEATTLE, WA</span>
                <span className="text-on-surface-variant/30">/</span>
                <span className="text-primary-fixed-dim">@ LEVEL UP LIVE</span>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/experience"
                  className="px-8 py-4 border border-on-surface font-label-caps text-[12px] tracking-[0.2em] hover:bg-on-surface hover:text-background transition-all duration-500"
                >
                  VIEW EXPERIENCE
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-4 font-label-caps text-[12px] tracking-[0.2em] flex items-center gap-3 group text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <span className="w-8 h-px bg-on-surface-variant group-hover:w-12 group-hover:bg-primary-fixed-dim transition-all duration-500" />
                  OPEN CHANNEL
                </Link>
              </div>
            </div>

            {/* Right: Spline robot. Hidden on mobile — the WebGL init
                blocks LCP on phones and the robot ends up below the
                text/CTAs in the stacked layout anyway. The spotlight +
                gradients on the card give the left side enough visual
                interest on its own. */}
            <div className="hidden md:flex md:flex-[1.7] relative min-h-[300px]">
              <SplineScene scene={SPLINE_SCENE} className="w-full h-full" />
              <div className="absolute top-6 right-6 z-10 text-right space-y-2 text-on-surface-variant/40 font-label-caps text-[10px] tracking-[0.3em] pointer-events-none">
                <div>LAT 47.6062° N</div>
                <div>LON 122.3321° W</div>
                <div className="text-primary-fixed-dim">● LINK ESTABLISHED</div>
              </div>
              <div className="absolute bottom-6 left-6 z-10 font-label-caps text-[10px] tracking-[0.3em] text-on-surface-variant/40 pointer-events-none">
                UNIT_PRIMARY / REV.2026.05
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Professional / About */}
      <section
        id="professional"
        className="anchor-offset py-section-gap max-w-[1440px] mx-auto px-gutter"
      >
        {/* Mobile: clean stacked layout — no Spline (the overlay math
            calibrated for the desktop square is unreadable at phone widths,
            and the brain is decorative anyway). */}
        <div className="md:hidden space-y-5 mb-12 text-center">
          <div className="font-label-caps text-[12px] tracking-[0.5em] text-on-surface-variant/40">
            PROFESSIONAL_PROFILE
          </div>
          <h2 className="font-display text-3xl leading-tight tracking-tighter max-w-3xl mx-auto">
            Engineering hardware systems that demand{" "}
            <span className="text-primary-fixed-dim">
              uncompromising rigor
            </span>{" "}
            and ship at industrial scale.
          </h2>
          <p className="text-body-md text-on-surface-variant/80 max-w-2xl mx-auto leading-relaxed">
            I&rsquo;m a mechanical and robotics engineer with a track record
            across aerospace, EV manufacturing, marine propulsion, and
            warehouse automation — from designing precision mechanical
            assemblies to managing cross-functional engineering programs at
            fleet scale.
          </p>
        </div>

        {/* Desktop: brain hero with text overlaid — title at top of canvas,
            body at bottom. The brain occupies the middle dead-space of the
            square. Hidden on mobile in favor of the stacked layout above. */}
        <div className="hidden md:block relative w-full aspect-square max-w-5xl mx-auto mb-16">
          {/* Brain canvas + watermark cover wrapped together so the brain
              can be shifted down (away from title, toward description)
              without breaking the watermark cover position. */}
          <div className="absolute inset-0 translate-y-16">
            {/* Brain Spline is below the fold — gate it behind an
                IntersectionObserver so the runtime + scene only load when
                the user scrolls anywhere near it. */}
            <LazySpline
              scene={SPLINE_BRAIN}
              className="absolute inset-0 pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute bottom-0 right-0 w-[160px] h-[44px] bg-surface z-10"
            />
          </div>

          {/* Title overlay — top of the canvas */}
          <div className="absolute inset-x-0 top-0 text-center px-12 pt-12 z-10 space-y-4 -translate-y-16">
            <div className="font-label-caps text-[12px] tracking-[0.5em] text-on-surface-variant/40">
              PROFESSIONAL_PROFILE
            </div>
            <h2 className="font-display text-5xl lg:text-6xl leading-tight tracking-tighter max-w-3xl mx-auto">
              Engineering hardware systems that demand{" "}
              <span className="text-primary-fixed-dim">
                uncompromising rigor
              </span>{" "}
              and ship at industrial scale.
            </h2>
          </div>

          {/* Body overlay — bottom of the canvas */}
          <div className="absolute inset-x-0 bottom-0 text-center px-12 pb-16 z-10">
            <p className="text-body-lg text-on-surface-variant/80 max-w-2xl mx-auto leading-relaxed">
              I&rsquo;m a mechanical and robotics engineer with a track record
              across aerospace, EV manufacturing, marine propulsion, and
              warehouse automation — from designing precision mechanical
              assemblies to managing cross-functional engineering programs at
              fleet scale.
            </p>
          </div>
        </div>

        {/* Stat panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "DOMAIN", value: "ROBOTICS" },
            { label: "CLEARANCE", value: "FULL_STACK_HW" },
            { label: "ALMA_MATER", value: "U-DUB" },
            { label: "STATUS", value: "ACTIVE", green: true },
          ].map((stat) => (
            <div
              key={stat.label}
              className="space-y-2 cyber-border p-5 glass-panel"
            >
              <div className="text-primary-fixed-dim font-label-caps text-[10px] tracking-[0.3em]">
                {stat.label}
              </div>
              <div
                className={`font-display text-2xl ${stat.green ? "text-primary-fixed-dim" : ""}`}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey — compact summary, links to /experience for the full Mission Log */}
      <section
        id="journey"
        className="anchor-offset py-24 border-y border-white/5 bg-surface-container-low"
      >
        <div className="max-w-[1440px] mx-auto px-gutter">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="space-y-6 max-w-xl">
              <div className="font-label-caps text-[12px] tracking-[0.5em] text-on-surface-variant/40">
                TRAJECTORY_LOG
              </div>
              <h2 className="font-display text-3xl md:text-headline-lg uppercase">
                Journey
              </h2>
              <p className="text-on-surface-variant/70 text-body-md">
                A timeline of operational excellence across major tech frontiers.
              </p>
              <Link
                href="/experience"
                className="mt-2 inline-block px-8 py-3 bg-primary-fixed-dim text-on-primary font-label-caps text-[11px] tracking-[0.2em] hover:brightness-110 transition-all duration-300"
              >
                VIEW FULL MISSION LOG
              </Link>
            </div>
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-1">
              {JOURNEY.map((item, idx) => (
                <div
                  key={item.company}
                  className="p-8 border border-white/5 bg-surface-container-high/50 group hover:bg-surface-container-highest transition-colors duration-500"
                >
                  <div className="text-primary-fixed-dim font-label-caps text-[10px] mb-4 tracking-[0.3em]">
                    PHASE_0{idx + 1}
                  </div>
                  <h4 className="font-display text-body-lg text-on-surface mb-2">
                    {item.company}
                  </h4>
                  <p className="text-on-surface-variant/60 text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Specs */}
      <section className="py-24 bg-surface-container-lowest border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
            {[
              { num: "06", label: "DEPLOYMENTS" },
              { num: "08", label: "PROJECTS_LOGGED" },
              { num: "04", label: "HYPERLOOP_SEASONS" },
              { num: "∞", label: "CURIOSITY" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-3">
                <div className="font-display text-4xl md:text-[56px] text-on-surface">
                  {stat.num}
                </div>
                <div className="font-label-caps text-[12px] tracking-[0.3em] text-primary-fixed-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="anchor-offset py-section-gap max-w-[1440px] mx-auto px-gutter"
      >
        <div className="grid grid-cols-12 gap-12 items-end">
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <div className="font-label-caps text-[12px] tracking-[0.5em] text-on-surface-variant/40">
              SIGNAL_CHANNELS
            </div>
            <h2 className="font-display text-4xl md:text-[64px] leading-tight tracking-tighter">
              Open a <span className="text-primary-fixed-dim">channel</span>.
            </h2>
            <p className="text-body-lg text-on-surface-variant/70 max-w-xl">
              Currently COO at Level Up Live. Always interested in
              conversations about hardware, automation, and ambitious
              engineering programs.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between cyber-border glass-panel px-6 py-5 group hover:border-primary-fixed-dim transition-colors"
            >
              <div>
                <div className="font-label-caps text-[10px] text-primary-fixed-dim tracking-[0.3em]">
                  CHANNEL_01 / PROFESSIONAL
                </div>
                <div className="font-headline-md text-xl text-on-surface mt-1">
                  LinkedIn → /in/jianlchen
                </div>
              </div>
              <ArrowUpRight className="text-on-surface-variant group-hover:text-primary-fixed-dim transition-colors" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between cyber-border glass-panel px-6 py-5 group hover:border-primary-fixed-dim transition-colors"
            >
              <div>
                <div className="font-label-caps text-[10px] text-primary-fixed-dim tracking-[0.3em]">
                  CHANNEL_02 / DOSSIER
                </div>
                <div className="font-headline-md text-xl text-on-surface mt-1">
                  Resume.pdf
                </div>
              </div>
              <Download className="text-on-surface-variant group-hover:text-primary-fixed-dim transition-colors" />
            </a>
            <Link
              href="/projects"
              className="flex items-center justify-between cyber-border glass-panel px-6 py-5 group hover:border-primary-fixed-dim transition-colors"
            >
              <div>
                <div className="font-label-caps text-[10px] text-primary-fixed-dim tracking-[0.3em]">
                  CHANNEL_03 / ARCHIVE
                </div>
                <div className="font-headline-md text-xl text-on-surface mt-1">
                  Projects → /projects
                </div>
              </div>
              <ArrowRight className="text-on-surface-variant group-hover:text-primary-fixed-dim transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-white/5 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto px-gutter gap-8">
          <div className="flex flex-col gap-3">
            <div className="font-display text-body-lg text-on-surface uppercase tracking-widest flex items-center gap-2">
              Jian Chen
              <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full shadow-[0_0_8px_rgba(0,230,57,0.8)] animate-blink" />
            </div>
            <div className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container">
              © 2026 JIAN CHEN. SYSTEMS NOMINAL.
            </div>
          </div>
          <div className="flex gap-10">
            <Link
              className="font-label-caps text-[12px] tracking-[0.2em] text-on-tertiary-container hover:text-on-surface transition-colors"
              href="#home"
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
              href="/projects"
            >
              Projects
            </Link>
          </div>
          <div className="flex gap-5">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-tertiary-container hover:text-primary-fixed-dim transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-tertiary-container hover:text-primary-fixed-dim transition-colors"
              aria-label="Resume"
            >
              <FileText className="w-5 h-5" />
            </a>
            <Link
              href="#contact"
              className="text-on-tertiary-container hover:text-primary-fixed-dim transition-colors"
              aria-label="Contact"
            >
              <Satellite className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
