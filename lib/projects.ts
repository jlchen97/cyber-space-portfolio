import {
  Car,
  DraftingCompass,
  Globe,
  MonitorSmartphone,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface ProjectSection {
  title: string;
  body: string;
  /** Optional photo path under /public */
  image?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectEntry {
  /** URL slug — also serves as folder name under /public/images/projects/ */
  slug: string;
  title: string;
  /** Short uppercase category, e.g. "R&D" / "DESIGN" / "MECH" */
  category: string;
  /** Free-form date / duration string */
  year: string;
  icon: LucideIcon;
  /** Optional external link (Wix detail page, etc.) */
  link?: string;

  // Dossier card on /projects
  /** Cover photo (matches the project home page card) */
  heroImage?: string;
  /** 2-sentence dossier card body */
  description: string;
  /** Up to 3 short tags rendered as chips on the card */
  tags: string[];

  // Detail page (mirrors the Mission Brief structure)
  role: string;
  domain: string;
  tagline: string;
  briefingSummary: string;
  objectives: string[];
  tools: string[];
  sections: ProjectSection[];
  metrics: ProjectMetric[];
}

const HYPERLOOP_DIR = "/images/projects/spacex-hyperloop";
const APPLE_DIR = "/images/projects/apple-design-challenge";
const EWB_DIR = "/images/projects/ewb";
const GOKART_DIR = "/images/projects/go-kart";
const CAD_DIR = "/images/projects/cad-library";

export const PROJECTS: ProjectEntry[] = [
  {
    slug: "spacex-hyperloop",
    title: "SpaceX Hyperloop Pod I–IV",
    category: "R&D",
    year: "2016–2020",
    icon: Rocket,
    link: "https://cjian1997.wixsite.com/home/hyperloop-competition-1",

    heroImage: `${HYPERLOOP_DIR}/stitch-hero.jpg`,
    description:
      "Four generations of high-speed transport architecture across SpaceX's Hyperloop competition. Worked the full stack — ground systems, suspension dynamics, cold-gas propulsion, and propulsion integration ownership.",
    tags: ["MAGLEV", "COLD_GAS", "COMPOSITES"],

    role: "Ground Systems → Propulsion Integration",
    domain: "Aerospace R&D",
    tagline:
      "Four years across the Washington Hyperloop pod team — from ground rigs to propulsion integration ownership.",
    briefingSummary:
      "Started as a ground-system engineer building strain-gauge test rigs, advanced through suspension dynamics and cold-gas propulsion design, and ultimately took ownership of the full propulsion integration CAD across four competition seasons.",
    objectives: [
      "Magnetic propulsion + lateral stability test rigs (Comp I)",
      "Quarter-car suspension dynamics & FEA validation (Comp II)",
      "Aluminum cold-gas thruster nozzle design (Comp III)",
      "Full-pod CAD ownership + cross-team pneumatic integration (Comp IV)",
    ],
    tools: [
      "SolidWorks",
      "FEMAP",
      "MATLAB",
      "Simulink",
      "Aluminum 6061",
      "Toray T700",
    ],
    sections: [
      {
        title: "Competition I — Magnetic Propulsion (2016–2017)",
        body:
          "Stepped into the Washington Hyperloop team as a ground-system engineer. Designed and manufactured a test rig — load cell arm, adapters, frame, and a 'meat slicer' aluminum-disk motor simulator — to gather strain-gauge data on every magnetic system on the pod. Among 1000+ initial competitors and 30 finalists, we were one of the few teams with a working propulsion system: 6th worldwide / 4th in the U.S., with our Halbach-array maglev pushing the pod up to 30 mph.",
        image: `${HYPERLOOP_DIR}/0a5de4_4b89267a12824a64ac9f646949af4f29~mv2.jpg`,
      },
      {
        title: "Competition II — Suspension Dynamics (2017–2018)",
        body:
          "Promoted to the suspension team. Designed and led manufacturing of a test rig to validate quarter-car dynamic models built in MATLAB/Simulink, and coordinated with Fox Shox on custom bike-shock specifications. Ran FEA on the swing arm to confirm a minimum 2.0 safety factor under ultimate load. Estimated pod top speed: 120 mph; first sub-team to complete assembly.",
        image: `${HYPERLOOP_DIR}/0a5de4_556b70c791ca464ea094f621d68f74b0~mv2.jpg`,
      },
      {
        title: "Competition III — Cold Gas Propulsion (2018)",
        body:
          "Transitioned to the propulsion team. Designed and manufactured two aluminum 6061 conical nozzles that choke compressed nitrogen to supersonic flow, generating 2,805 N of thrust. Solo contributor for both nozzle fabs (lathe + 15° end-mill secondary ops, 0.002\" per pass). Achieved 30:1 safety factor in Instron thread tensile testing. The pod placed 4th worldwide / 1st in the U.S., hit 60+ mph at 1,000 psi (rated for 3,000), and won the SpaceX Innovation Award — the only cold-gas thruster to pass all required checklists.",
        image: `${HYPERLOOP_DIR}/0a5de4_5ea136c74e9f461c85bcd57fee3e73ce~mv2.jpg`,
      },
      {
        title: "Competition IV — Propulsion Integration Engineer (2019–2020)",
        body:
          "Stepped up as Propulsion Integration Engineer. Owned the complete CAD model, designed pneumatic schematics, and merged cross-team systems (notably braking-propulsion line consolidation). Improved hydrostatic pressure and static-fire test processes. Vs. 2018: $3,000+ cost savings, 20%+ weight reduction, 30%+ acceleration increase, 2× test efficiency. Peak thrust: 335 lbf simulated, 300 lbf measured; impulse: 1,051 → 1,270 lbf·s.",
        image: `${HYPERLOOP_DIR}/0a5de4_4b89267a12824a64ac9f646949af4f29~mv2.jpg`,
      },
    ],
    metrics: [
      { value: "1st US", label: "COMP-III RANK + INNOVATION AWARD" },
      { value: "4×", label: "COMPETITION SEASONS" },
      { value: "300 lbf", label: "MEASURED PEAK THRUST (CMP-IV)" },
    ],
  },

  {
    slug: "apple-design-challenge",
    title: "Apple Design Challenge",
    category: "DESIGN",
    year: "2021",
    icon: MonitorSmartphone,
    link: "https://cjian1997.wixsite.com/home/apple",

    heroImage: `${APPLE_DIR}/0a5de4_3ea8fd909f1647f09d3242172e718373~mv2.jpg`,
    description:
      "A conceptual product-design exercise built around future-state Apple devices and spatial computing. Focused on haptic-visual feedback loops, low-cognitive-load layouts, and the ergonomics of AR/VR ecosystems.",
    tags: ["UI/UX", "SPATIAL", "PROTOTYPE"],

    role: "Designer",
    domain: "Product Design",
    tagline:
      "Conceptual product design for a future-state Apple ecosystem.",
    briefingSummary:
      "A design-led exploration of next-generation Apple device paradigms — haptic feedback, spatial UI, and ergonomic interaction patterns rendered through visual mockups.",
    objectives: [
      "Conceptual exploration of future Apple device form factors",
      "Visual mockups exploring haptic + spatial UI patterns",
    ],
    tools: ["Figma / Sketch", "Industrial Design", "Visual Storytelling"],
    sections: [
      {
        title: "The Brief",
        body:
          "Framed as a self-directed design challenge under the Apple aesthetic. The output is primarily visual — mockups and rendered concepts exploring how Apple's design language might evolve toward spatial computing and AR/VR contexts.",
        image: `${APPLE_DIR}/0a5de4_3ea8fd909f1647f09d3242172e718373~mv2.jpg`,
      },
      {
        title: "Design Showcase",
        body:
          "A series of design assets — conceptual interfaces, rendered devices, and interaction sketches — illustrating product paradigms for the next generation of Apple hardware. Visual-first, light on narrative; the work speaks through the imagery.",
      },
    ],
    metrics: [
      { value: "07", label: "DESIGN ASSETS" },
      { value: "1", label: "CONCEPTUAL BRIEF" },
      { value: "VISUAL", label: "OUTPUT FORMAT" },
    ],
  },

  {
    slug: "ewb",
    title: "UW Engineers Without Borders",
    category: "FIELD",
    year: "2017–2018",
    icon: Globe,
    link: "https://cjian1997.wixsite.com/home/engineers-w-out-borders",

    heroImage: `${EWB_DIR}/0a5de4_9b546edfab1f45d285d8e9cdce0b4536~mv2.jpg`,
    description:
      "Volunteer engineering with the University of Washington EWB chapter. Joined the Nicaragua initiative on composting-toilet design, then promoted to Mechanical & Manufacturing Lead on a solar-powered cell phone charging station for the UW campus.",
    tags: ["COMMUNITY", "MANUFACTURING", "VOLUNTEER"],

    role: "Mechanical & Manufacturing Lead",
    domain: "Community Engineering",
    tagline: "Volunteer engineering for community-scale infrastructure.",
    briefingSummary:
      "Began with composting toilet design for Nicaragua via the GIVE program; promoted to Mechanical & Manufacturing Lead on a solar-powered campus charging station that debuted at Engineering Discovery Day and Earth Day.",
    objectives: [
      "Composting toilet design for Nicaraguan communities (Nicaragua initiative)",
      "Lead mechanical design + manufacturing on a solar phone-charging station",
      "Coordinate multi-team manufacturing through Engineering Discovery Day",
    ],
    tools: ["CAD Design", "Machine Shop", "Project Management"],
    sections: [
      {
        title: "It Started in Sophomore Year",
        body:
          "Joined the UW chapter of Engineers Without Borders after acceptance into the GIVE volunteer program. The chapter splits across three divisions — Nicaragua, Guatemala, and Local Projects — and I started by contributing to composting toilet infrastructure design for Nicaraguan communities.",
      },
      {
        title: "Mechanical & Manufacturing Lead",
        body:
          "After autumn quarter, I was promoted to Mechanical & Manufacturing Lead on the local-projects team building a solar-powered cell phone charging station for the UW campus. Iterated through multiple intermediate designs; the final one was selected for its simplicity and cost efficiency. Dedicated all of spring break to the structural layout.",
      },
      {
        title: "Engineering Discovery Day & Earth Day",
        body:
          "Once design was locked, manufacturing started. I learned to communicate across the team, splitting up the build so every member had a role in the assembly process. The completed prototype was presented during Engineering Discovery Day and Earth Day.",
      },
      {
        title: "Reflection",
        body:
          "EWB sharpened my project-management instincts and gave me a venue to push sustainable-tech awareness. It also reframed engineering for me — from 'build the thing' to 'build the thing because someone needs it'.",
      },
    ],
    metrics: [
      { value: "2", label: "INITIATIVES (NICARAGUA + LOCAL)" },
      { value: "LEAD", label: "MECHANICAL & MFG ROLE" },
      { value: "2", label: "PUBLIC PRESENTATIONS" },
    ],
  },

  {
    slug: "go-kart",
    title: "150cc Go Kart",
    category: "MECH",
    year: "Summer 2015",
    icon: Car,
    link: "https://cjian1997.wixsite.com/home/go-kart",

    heroImage: `${GOKART_DIR}/0a5de4_dd4c69f2a9ac41878302cecac1987be5~mv2.jpg`,
    description:
      "A 150cc go kart hand-built the summer before college from a salvaged lawnmower engine and an old four-wheeler. Engine rebuild, chassis fabrication, and arc welding — start-to-running in just over a month.",
    tags: ["FABRICATION", "WELDING", "SALVAGE"],

    role: "Builder",
    domain: "Mechanical Fabrication",
    tagline: "A childhood dream, built from salvaged parts before freshman year.",
    briefingSummary:
      "Disassembled and rebuilt a broken lawnmower engine from a neighbor and salvaged tubing from a friend's old four-wheeler — turned them into a working 150cc go kart through trial-and-error and arc welding.",
    objectives: [
      "Rebuild & reorient a salvaged lawnmower engine for horizontal drive",
      "Design & arc-weld a chassis from salvaged steel tubing",
      "End-to-end build in a single summer",
    ],
    tools: ["Arc Welding", "Engine Rebuild", "Mechanical Design"],
    sections: [
      {
        title: "It Started With a Childhood Dream",
        body:
          "Summer before I left for college, I decided to fulfill one of my childhood dreams: building my own go kart. The starting kit: a broken lawnmower from my neighbor and an old non-working four-wheeler from a friend.",
      },
      {
        title: "The Process",
        body:
          "Disassembled and rebuilt the lawnmower engine through trial and error, reorienting it for horizontal drive shaft operation. Designed the chassis on paper, then fabricated it using arc welding on salvaged steel tubing. Lekai Tong helped with fundraising via GoFundMe; his father provided shop access.",
      },
      {
        title: "The Result",
        body:
          "The finished go kart wasn't the most beautiful thing you've seen at first sight — but it ran, and it was a hell of a learning experience. Total build time: a little over a month, start to first drive.",
      },
    ],
    metrics: [
      { value: "150cc", label: "ENGINE DISPLACEMENT" },
      { value: "~1 mo", label: "BUILD DURATION" },
      { value: "$0", label: "PARTS BUDGET (SALVAGED)" },
    ],
  },

  {
    slug: "cad-library",
    title: "CAD Design Library",
    category: "SYSTEMS",
    year: "Ongoing",
    icon: DraftingCompass,
    link: "https://cjian1997.wixsite.com/home/cad",

    heroImage: `${CAD_DIR}/0a5de4_1a693288a5b542faa5842d0c101cd97f~mv2.jpg`,
    description:
      "A self-directed CAD portfolio focused on building fluency in mechanical design. Headline pieces: a 45-part V6 twin-turbo engine and a custom dragster chassis with non-standard wishbone suspension geometry.",
    tags: ["SOLIDWORKS", "FUSION_360", "EXPLODED_VIEWS"],

    role: "Designer",
    domain: "Mechanical CAD",
    tagline:
      "Self-directed CAD studies — from a 45-part V6 to a Lamborghini-style dragster.",
    briefingSummary:
      "An evolving repository of mechanical CAD projects designed to push fluency in SolidWorks and Fusion 360 — full assemblies, exploded views, and parts published to GrabCAD.",
    objectives: [
      "Build a 45-part V6 twin-turbo engine assembly with full exploded view",
      "Design a dragster around the V6 with custom suspension geometry",
      "Publish working models to GrabCAD",
    ],
    tools: ["SolidWorks", "Fusion 360", "GrabCAD"],
    sections: [
      {
        title: "V6 Twin-Turbo Engine",
        body:
          "Inspired by the Mad Max: Fury Road aesthetic, this engine assembly comprises 45 individual parts and roughly 50 hours of modeling. Components include the engine block, manifold, turbo, crankshaft, piston, and air filter — all rendered as a complete exploded view. Modeled in SolidWorks; available for download on GrabCAD.",
        image: `${CAD_DIR}/0a5de4_1a693288a5b542faa5842d0c101cd97f~mv2.jpg`,
      },
      {
        title: "Dragster",
        body:
          "Built around the V6 engine — a custom chassis with a suspension system inspired by Lamborghini's geometry, but rotated so the shock compresses at an angle rather than horizontally. One shock, one coil, two wishbones connected to the drive shaft. Body and seat work moved into Fusion 360 for the harder organic surfaces.",
      },
    ],
    metrics: [
      { value: "45", label: "V6 PART COUNT" },
      { value: "~50 hr", label: "V6 MODELING TIME" },
      { value: "2", label: "MODELS PUBLISHED ON GRABCAD" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
