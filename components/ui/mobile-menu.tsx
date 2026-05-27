"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  id: string;
}

interface MobileMenuProps {
  links: NavLink[];
  /** id of the link that should render as "active" in the menu */
  active?: string;
}

/**
 * Hamburger + full-screen slide-down drawer for sub-md viewports.
 *
 * Kept deliberately small: no portal, no focus-trap library, no animation
 * framework. The drawer is a fixed overlay that intercepts a tap on the
 * backdrop or any link to close. Body scroll is locked while open so the
 * fixed nav above doesn't fight the drawer for the scroll context.
 */
export function MobileMenu({ links, active }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-on-surface hover:text-primary-fixed-dim transition-colors"
      >
        <Menu className="w-6 h-6" aria-hidden />
      </button>

      {open && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[60] md:hidden bg-surface/95"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          onClick={(e) => {
            // Click on the backdrop (not on a child) closes the drawer.
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="flex items-center justify-between px-gutter py-6">
            <span className="font-display text-headline-md tracking-tighter text-on-surface flex items-center gap-2">
              Jian Chen
              <span
                aria-hidden
                className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full shadow-[0_0_8px_rgba(0,230,57,0.8)]"
              />
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center w-11 h-11 -mr-2 text-on-surface hover:text-primary-fixed-dim transition-colors"
            >
              <X className="w-6 h-6" aria-hidden />
            </button>
          </div>

          <nav
            className="flex flex-col gap-2 px-gutter pt-8"
            aria-label="Primary"
          >
            {links.map((link) => {
              const isActive = link.id === active;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`font-display text-3xl uppercase tracking-tight py-4 border-b border-white/10 transition-colors ${
                    isActive
                      ? "text-primary-fixed-dim"
                      : "text-on-surface hover:text-primary-fixed-dim"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="px-gutter pt-12">
            <div className="flex items-center gap-3 text-primary-fixed-dim font-label-caps text-[11px] tracking-[0.4em]">
              <span
                aria-hidden
                className="w-2 h-2 bg-primary-fixed-dim rounded-full shadow-[0_0_8px_rgba(0,230,57,0.8)] animate-blink"
              />
              SYSTEMS NOMINAL
            </div>
          </div>
        </div>
      )}
    </>
  );
}
