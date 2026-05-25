import type { MetadataRoute } from "next";

import { EXPERIENCE } from "@/lib/experience";
import { PROJECTS } from "@/lib/projects";

// Base URL is read from NEXT_PUBLIC_SITE_URL at build/request time so the
// sitemap can be regenerated for staging vs. production without code changes.
// TODO: set NEXT_PUBLIC_SITE_URL in the deployment env when the production
// domain is finalized — until then, the placeholder is harmless but visible.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://TODO_SITE_URL.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/experience`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const experienceRoutes: MetadataRoute.Sitemap = EXPERIENCE.map((e) => ({
    url: `${SITE_URL}/experience/${e.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Hidden project entries (e.g. individual hyperloop comp pages reached only
  // from the combined SpaceX brief) are intentionally excluded from the sitemap
  // since they're not meant to be entry points from search.
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.filter((p) => !p.hidden).map((p) => ({
    url: `${SITE_URL}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...experienceRoutes, ...projectRoutes];
}
