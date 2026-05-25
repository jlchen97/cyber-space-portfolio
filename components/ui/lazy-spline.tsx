"use client";

import { useEffect, useRef, useState } from "react";

import { SplineScene } from "./splite";

interface LazySplineProps {
  scene: string;
  className?: string;
  /**
   * IntersectionObserver rootMargin used to decide when to mount the scene.
   * The default starts loading the (heavy) Spline runtime ~one viewport
   * before the section actually scrolls into view, so the canvas is ready by
   * the time the user gets there but doesn't compete with the landing hero
   * for bandwidth on first paint.
   */
  rootMargin?: string;
}

/**
 * Defers mounting `<SplineScene>` until the wrapping element is near the
 * viewport. Use this for Spline scenes that live below the fold — for
 * above-the-fold scenes (e.g. the landing hero robot), keep using
 * `<SplineScene>` directly so the runtime starts immediately.
 *
 * Once mounted, the scene stays mounted (no remounting on scroll-away) so
 * we don't pay the JS-eval + WebGL-init cost more than once per session.
 */
export function LazySpline({
  scene,
  className,
  rootMargin = "200px 0px",
}: LazySplineProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    const el = wrapRef.current;
    if (!el) return;

    // IntersectionObserver is supported in every browser this site targets
    // (Chrome 51+, Safari 12.1+, Firefox 55+). If it's missing the user is
    // far enough out of support that an unrendered Spline scene is the least
    // of their problems — we still fall back, but asynchronously via a 0ms
    // timer so we don't trip the no-sync-setState-in-effect rule.
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setMounted(true), 0);
      return () => window.clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted, rootMargin]);

  return (
    <div ref={wrapRef} className={className}>
      {mounted ? <SplineScene scene={scene} className="w-full h-full" /> : null}
    </div>
  );
}
