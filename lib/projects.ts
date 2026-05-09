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
  /** If set, renders a "Read full brief →" button that links to /projects/{detailSlug} */
  detailSlug?: string;
  /** Logical grouping. The detail page renders a divider whenever this changes. */
  group?: "my-work" | "pod-overview" | "result";
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
  /** If true, the dossier card is omitted from /projects but the detail page still routes */
  hidden?: boolean;
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
        detailSlug: "hyperloop-competition-1",
      },
      {
        title: "Competition II — Suspension Dynamics (2017–2018)",
        body:
          "Promoted to the suspension team. Designed and led manufacturing of a test rig to validate quarter-car dynamic models built in MATLAB/Simulink, and coordinated with Fox Shox on custom bike-shock specifications. Ran FEA on the swing arm to confirm a minimum 2.0 safety factor under ultimate load. Estimated pod top speed: 120 mph; first sub-team to complete assembly.",
        image: `${HYPERLOOP_DIR}/0a5de4_556b70c791ca464ea094f621d68f74b0~mv2.jpg`,
        detailSlug: "hyperloop-competition-2",
      },
      {
        title: "Competition III — Cold Gas Propulsion (2018)",
        body:
          "Transitioned to the propulsion team. Designed and manufactured two aluminum 6061 conical nozzles that choke compressed nitrogen to supersonic flow, generating 2,805 N of thrust. Solo contributor for both nozzle fabs (lathe + 15° end-mill secondary ops, 0.002\" per pass). Achieved 30:1 safety factor in Instron thread tensile testing. The pod placed 4th worldwide / 1st in the U.S., hit 60+ mph at 1,000 psi (rated for 3,000), and won the SpaceX Innovation Award — the only cold-gas thruster to pass all required checklists.",
        image: `${HYPERLOOP_DIR}/0a5de4_5ea136c74e9f461c85bcd57fee3e73ce~mv2.jpg`,
        detailSlug: "hyperloop-competition-3",
      },
      {
        title: "Competition IV — Propulsion Integration Engineer (2019–2020)",
        body:
          "Stepped up as Propulsion Integration Engineer. Owned the complete CAD model, designed pneumatic schematics, and merged cross-team systems (notably braking-propulsion line consolidation). Improved hydrostatic pressure and static-fire test processes. Vs. 2018: $3,000+ cost savings, 20%+ weight reduction, 30%+ acceleration increase, 2× test efficiency. Peak thrust: 335 lbf simulated, 300 lbf measured; impulse: 1,051 → 1,270 lbf·s.",
        image: `${HYPERLOOP_DIR}/0a5de4_4b89267a12824a64ac9f646949af4f29~mv2.jpg`,
        detailSlug: "hyperloop-competition-4",
      },
    ],
    metrics: [
      { value: "1st US", label: "COMP-III RANK + INNOVATION AWARD" },
      { value: "4×", label: "COMPETITION SEASONS" },
      { value: "300 lbf", label: "MEASURED PEAK THRUST (CMP-IV)" },
    ],
  },

  {
    slug: "hyperloop-competition-1",
    title: "Hyperloop Competition I",
    category: "R&D",
    year: "2016–2017",
    icon: Rocket,
    link: "https://cjian1997.wixsite.com/home/hyperloop-competition-1",
    hidden: true,

    heroImage: `${HYPERLOOP_DIR}/0a5de4_147ca1a3b15b45a4bb19c4193e1612ce~mv2.jpg`,
    description:
      "First competition season. Joined as ground-system engineer and shipped the strain-gauge test rig that characterized every magnetic system on the pod. The pod placed 6th worldwide / 4th US.",
    tags: ["MAGLEV", "GROUND_SYSTEMS", "STRAIN_GAUGE"],

    role: "Ground System Engineer",
    domain: "Aerospace R&D",
    tagline:
      "Halbach-array maglev, PEDS, and the swim-or-sink first season.",
    briefingSummary:
      "Stepped onto the Washington Hyperloop team as a ground-system engineer. My deliverable: a four-piece test rig that gathered strain-gauge data on every magnetic system on the pod before competition weekend. Among 1,000+ initial entrants and 30 finalists, we placed 6th worldwide and 4th in the U.S.",
    objectives: [
      "Design + manufacture a strain-gauge test rig for all magnetic systems",
      "Build out the four GSE pieces (Arm / Adapter / Frame / Meat Slicer)",
      "Support pod readiness for SpaceX competition weekend",
    ],
    tools: [
      "Aluminum 6061-T6",
      "Strain Gauges",
      "Load Cells",
      "SolidWorks",
      "Halbach Arrays",
    ],
    sections: [
      // ── What I did ──────────────────────────────────────────────
      {
        title: "Swim or Sink — Joining the Team",
        body:
          "I stepped into the Washington Hyperloop team the same way you dive into the ocean. Swim or sink. Do or die. Swept under the current of long hours and difficult problems, I started working with Ground Support Equipment, a team designated to develop testing fixtures. As a ground-system engineer, my primary duty was to design and manufacture a test rig capable of gathering data on all magnetic systems on the pod through the use of strain gauges.",
        image: `${HYPERLOOP_DIR}/0a5de4_206a26a44e53456b9b4bb36799de3c6e~mv2.avif`,
      },
      {
        title: "Ground Support Equipment — The Rig",
        body:
          "The rig was four interlocking pieces. The Load Cell Arm reached out and held the adapter above or along the side of the meat slicer — strain gauges placed on all four faces of the arm detected material deflection from the forces produced by magnetic eddy currents. The Load Cell Adapter swapped in to test different components of the pod, including magnetic braking and magnetic levitation. The Load Cell Frame provided the arm with structural support and guidance — built entirely of 6061-T6 aluminum to maintain the rigidity of the structural frame under load. And the Meat Slicer used an aluminum disk directly connected to the motor through a steel rod — that large disk simulated the pod moving down the sub-track so we could characterize the magnetic systems before the pod ever saw the rail.",
        image: `${HYPERLOOP_DIR}/0a5de4_d083e31811a64e46b0739e93cab95f4e~mv2.jpg`,
      },
      // ── What the rest of the team did (full pod overview) ───────
      {
        title: "Pod Overview — Propulsion & Braking (the Bogie)",
        body:
          "The bogie module was designed and created by Mike Barsamian, Isaac Perrin, Isaac Ferrar, CJ Grijalva, Phu Duc, David Coven, and Mitchell Frimodt. It's one of the major components on the pod — it houses both the magnetic propulsion system and the magnetic braking system, and is attached to the chassis through ball-joint rods that let it stay on the ground while the rest of the pod levitates during the run. The braking module uses magnetic Halbach arrays opposed inside a C-Channel that straddles both sides of the upper I-beam flange when actuated. With the pod moving and the magnets actuated, eddy currents are induced in the I-beam — creating a magnetic field that opposes the motion of the pod. The propulsion module uses two magnetic rotors directly connected to their corresponding electric motors. As the rotors spin, eddy currents are induced onto the sub-track, which in turn produces a propulsive force that accelerates the pod.",
        image: `${HYPERLOOP_DIR}/0a5de4_2bf39a4fa3aa4868b7938ed76a173008~mv2.jpg`,
      },
      {
        title: "Pod Overview — Passive Electro-Dynamic Suspension (PEDS)",
        body:
          "The Passive Electro-Dynamic Suspension (PEDS) was designed and created by Mitchell Frimodt and CJ Grijalva. PEDS uses Halbach-array magnets located between each set of polyurethane wheels — they provide magnetic levitation when the pod is moving at high speeds along a conductive surface like an aluminum track. The PEDS were designed to levitate the pod 1/8\" above the track at about 45 mph.",
        image: `${HYPERLOOP_DIR}/0a5de4_23f3af408c77498280596532aec3d07a~mv2.jpg`,
      },
      {
        title: "Pod Overview — Lateral Stability",
        body:
          "The lateral stability module was created and designed by Isaac Perrin, Isaac Ferrar, and Mike Barsamian. Its job: keep the chassis and bogie aligned with the track. The wheels clamp onto the I-beam of the track and are kept tight with horizontal spring suspension.",
        image: `${HYPERLOOP_DIR}/0a5de4_6dd94e9ee5a84381b4ac5f04ff81adcd~mv2.jpg`,
      },
      // ── Result ──────────────────────────────────────────────────
      {
        title: "Result — 6th in the World",
        body:
          "Among the 30 finalists, we were one of the few teams that had a working propulsion system. Even though speed was not one of the criteria, our magnetic propulsion system was able to get our pod up to 30 miles per hour. Out of 1,000+ initial competitors from all around the world, we placed 6th in the world and 4th in the United States. Media coverage in GeekWire, the Seattle Times, and The Daily (UW).",
        image: `${HYPERLOOP_DIR}/0a5de4_cd56c664a44740caa6162b3889667eaf~mv2.jpg`,
      },
    ],
    metrics: [
      { value: "6th", label: "WORLD RANK" },
      { value: "4th US", label: "OF 1,000+ TEAMS" },
      { value: "30 mph", label: "TOP SPEED ACHIEVED" },
    ],
  },
  {
    slug: "hyperloop-competition-2",
    title: "Hyperloop Competition II",
    category: "R&D",
    year: "2017–2018",
    icon: Rocket,
    link: "https://cjian1997.wixsite.com/home/hyperloop-competition-2",
    hidden: true,

    heroImage: `${HYPERLOOP_DIR}/0a5de4_27f8ebbb7b91451c92ebe1f789a89900~mv2.jpg`,
    description:
      "Second competition season — promoted to the suspension team alongside Matthew Lemelin and Issac Perrin. Designed and led the validation rig for a Matlab quarter-car model. First sub-team to complete assembly. Pod estimated at 120 mph.",
    tags: ["SUSPENSION", "MATLAB", "FOX_SHOX"],

    role: "Suspension Team Engineer",
    domain: "Aerospace R&D",
    tagline:
      "Quarter-car Matlab models, custom Fox Shox, and the first sub-team to assembly.",
    briefingSummary:
      "Advanced from ground systems to the suspension team for the second competition. Worked alongside Matthew Lemelin and Issac Perrin — laid the foundation for the systematic vibrational-response analysis using an altered quarter-car model in Matlab/Simulink, and designed + led manufacturing of the validation rig. After Matthew's Matlab model and the test rig matched, parameters went to Fox Shox (primary sponsor) for custom bike shocks used in final assembly.",
    objectives: [
      "Lay out the foundation for the suspension's systematic vibrational analysis",
      "Design + lead manufacturing of the model-validation rig",
      "Coordinate with Fox Shox (primary sponsor) on custom bike-shock parameters",
      "Deliver the first sub-team to complete assembly",
    ],
    tools: [
      "MATLAB",
      "Simulink",
      "FEA",
      "Fox Shox",
      "SolidWorks",
      "Quarter-car Modeling",
    ],
    sections: [
      // ── What I did ──────────────────────────────────────────────
      {
        title: "Suspension Team Member",
        body:
          "For the second competition, I advanced from the ground-system team to the suspension team, working alongside two other mechanical engineers. The suspension system stabilizes the pod, reduces movement and vibrations caused by the sub-track, supports pod weight, and maintains braking alignment during deceleration. I poured over System Dynamics I & II course material and used that knowledge to lay out the foundation of systematic analyses for the pod's vibrational response via an altered quarter-car model in Matlab and Simulink. Matthew Lemelin later finalized the Matlab model while I designed and led the manufacturing of a test rig that allowed validation of the models. After data from Matthew's Matlab model and the test rig matched, parameters were sent to Fox Shox — the primary sponsor — and we received custom bike shocks back. Those custom shocks were used in final assembly.",
        image: `${HYPERLOOP_DIR}/0a5de4_f95662851f2342b984fc98ce02d3cd5d~mv2.jpg`,
      },
      {
        title: "Matlab Simulation",
        body:
          "Matthew Lemelin used Matlab to code a step simulation that found the optimal spring k-constant and damping coefficient for the suspension module. The code played a major role in determining what bike shocks were needed from Fox Shox.",
        image: `${HYPERLOOP_DIR}/0a5de4_0215eeb9c93d4a5eb16aea8108f08a57~mv2.jpg`,
      },
      {
        title: "Spring Testing",
        body:
          "A testing module was created to measure actual suspension displacement and spring compression when the wheel contacted uneven surfaces. Data from testing was compared with the Matlab code to ensure correct parameters were provided to Fox Shox for the custom bike shock.",
        image: `${HYPERLOOP_DIR}/0a5de4_5ab2f9c84b144b53b880c297d06d096c~mv2.jpg`,
      },
      {
        title: "Finite Element Analysis",
        body:
          "To ensure the suspension module could withstand the forces produced by gaps within the sub-track, FEA was run on the swing arm. Using the calculated forces and the materials used to manufacture the swing arm, the team confirmed that the swing arm had a minimum safety factor of 2.0 before ultimate failure.",
        image: `${HYPERLOOP_DIR}/0a5de4_c9e3f0c90c6f467d88d6a905ffbb849a~mv2.jpg`,
      },
      {
        title: "Manufacturing & Assembly",
        body:
          "The suspension team was the first sub-team to complete assembly — and in doing so, provided support to other sub-teams (propulsion and braking) on completing their own assembly.",
        image: `${HYPERLOOP_DIR}/0a5de4_1e735fe4acfd43559e684b5154b344e0~mv2.jpg`,
      },
      // ── What the rest of the team did (full pod overview) ───────
      {
        title: "Pod Overview — Propulsion",
        body:
          "The propulsion module was designed by Nicole Lambert and David Coven. It used a direct-drive electric propulsion system where wheels functioned as clamps, each wheel pushing onto each side of the I-beam. Motors sat on linear guide rails to ensure proper wheel clamping to the I-beam. The electric motors drew power from two lithium batteries located at the pod's center.",
        image: `${HYPERLOOP_DIR}/0a5de4_9549a39d80e547d2bc5b4eedc10ffd38~mv2.jpg`,
      },
      {
        title: "Pod Overview — Suspension",
        body:
          "The suspension module — designed by Matthew Lemelin, Issac Perrin, and myself — provided a simple way to adjust ride height, ensured proper ride height for brake alignment, and stabilized the pod from track gaps and deviations. Two suspension modules were installed: one on each end of the pod, directly above the lateral stability module.",
        image: `${HYPERLOOP_DIR}/0a5de4_37ef4b03156c469086cdf75d9a48cf98~mv2.jpg`,
      },
      {
        title: "Pod Overview — Lateral Stability",
        body:
          "The lateral stability module from Competition I was reused. The module kept the pod aligned with the track. The wheels clamping onto the I-beam were kept tight with horizontal springs.",
        image: `${HYPERLOOP_DIR}/0a5de4_c3b10b37e3d1421abab627edcff53245~mv2.jpg`,
      },
      {
        title: "Pod Overview — Magnetic Braking",
        body:
          "The magnetic braking module — designed by Mitchell Frimodt and David Coven — used magnetic Halbach arrays opposed inside a C-Channel that straddled both sides of the upper I-beam flange when actuated. With the pod moving and the magnets activated, eddy currents were induced in the I-beam, creating a magnetic field that opposed the motion of the pod. The braking module consisted of two modules: the alignment channel and the primary braking channel.",
        image: `${HYPERLOOP_DIR}/0a5de4_3c56abdb70a2418f844600d5dc30a26f~mv2.jpg`,
      },
      // ── Result ──────────────────────────────────────────────────
      {
        title: "Result — Estimated 120 MPH",
        body:
          "The aim for Competition II was top speed. The team decided to run on wheels instead of the previous year's passive magnetic levitation, which would minimize drag caused by magnets traveling over the aluminum sub-track and reduce overall pod weight. We were not selected to race the pod on competition weekend — but the pod was estimated to reach 120 mph. Coverage in GeekWire (\"SpaceX Hyperloop II August UW\") and Proto Express via the Sierra Circuits sponsorship.",
        image: `${HYPERLOOP_DIR}/0a5de4_20db422803184cd5925180d1df7c398e~mv2.avif`,
      },
    ],
    metrics: [
      { value: "120 mph", label: "ESTIMATED TOP SPEED" },
      { value: "2.0", label: "MIN SAFETY FACTOR (FEA)" },
      { value: "1st", label: "SUB-TEAM TO ASSEMBLY" },
    ],
  },

  {
    slug: "hyperloop-competition-3",
    title: "Hyperloop Competition III",
    category: "R&D",
    year: "2018",
    icon: Rocket,
    link: "https://cjian1997.wixsite.com/home/hyperloop-competition-3",
    hidden: true,

    heroImage: `${HYPERLOOP_DIR}/0a5de4_5ea136c74e9f461c85bcd57fee3e73ce~mv2.jpg`,
    description:
      "Most awarded year. Sole manufacturer of two aluminum 6061 conical cold-gas nozzles. Achieved 30:1 thread safety factor on the Instron. Pod placed 4th worldwide / 1st US and won the SpaceX Innovation Award.",
    tags: ["COLD_GAS", "INNOVATION_AWARD", "PROPULSION"],

    role: "Propulsion Team Engineer",
    domain: "Aerospace R&D",
    tagline:
      "Cold-gas thruster, the Innovation Award, and the only nozzle to pass every SpaceX checklist.",
    briefingSummary:
      "Advanced from the suspension team to the propulsion team. Worked alongside two mechanical undergraduate engineers and one aerospace graduate engineer. Took charge of designing and manufacturing two aluminum conical nozzles that choke nitrogen flow to supersonic speeds — sole contributor for both fabs. The pod placed 4th worldwide / 1st in the U.S. and won the SpaceX Innovation Award.",
    objectives: [
      "Design + machine two aluminum 6061 cold-gas nozzles end-to-end",
      "Validate threads on the Instron with custom adapters / jaws",
      "Run nozzle FEA in SolidWorks + FEMAP for max-pressure conditions",
      "Lead Yakama-farm performance test series for SpaceX checklist sign-off",
    ],
    tools: [
      "SolidWorks",
      "FEMAP",
      "Aluminum 6061",
      "Instron",
      "Lathe + End-mill",
      "COPV / Compressed N₂",
    ],
    sections: [
      // ── What I did ──────────────────────────────────────────────
      {
        title: "Propulsion Team Member",
        body:
          "For the third competition, I advanced from the suspension team onto the propulsion team, where I worked alongside two mechanical undergraduate engineers and one aerospace graduate engineer. The propulsion system stores its energy in the form of compressed nitrogen in two large COPVs. When the command is given, the red valves open and gas is released from the two COPVs through a nozzle that accelerates the gas to supersonic speeds. At full pressure, the propulsion system produces 2,805 N of thrust. As a member of the propulsion team, I took charge of designing and manufacturing two aluminum conical nozzles. The nozzles choke the flow of the released nitrogen, accelerating the compressed gas to supersonic speeds, which provides thrust to the pod. The aluminum nozzles are made entirely of aluminum grade 6061. I was the sole contributor in manufacturing both nozzles in-house at the mechanical engineering machine shop.",
        image: `${HYPERLOOP_DIR}/0a5de4_15ea20d143694455ae9b1f99df711a67~mv2.jpg`,
      },
      {
        title: "Manufacturing — Lathe + End-Mill",
        body:
          "The nozzles were made primarily on the lathe for the first stage in creating the outer geometry. The nozzle started as a 4\" diameter aluminum rod, and with each pass the cutter would take off no more than 0.002\" of material. The nozzles were then transferred onto the mill for the second stage, where a 15° end mill was used to create the inner geometry. The inner geometry required high precision and a smooth finish for proper flow adhesion. I was the sole contributor in manufacturing both nozzles.",
        image: `${HYPERLOOP_DIR}/0a5de4_19c9902920014a6c9a56ce1faa22f881~mv2.jpg`,
      },
      {
        title: "Material Testing — Instron + Custom Adapters",
        body:
          "The purpose of using an Instron was to conduct a thread tensile test on the tube-connection side of the nozzle. We had to verify that the threads within the nozzle could withstand the axial compression and tensile loads exerted by the nitrogen during launch. I worked with Professor Bill Kuyendall at the University of Washington on creating custom adapters and jaws for the Instron to properly conduct the test. The test was a success — the part showed no deformation at our max axial force. For fun, we decided to carry the test far beyond our applied loads, until the Instron maxed out at 45 kN. The data showed the threads had a safety factor of 30.",
        image: `${HYPERLOOP_DIR}/0a5de4_e3b2ec8d2ec647ba9715baea354f762f~mv2.jpg`,
      },
      {
        title: "Finite Element Analysis",
        body:
          "FEA was conducted through SolidWorks static simulation and FEMAP. To ensure the nozzle could withstand the pressure and axial force produced by the compressed nitrogen, I ran stringent FEA using our maximum operating pressure, the calculated forces, and the materials I used to machine the part. The analysis took into account that the nozzle would experience both maximum pressures on every surface of the inner walls and axial force on the inner diverging walls of the nozzle simultaneously from the nitrogen. Additional analysis was done to optimize nozzle geometry for weight loss and add supports to areas of stress concentration.",
        image: `${HYPERLOOP_DIR}/0a5de4_e422d1a72b7e4560b1d0dd026470cb70~mv2.jpg`,
      },
      {
        title: "Performance Testing — Yakama Farm",
        body:
          "The purpose of testing the propulsion system was to gather data on system performance, ensure everything was working with no leaks (so it would be safe), and provide SpaceX with proof that our system worked when we put our pod in the tube down in Hawthorne that summer. Testing was conducted at a farm in Yakama. The four main tests: low-pressure tests, hydraulic pressure tests, static fire test, and over-pressure fill relief test.",
        image: `${HYPERLOOP_DIR}/0a5de4_947bc151949a40668aa899c103bf0b99~mv2.jpg`,
      },
      // ── What the rest of the team did (full pod overview) ───────
      {
        title: "Pod Overview — Cold Gas Propulsion (Team)",
        body:
          "The cold-gas propulsion module was designed and created by Matthew Lemelin, Derek Wei, Sev Sandomirsky, and myself. The cold-gas thruster accelerates the pod down the track using momentum transfer from the release of compressed nitrogen gas. Energy is stored in the two COPVs and when the red ball valves open, gas is released to the nozzles and choked to supersonic flows.",
        image: `${HYPERLOOP_DIR}/0a5de4_208095dc857e4fe5a8511bb0c5bb1a46~mv2.jpg`,
      },
      {
        title: "Pod Overview — Vertical & Lateral Stability",
        body:
          "The vertical and lateral stability modules were designed and created by Ian Culhane, Haleh Bahadori, and Daniel Torres. Both modules ensure the pod maintains alignment with the I-beam while traveling down the tube. The vertical stability system utilizes four Fox bike shocks that keep the pod elevated above the subtrack. The lateral stability system keeps the pod aligned side-to-side by clamping onto the web of the I-beam.",
        image: `${HYPERLOOP_DIR}/0a5de4_d251633ad8f440a4ac75d272cb9d9501~mv2.jpg`,
      },
      {
        title: "Pod Overview — Carbon Fiber Chassis",
        body:
          "The chassis was designed and created by Ethan Simcock, Brian Maiken, Daisy Zavala, and John Buffalo. The chassis is the main mounting structure for all other subsystems on the pod. It's made of high-modulus T700 carbon-fiber prepreg from Toray and cured in an autoclave. The design was inspired by semi-truck chassis.",
        image: `${HYPERLOOP_DIR}/0a5de4_bf20a25ffc4b4ec094258f3b053edb0e~mv2.jpg`,
      },
      {
        title: "Pod Overview — Braking",
        body:
          "The braking module was designed and created by Issac Perrin, Joshua Carter, Nicole Lambert, and Peter Sciuto. The team utilized friction braking for this competition rather than magnetic braking — lighter in weight and more predictable. When engaged, the system clamps onto the top flange of the I-beam with its calipers. The system is designed to decelerate the pod from its maximum velocity to a complete stop without causing damage to the pod or sub-track.",
        image: `${HYPERLOOP_DIR}/0a5de4_c26ba3aa46e24f0889d2f4956dc2aab0~mv2.jpg`,
      },
      // ── Result ──────────────────────────────────────────────────
      {
        title: "Competition Day — Innovation Award (July 22, 2018)",
        body:
          "Competition date: July 22, 2018. Only four teams were selected to run in the 0.8-mile-long tube. We were the only team equipped with a cold-gas thruster that made it through every check on SpaceX's required checklist — and the only cold-gas thruster running on the final day. Every other team used electric motors as their source of propulsion. Due to time constraints we were unable to fill the propulsion system to its maximum operating pressure of 3,000 psi; at 1,000 psi, we were able to reach over 60 mph. Final placements: 4th in the world, 1st in the United States. Awarded the SpaceX Innovation Award for our decisions and ability to build a working cold-gas thruster. Coverage in GeekWire, UW Aeronautics & Astronautics (\"UW Hyperloop Team Wins Innovation Prize in SpaceX Competition,\" Sept 18, 2018), The Verge, and the Seattle Times (\"UW team notches a personal best in Hyperloop competition and meets Elon Musk\").",
        image: `${HYPERLOOP_DIR}/0a5de4_730d56f459ed420d9c1988b8898b5399~mv2.jpg`,
      },
    ],
    metrics: [
      { value: "1st US", label: "COMPETITION RANK + AWARD" },
      { value: "2,805 N", label: "THRUST AT FULL PRESSURE" },
      { value: "30:1", label: "THREAD SAFETY FACTOR" },
    ],
  },

  {
    slug: "hyperloop-competition-4",
    title: "Hyperloop Competition IV",
    category: "R&D",
    year: "2019–2020",
    icon: Rocket,
    link: "https://cjian1997.wixsite.com/home/hyperloop-competition-4",
    hidden: true,

    heroImage: `${HYPERLOOP_DIR}/0a5de4_fbb9bd42284146dcbc60f2a3eae3f8a9~mv2.jpg`,
    description:
      "Stepped up as Propulsion Integration Engineer for the 2019 cycle. Owned the complete CAD model, designed pneumatic schematics, and merged cross-team systems. Vs. 2018: $3,000+ saved, 20%+ lighter, 30%+ faster, 2× test efficiency.",
    tags: ["PROPULSION", "INTEGRATION", "PNEUMATICS"],

    role: "Propulsion Integration Engineer",
    domain: "Aerospace R&D",
    tagline:
      "Owning the full pod CAD and merging cross-team pneumatics for the Comp IV pod.",
    briefingSummary:
      "Stepped up as Propulsion Integration Engineer for the 2019–2020 cycle. Managed the entire CAD model, designed the pneumatic schematics, integrated cross-functional teams (notably the braking-propulsion pneumatic line merge), and improved overall hydrostatic pressure and static-fire test processes.",
    objectives: [
      "Manage the entire pod CAD model",
      "Design pneumatic schematics + manifold geometry",
      "Integrate cross-functional teams (braking ↔ propulsion line merge)",
      "Improve hydrostatic + static-fire test processes",
    ],
    tools: [
      "SolidWorks",
      "Pneumatic Schematics",
      "Toray T700",
      "COPV / Compressed N₂",
      "Autoclave Composites",
    ],
    sections: [
      // ── What I did ──────────────────────────────────────────────
      {
        title: "Propulsion Integration Engineer",
        body:
          "For the 2019 competition cycle I stepped up as Propulsion Integration Engineer. The role was four-pronged: manage the entire CAD model for the pod, design the pneumatic schematics from scratch, integrate cross-functional teams (notably merging the braking and propulsion pneumatic lines onto the same supply circuit), and improve overall hydrostatic pressure and static-fire test processes. Vs. the prior year — over $3,000 cost savings, 20%+ weight reduction, 30%+ vehicle acceleration increase, and test process efficiency doubled.",
        image: `${HYPERLOOP_DIR}/0a5de4_1c3ce5472d6f4d84a4e717c070284e43~mv2.jpg`,
      },
      // ── What the rest of the team did (full pod overview) ───────
      {
        title: "Pod Overview — Cold Gas Propulsion",
        body:
          "The cold-gas propulsion module was designed by Matthew Lemelin, Gabriel Finertie, Brian Powers, Alex Stenvall, Joshua Yap, and myself. The system accelerates the pod using momentum transfer from compressed nitrogen gas release. Energy storage occurs in two COPVs; when the blue ball valves open, gas reaches the nozzle and achieves supersonic flow. This iteration utilized a manifold merging flowing gas — the combined gas was then accelerated through a single nozzle.",
        image: `${HYPERLOOP_DIR}/0a5de4_ad52155037744ceeaf5a7a9660289f7c~mv2.jpg`,
      },
      {
        title: "Pod Overview — Vertical & Lateral Stability",
        body:
          "The vertical and lateral stability modules were designed by Peter Sciuto, Emily Whelan, Eric Fan, Laurie Willoughby, and Peter Correa. The stability system maintains pod alignment with the I-beam during transit. Four Fox bike shocks keep the pod elevated above the subtrack (vertical), while the lateral system clamps onto the I-beam web for side-to-side alignment.",
        image: `${HYPERLOOP_DIR}/0a5de4_d9ecffeabc074e129cd4c7ae652356e7~mv2.jpg`,
      },
      {
        title: "Pod Overview — Carbon Fiber Chassis",
        body:
          "The chassis was designed by Ethan Simcock, Brian Maiken, Callum Bessinger, Daisy Zabala, Derek Wei, and John Buffalo. This main mounting structure for the subsystems uses high-modulus T700 carbon-fiber prepreg from Toray, cured in an autoclave.",
        image: `${HYPERLOOP_DIR}/0a5de4_f36ed0ad2ba34ae59a024062e1f1212a~mv2.jpg`,
      },
      {
        title: "Pod Overview — Braking",
        body:
          "The braking module was designed by Ian Culhane, Jackson Torleben, Jessica Craig, Kohya Kato, and Nick North. The team selected friction braking over magnetic braking due to lighter weight and predictability. When engaged, the calipers clamp the I-beam top flange. The system decelerates the pod from maximum velocity to a complete stop without damage.",
        image: `${HYPERLOOP_DIR}/0a5de4_00c901f085974815ac6a5641aee619e4~mv2.jpg`,
      },
      {
        title: "Pod Overview — Fairing & Design",
        body:
          "The carbon fiber shell design and layup were created by Ivy Kehoe and Lulu McRoberts, drawing inspiration from Japanese bullet trains and the Tesla Roadster.",
        image: `${HYPERLOOP_DIR}/0a5de4_e95265669f8b41b3bd1b531049086b89~mv2.jpg`,
      },
      // ── Result ──────────────────────────────────────────────────
      {
        title: "Result — Performance vs. 2018",
        body:
          "Simulation results: peak thrust 335 lbf, impulse 1,051 lbf·s. Test results: peak thrust 300 lbf, impulse 1,270 lbf·s. Compared to the 2018 design: $3,000+ in cost savings, 20%+ weight reduction, 30%+ vehicle acceleration increase, and 2× test efficiency. Coverage in GeekWire (\"Washington Hyperloop slims racing pod, Elon Musk's next contest\") and the Daily UW.",
        image: `${HYPERLOOP_DIR}/0a5de4_8a0a3762a4314c3a98a76c6c5e4015d9~mv2.jpg`,
      },
    ],
    metrics: [
      { value: "300 lbf", label: "MEASURED PEAK THRUST" },
      { value: "30%+", label: "ACCELERATION VS. 2018" },
      { value: "2×", label: "TEST EFFICIENCY GAIN" },
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
