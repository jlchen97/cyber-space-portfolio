import Link from "next/link";

import { MobileMenu, type NavLink } from "./mobile-menu";

type Scope = "home" | "page";
type ActiveId =
  | "home"
  | "professional"
  | "experience"
  | "projects"
  | "contact";

interface SiteNavProps {
  /**
   * Which page is this nav rendering on?
   * - "home" → in-page anchors (#home, #professional, #contact) work as-is
   * - "page" → anchors need to route back to home first (/#home, etc)
   */
  scope: Scope;
  /** Highlight the matching nav item */
  active?: ActiveId;
}

/**
 * The single source of truth for the fixed top nav. Renders desktop links
 * inline and delegates the mobile hamburger to <MobileMenu>. Replaces the
 * five copies of nav JSX that used to live in each page file.
 */
export function SiteNav({ scope, active }: SiteNavProps) {
  // On the home page, contact and section anchors are local hashes. From any
  // other page they need to take the user back to "/" first.
  const homeHref = scope === "home" ? "#home" : "/";
  const sectionPrefix = scope === "home" ? "" : "/";

  const links: NavLink[] = [
    { href: `${sectionPrefix}#home`, label: "Home", id: "home" },
    {
      href: `${sectionPrefix}#professional`,
      label: "Professional",
      id: "professional",
    },
    { href: "/experience", label: "Experience", id: "experience" },
    { href: "/projects", label: "Projects", id: "projects" },
    { href: `${sectionPrefix}#contact`, label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="grid grid-cols-[1fr_auto] md:grid-cols-3 items-center max-w-[1440px] mx-auto px-gutter py-6 w-full gap-4">
        <Link
          href={homeHref}
          className="font-display text-headline-md tracking-tighter text-on-surface flex items-center gap-2 justify-self-start"
        >
          Jian Chen
          <span
            aria-hidden
            className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full shadow-[0_0_8px_rgba(0,230,57,0.8)] animate-blink"
          />
        </Link>

        {/* Desktop link list — hidden on mobile, the MobileMenu takes over there. */}
        <div className="hidden md:flex gap-10 items-center justify-center">
          {links.map((link) => {
            const isActive = link.id === active;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={
                  isActive
                    ? "text-primary-fixed-dim border-b border-primary-fixed-dim font-label-caps text-[12px] tracking-[0.3em] transition-all duration-300"
                    : "text-on-surface-variant/60 font-label-caps text-[12px] tracking-[0.3em] hover:text-primary-fixed-dim glow-sm transition-all duration-300"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger — hidden on desktop. */}
        <div className="justify-self-end md:hidden">
          <MobileMenu links={links} active={active} />
        </div>

        {/* Spacer to keep the grid balanced on desktop. */}
        <div aria-hidden className="hidden md:block" />
      </div>
    </nav>
  );
}
