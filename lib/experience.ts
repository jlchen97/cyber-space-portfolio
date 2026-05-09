import {
  Anchor,
  Cpu,
  DraftingCompass,
  Factory,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface BriefingSection {
  title: string;
  body: string;
  /** Optional path under /public, e.g. "/images/experience/amazon-robotics/foo.jpg" */
  image?: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  // Identity
  slug: string;
  company: string;
  role: string;
  location: string;
  icon: LucideIcon;

  // Mission Log card
  summary: string;
  objectives: string[];
  tags: string[];
  /** Thumbnail shown on the Mission Log card and as the briefing hero bg */
  heroImage?: string;

  // Mission Brief detail page
  tagline: string;
  domain: string;
  duration: string;
  briefingSummary: string;
  sections: BriefingSection[];
  tools: string[];
  metrics: Metric[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    slug: "level-up-live",
    company: "Level Up Live",
    role: "Chief Operating Officer",
    location: "REDMOND / WA",
    icon: Terminal,
    summary: "Driving operations across a live, real-time platform.",
    objectives: [
      "Operations leadership across a venture-backed startup",
      "Cross-functional execution and strategic delivery",
    ],
    tags: ["EXECUTIVE", "STARTUP", "OPERATIONS"],
    tagline:
      "Driving operations and strategy at a live-experience startup.",
    domain: "Operations & Strategy",
    duration: "Current",
    briefingSummary:
      "Owning operations end-to-end — strategy, execution, and team performance from concept through delivery.",
    // Placeholder narrative — swap with your actual COO scope when ready.
    sections: [
      {
        title: "Operations Leadership",
        body: "Leading the company's operations end-to-end — driving execution across product, engineering, and go-to-market functions. Setting operating cadence, hiring, and resourcing decisions across the org.",
      },
      {
        title: "Strategy & Execution",
        body: "Translating strategic priorities into operating plans and shipping cadence. Aligning cross-functional teams against business goals and ensuring decisions ladder up to user-facing impact.",
      },
    ],
    tools: ["Operations", "Strategy", "Cross-functional Leadership"],
    metrics: [
      { value: "COO", label: "ROLE" },
      { value: "ACTIVE", label: "STATUS" },
      { value: "0→1", label: "STAGE" },
    ],
  },
  {
    slug: "amazon-robotics",
    company: "Amazon Robotics",
    role: "Engineering Project Manager / Robotics Project Engineer",
    location: "SEATTLE / WA",
    icon: Cpu,
    summary:
      "Driving cross-functional robotics deployments at fleet scale.",
    objectives: [
      "Fleet-scale robotics deployment programs",
      "Cross-team integration through field rollout",
    ],
    tags: ["ROBOTICS", "PROGRAM_MGMT", "FLEET_SCALE"],
    heroImage:
      "/images/experience/amazon-robotics/0a5de4_334dcfcd7ecf461f9349d63057bc64dc~mv2.jpg",
    tagline:
      "Pilot to mission-critical: scaling utility deployments across 100+ Amazon facilities.",
    domain: "Robotics Deployment",
    duration: "Apr 2021 – Jun 2023",
    briefingSummary:
      "Led the Utility Centralization Program from a pilot through to a mission-critical, multi-million-dollar program standardizing deployment of automation infrastructure across North American fulfillment.",
    sections: [
      {
        title: "Utility Centralization Program",
        body: "Led a pilot program in the Reliability and Maintenance Engineering (RDE) org that scaled to 100+ deployments across 38 states in North America. Standardized processes for electrical, data, pneumatic, and other infrastructure work supporting Kermit, Smartpoly, and Directed Palletization automation technologies, and transitioned the pilot into a mission-critical program by end of 2021.",
        image:
          "/images/experience/amazon-robotics/0a5de4_2f839118b01245d68376422fa5b37504~mv2.jpg",
      },
      {
        title: "Vendor Strategy & Contracts",
        body: "Revised the 2021 RFP and added 25% more content. Led executive vendor meetings and on-site tours. In 2022 selected 4 vendors and solidified $2.8M+ of utility contracts with $1M in initial savings; in 2023 selected 3 vendors and solidified $1.4M+ in contracts.",
        image:
          "/images/experience/amazon-robotics/0a5de4_4f3ba1de98194ae9bd3f8e76ccc5631a~mv2.jpg",
      },
      {
        title: "Training & Capacity Building",
        body: "Trained and developed 10+ onsite Construction Managers, reducing internal resourcing from 4 to 1 (≈6,240 hours of annualized savings). Increased deployment capability from 57 sites/year to 150+ — roughly a 3× capacity increase.",
        image:
          "/images/experience/amazon-robotics/0a5de4_25e01021e5b04b2089b8347534dcc1de~mv2.jpg",
      },
      {
        title: "Systems & Documentation",
        body: "Built the operating fabric the program ran on — a PPM tracking system, a centralized Wiki, a SIM ticketing pipeline, and deployment work instructions on the Field-Logs platform with embedded safety audits.",
        image:
          "/images/experience/amazon-robotics/0a5de4_c6859c4f80014c4180e442d5e0eeae2e~mv2.jpg",
      },
      {
        title: "Kiva Drive Induction (LAS7)",
        body: "Managed retrofit induction of approximately 800 Kiva drives at the Las Vegas (LAS7) facility, coordinating cross-functional schedules and on-site execution.",
        image:
          "/images/experience/amazon-robotics/0a5de4_8ffccd9c7df7411aba05755fc81585f9~mv2.jpg",
      },
    ],
    tools: [
      "Field-Logs",
      "PPM Tracking",
      "RFP Strategy",
      "Excel",
      "SIM",
      "Construction Mgmt",
    ],
    metrics: [
      { value: "100+", label: "DEPLOYMENTS / 38 STATES" },
      { value: "~3×", label: "SITES/YEAR CAPACITY" },
      { value: "$1M+", label: "INITIAL SAVINGS" },
    ],
  },
  {
    slug: "pure-watercraft",
    company: "Pure Watercraft",
    role: "Mechanical Engineering Intern",
    location: "SEATTLE / WA",
    icon: Zap,
    summary:
      "Mechanical components for all-electric marine propulsion.",
    objectives: [
      "Components for all-electric outboard marine propulsion",
      "Design, validation, and integration of EV drivetrains",
    ],
    tags: ["EV_PROPULSION", "MECHANICAL"],
    heroImage:
      "/images/experience/pure-watercraft/0a5de4_8e1741467154454db1798a780232d878~mv2.jpg",
    tagline:
      "R&D for the next generation of all-electric marine outboards.",
    domain: "Electric Propulsion",
    duration: "Co-op Cycle",
    briefingSummary:
      "Drove R&D of marine-grade coating, corrosion prevention, and hardware prototyping across the electric outboard, battery pack, and charger product lines.",
    sections: [
      {
        title: "Corrosion Prevention",
        body: "Drove R&D of new marine-grade coating and corrosion prevention for the electric outboard motor, battery pack, and charger. Applied engineering principles and corrosion theory to execute a cathodic protection plan, improving overall product quality and longevity. Conducted outboard and battery-pack coating failure analysis and presented mitigation proposals to senior engineers — reducing initial outboard coating investment by $150k+ (62.3%).",
        image:
          "/images/experience/pure-watercraft/0a5de4_2eec1fc515b948eabe061589aec12558~mv2.jpg",
      },
      {
        title: "Project & Procurement Management",
        body: "Developed and managed a 15-week project schedule, providing consistent updates to key stakeholders and supporting supply chain on issuing purchase orders. Managed 10+ suppliers and maintained strong working relationships to keep parts sourcing aligned with testing and product-development needs.",
        image:
          "/images/experience/pure-watercraft/0a5de4_fa88aa5be050481f939393ccb84be4e0~mv2.jpg",
      },
      {
        title: "Hardware Development",
        body: "Prototyped new radiator flow guards to improve cooling and protect battery components. Designed for injection molding and iterated quickly through 3D-printed prototypes before committing to production tooling.",
        image:
          "/images/experience/pure-watercraft/0a5de4_9ba00c41d5c24a6780aca27de024403f~mv2.jpg",
      },
      {
        title: "Thermal Test",
        body: "Ran adhesive testing for battery modules to identify the optimal bonding solution under thermal load.",
        image:
          "/images/experience/pure-watercraft/Screen+Shot+2020-11-20+at+2_36_48+PM.avif",
      },
    ],
    tools: [
      "Cathodic Protection",
      "Injection Molding",
      "3D Printing",
      "Excel (PM)",
      "Supplier Management",
    ],
    metrics: [
      { value: "$150k+", label: "COATING SAVINGS (62.3%)" },
      { value: "15", label: "WEEK PROJECT SCHEDULE" },
      { value: "10+", label: "SUPPLIERS MANAGED" },
    ],
  },
  {
    slug: "tesla",
    company: "Tesla",
    role: "Material Flow Automation Intern",
    location: "RENO / NV",
    icon: Factory,
    summary: "Engineering automated material flow for production.",
    objectives: [
      "High-throughput production logistics",
      "Tooling design and conveyor / AGV integration",
    ],
    tags: ["AUTOMATION", "MFG_OPS"],
    heroImage:
      "/images/experience/tesla/0a5de4_0266b9c7b2144dba87c2ac5ced0dd1d1~mv2.jpg",
    tagline:
      "Material flow automation across GigaFactory 1 and GigaFactory 3.",
    domain: "Manufacturing Automation",
    duration: "Co-op Cycle",
    briefingSummary:
      "Worked across GigaFactory 1 (Reno, NV) and GigaFactory 3 (Shanghai) on AGV deployment, PLC controls, and the SCADA/HMI surfaces that monitored Model 3 production flow.",
    sections: [
      {
        title: "Automation Controls @ GF1",
        body: "Designed routes and ran field tests for new fleets of Automated Guided Vehicles (AGVs) at GigaFactory 1, improving material flow for Model 3 battery cell deliveries and freeing headcount on the production line. Developed new PLC ladder logic and installed new communication hardware for factory conveyors.",
        image:
          "/images/experience/tesla/0a5de4_3b71dcff346342c399ae2807b6441d85~mv2.jpg",
      },
      {
        title: "SCADA & HMI @ GF3 Shanghai",
        body: "Developed 18 HMI screens in Ignition by Inductive Automation to monitor real-time flow of the Model 3 body distribution center at GigaFactory 3. Used Python for custom animations and visual displays, and trained senior engineers on the platform via PowerPoints in both Chinese and English.",
        image:
          "/images/experience/tesla/0a5de4_b05c9941126d4729b0f1c9d900ee43d7~mv2.jpg",
      },
      {
        title: "GF1 Command & Control",
        body: "Built parallel HMIs for GF1 — full command-and-control surfaces (vs. the read-only overviews at GF3), plus an inventory screen powered by queries against Tesla’s data center.",
        image:
          "/images/experience/tesla/0a5de4_6d4a86bba2d1487bab24ca1bfb20884f~mv2.jpg",
      },
      {
        title: "Other Projects",
        body: "Contributed to traditional mechanical design projects and managed a large demolition project end-to-end.",
        image:
          "/images/experience/tesla/0a5de4_702b1982678c4346a4f269ac4f858189~mv2.jpg",
      },
    ],
    tools: [
      "Ignition (Inductive Automation)",
      "Python",
      "PLC Ladder Logic",
      "AGVs",
      "SCADA",
      "ASRS",
    ],
    metrics: [
      { value: "18", label: "HMI SCREENS DEPLOYED" },
      { value: "2", label: "GIGAFACTORIES (GF1 / GF3)" },
      { value: "AGV", label: "FLEET ROUTING / FIELD TEST" },
    ],
  },
  {
    slug: "kpff",
    company: "KPFF Consulting Engineers",
    role: "Special Projects Mechanical Engineering Intern",
    location: "SEATTLE / WA",
    icon: DraftingCompass,
    summary:
      "Mechanical design on multi-disciplinary special projects.",
    objectives: [
      "Mechanical modeling and drafting on special projects",
      "Analysis support for complex multi-disciplinary work",
    ],
    tags: ["CONSULTING", "DESIGN"],
    heroImage:
      "/images/experience/kpff/0a5de4_7038838d46d9463a9bb8157a8763a72b~mv2.jpg",
    tagline: "Mechanical design across the Special Projects portfolio.",
    domain: "Engineering Consulting",
    duration: "Internship",
    briefingSummary:
      "Modeled, drafted, and supported analysis on six concurrent projects — from ferry infrastructure and bridge cranes to flood-control tide gates.",
    sections: [
      {
        title: "Bainbridge Ferry Cab",
        body: "Design integration and optimization. Mapped hydraulic piping, built SolidWorks models, researched tube fittings and adapters, and optimized maintenance platforms with self-cleaning sweepers. Drove cost-effectiveness through competitive quotes.",
        image:
          "/images/experience/kpff/0a5de4_7038838d46d9463a9bb8157a8763a72b~mv2.jpg",
      },
      {
        title: "Boeing Bridge Crane",
        body: "Built a complete SolidWorks model from multiple blueprints — over 100 dimensions each — using weldment features. Analyzed welded joints through static simulation and iterated the design to eliminate unnecessary protrusions on the crane end trucks.",
        image:
          "/images/experience/kpff/0a5de4_87694df63b354e37a426435de09eb332~mv2.jpg",
      },
      {
        title: "Boeing Stacker — Failure Analysis",
        body: "Modeled and investigated a steel shaft failure in shear on equipment used for lifting heavy objects. Built the 3D model to investigate root cause and proposed a design revision to prevent recurrence.",
        image:
          "/images/experience/kpff/0a5de4_7bdcb8190bc2484ba831f1439f69242b~mv2.jpg",
      },
      {
        title: "Fisher Island Ferry Transfer Bridge",
        body: "Modified loading dock structures using AutoCAD and rerouted hydraulic systems. Created blueprints for engineer review, transferred designs into SolidWorks, and researched pipe fittings while optimizing pricing.",
        image:
          "/images/experience/kpff/0a5de4_c8d6b3a0570844c182c6e9dd262c7bdf~mv2.jpg",
      },
      {
        title: "North Shore Levee Tide Gates",
        body: "Developed preliminary designs for a flood tide gate using SolidWorks weldment features. Researched optimal hydraulic and electric actuators for gate-lifting mechanisms.",
        image:
          "/images/experience/kpff/0a5de4_a32b80b12d024946a6b1e7ddb011cfb7~mv2.jpg",
      },
    ],
    tools: [
      "SolidWorks",
      "AutoCAD",
      "Weldment Features",
      "Static Simulation",
      "FEA",
    ],
    metrics: [
      { value: "06", label: "CONCURRENT PROJECTS" },
      { value: "100+", label: "DIMENSIONS / MODEL" },
      { value: "FEA", label: "STATIC SIMULATION" },
    ],
  },
  {
    slug: "port-of-seattle",
    company: "Port of Seattle",
    role: "Port Construction Service Intern",
    location: "SEATTLE / WA",
    icon: Anchor,
    summary: "Field engineering across port infrastructure projects.",
    objectives: [
      "Field engineering across port construction projects",
      "Coordination across contractor teams in active port environments",
    ],
    tags: ["CIVIL", "FIELD_ENG"],
    heroImage:
      "/images/experience/port-of-seattle/0a5de4_c0724317d1ec4298965f1f04159ef4df~mv2.jpg",
    tagline: "Field engineering on SeaTac airport infrastructure.",
    domain: "Construction Services",
    duration: "Summer Cycle",
    briefingSummary:
      "Started by producing 3D illustrations as visual aids for client and contractor walks; mid-cycle, took over as project manager for the SeaTac airline-sign relocation project.",
    sections: [
      {
        title: "3D Illustrations & Site Walks",
        body: "Built 3D illustrations from conceptual drawings and preliminary designs in Google Sketch — used as visual aids for clients and contractors during site walks and project meetings.",
        image: "/images/experience/port-of-seattle/Nancy%20Jian.avif",
      },
      {
        title: "SeaTac Airline Sign Relocation — Project Lead",
        body: "Took over mid-internship as project manager for relocating and replacing airline signs at SeaTac International Airport's departure and arrival gates. Developed blueprints with field-crew instructions, scheduled work during low-traffic windows to manage budget, and coordinated lift and tool rentals. Finalized all plans before departure so the manager could carry the rest of the project to completion under budget with minimum effort.",
        image:
          "/images/experience/port-of-seattle/seatacairportarrivalsdrivecurbside.avif",
      },
    ],
    tools: ["Google Sketch", "Field Coordination", "Project Scheduling"],
    metrics: [
      { value: "1", label: "PROJECT LED AS PM" },
      { value: "<BUDGET", label: "DELIVERY OUTCOME" },
      { value: "SEA", label: "SEATAC INFRASTRUCTURE" },
    ],
  },
];

export function getExperienceBySlug(slug: string): ExperienceEntry | undefined {
  return EXPERIENCE.find((e) => e.slug === slug);
}
