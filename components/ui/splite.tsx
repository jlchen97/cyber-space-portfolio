"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 text-on-surface-variant/50">
            <div className="w-8 h-8 border border-primary-fixed-dim/40 border-t-primary-fixed-dim rounded-full animate-spin" />
            <span className="font-label-caps text-[10px] tracking-[0.3em]">
              INITIALIZING UNIT
            </span>
          </div>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
