// SERVICE CATALOG - single source of truth for the navbar, homepage grid, /services,
// /services/[slug], footer, sitemap and schema markup.
//
// TODO (content owner): the capability lists, "includes" lists and standards below are typical
// industry content drafted for review. Confirm each against K-KEM's actual scope and procedures,
// and replace "includes" with the full 67+ service list before launch.

export type IconName = "scan-search" | "drafting-compass" | "activity" | "radar" | "cog" | "database";

export interface SubService {
  name: string;
  description: string;
  items: string[];
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: IconName;
  tagline: string;
  summary: string;
  features: string[];
  includes: string[];
  applications: string[];
  industries: string[];
  standards: string[];
  rfpLabel: string;
  /** Optional detailed breakdown; when present the service page shows it instead of the flat "includes" pills. */
  subServices?: SubService[];
}

export const services: Service[] = [
  {
    slug: "ndt-inspection",
    name: "NDT & Inspection Services",
    shortName: "NDT & Inspection",
    icon: "scan-search",
    tagline: "Advanced and conventional NDT, risk-based inspection and plant turnaround inspection.",
    summary:
      "Inspection services that tell asset owners the true condition of pressure equipment, piping and structures. We combine conventional and advanced non-destructive testing with risk-based planning, and support plant turnarounds with organised inspection teams and clear reporting.",
    features: [
      "Conventional NDT for welds, plate and piping",
      "Advanced NDT techniques for critical and hard-to-inspect components",
      "Risk-Based Inspection (RBI) planning and implementation",
      "Plant turnaround and shutdown inspection support",
      "Documented procedures, traceable results and clear reports",
    ],
    includes: [
      "Ultrasonic Testing (UT)",
      "Radiographic Testing (RT)",
      "Magnetic Particle Testing (MT)",
      "Liquid Penetrant Testing (PT)",
      "Visual Testing (VT)",
      "Phased Array Ultrasonic Testing (PAUT)",
      "Time of Flight Diffraction (TOFD)",
      "Risk-Based Inspection (RBI) studies",
      "Turnaround inspection management",
    ],
    applications: [
      "Pressure vessels, columns and heat exchangers",
      "Process piping and pipelines",
      "Storage tanks",
      "Weld inspection during fabrication and repair",
      "Turnaround and shutdown campaigns",
    ],
    industries: ["Refineries", "Petrochemical", "Power plants"],
    standards: ["ASME Section V", "API 510 / 570 / 653", "API 580 / 581 (RBI)", "ASNT SNT-TC-1A / ISO 9712 (personnel)"],
    rfpLabel: "Request Inspection RFP",
  },
  {
    slug: "engineering-consultation",
    name: "Engineering Consultation Services",
    shortName: "Engineering Consultation",
    icon: "drafting-compass",
    tagline: "Integrity management and engineering solutions during all project stages.",
    summary:
      "Independent technical consultation that keeps assets safe and productive across their life. We support owners and contractors from early project stages through operation, with integrity management programmes and practical engineering solutions.",
    features: [
      "Asset integrity management programmes",
      "Engineering solutions at every project stage",
      "Inspection planning and technical reviews",
      "Damage mechanism and integrity assessments",
      "Clear technical reports and actionable recommendations",
    ],
    includes: [
      "Integrity management strategy",
      "Inspection and test planning",
      "Fitness-for-service assessments",
      "Technical reviews and audits",
      "Project-stage engineering support",
    ],
    applications: [
      "New project design, construction and commissioning support",
      "Operating plant integrity programmes",
      "Life extension and re-rating studies",
      "Inspection strategy development",
    ],
    industries: ["Refineries", "Petrochemical", "Power plants"],
    standards: ["API 579-1 / ASME FFS-1", "ASME B31.3", "ASME Section VIII", "API 580 / 581"],
    rfpLabel: "Request Engineering Proposal",
  },
  // Source: the "Asset Management Consultancy" category on saudikkem.com (RBI Services, Asset Integrity
  // Services, Fitness for Service, Failure Analysis). Those pages name no codes, so the standards below
  // are the usual industry references: confirm them before launch.
  {
    slug: "asset-management-consultancy",
    name: "Asset Management Consultancy",
    shortName: "Asset Management",
    icon: "database",
    tagline: "RBI, asset integrity, fitness-for-service and failure analysis for complex physical assets.",
    summary:
      "Consulting solutions that help asset owners maintain complex physical assets in plants and heavy equipment. We combine risk-based inspection, asset integrity programmes, fitness-for-service assessment and failure analysis, so inspection data becomes clear decisions on risk, remaining life and where maintenance budget is best spent.",
    features: [
      "Risk-based inspection support for petrochemical, oil, gas and power plants",
      "Asset integrity programmes: classification, corrosion loops and CML / TML databases",
      "Fitness-for-Service assessments from Level 1 and 2 to Level 3 with finite element analysis",
      "Failure analysis and root-cause investigation to prevent recurrence",
      "Prioritised cost-saving opportunities with their budget impact assessed",
    ],
    includes: ["RBI Services", "Asset Integrity Services", "Fitness for Service", "Failure Analysis"],
    subServices: [
      {
        name: "RBI Services",
        description:
          "Risk-based inspection develops an inspection scheme based on knowledge of the risk of failure, and the essential process is a risk analysis. We provide RBI support services for petrochemical, oil, gas and power plant industries.",
        items: [
          "Baseline inspection",
          "Asset management database development",
          "Corrosion loop and piping circuitization",
          "Asset damage mechanism identification",
          "TML / CML optimization",
          "Corrosion analysis study",
          "RBI analysis",
          "Pressure safety valve (PSV) RBI analysis",
          "RBI audit",
        ],
      },
      {
        name: "Asset Integrity Services",
        description:
          "Asset management consulting solutions that help maintain complex physical assets in plants and heavy equipment, prioritising cost-saving potential and assessing how each opportunity affects the budget.",
        items: [
          "Piping corrosion loop development",
          "Risk-based inspection analysis",
          "Asset classification and identification",
          "CML database development",
          "Baseline reading inspection",
          "Failure analysis",
          "Project management",
          "CML / TML optimization",
          "Meridium database audit",
        ],
      },
      {
        name: "Fitness for Service",
        description:
          "Fitness-for-Service (FFS) assessments are quantitative engineering evaluations that demonstrate the structural integrity of an in-service component, helping solve problems across the asset lifecycle while minimising risk and cost.",
        items: [
          "FFS Level 1 and 2",
          "FFS Level 3 with finite element analysis",
          "3D laser scan for dimensional check",
          "NDT inspection",
        ],
      },
      {
        name: "Failure Analysis",
        description:
          "Investigation to determine the root cause when an asset or component fails or does not perform as expected, giving the insight to take remedial action and prevent recurrence.",
        items: [
          "Stress analysis",
          "Laser scan and dimensional check",
          "Process simulation (HYSYS)",
          "Dynamic studies",
          "Remaining life analysis",
          "NDT and inspection",
        ],
      },
    ],
    applications: [
      "Plant and heavy equipment integrity programmes",
      "Corrosion loops and piping circuits",
      "Pressure safety valves (PSV)",
      "In-service components with damage or degradation",
      "Investigation of equipment and component failures",
    ],
    industries: ["Petrochemical", "Oil & gas", "Power plants"],
    standards: [
      "API 580 / 581 (risk-based inspection)",
      "API 579-1 / ASME FFS-1 (fitness-for-service)",
      "API 510 / 570 / 653 (in-service inspection)",
    ],
    rfpLabel: "Request Asset Management Proposal",
  },
  {
    slug: "condition-monitoring",
    name: "Vibration & Condition Monitoring",
    shortName: "Condition Monitoring",
    icon: "activity",
    tagline: "Predictive maintenance for rotating equipment in refineries, petrochemical and power plants.",
    summary:
      "Early warning of machinery faults so maintenance is planned, not forced. Our vibration and condition monitoring programmes track the health of critical rotating equipment and turn measurements into clear maintenance recommendations.",
    features: [
      "Vibration measurement, analysis and diagnostics",
      "Predictive maintenance programmes for critical machines",
      "Detection of imbalance, misalignment, bearing and gear faults",
      "Trend tracking and alarm-level review",
      "Reports that maintenance teams can act on",
    ],
    includes: [
      "Route-based vibration monitoring",
      "Vibration analysis and fault diagnosis",
      "Condition monitoring programme set-up",
      "Trend and health reporting",
    ],
    applications: ["Pumps and compressors", "Steam and gas turbines", "Electric motors and drives", "Fans, blowers and gearboxes"],
    industries: ["Refineries", "Petrochemical", "Power plants"],
    standards: ["ISO 20816 (vibration evaluation)", "ISO 13373 (condition monitoring)", "ISO 18436 (analyst qualification)", "API 670"],
    rfpLabel: "Request Monitoring Proposal",
  },
  {
    slug: "drone-inspection",
    name: "Industrial Aerial Visual Drone Inspections",
    shortName: "Drone Inspection (ROAV)",
    icon: "radar",
    tagline: "Remotely operated aerial vehicle inspection of flare stacks, power transmission and high-elevation structures.",
    summary:
      "Close visual inspection of tall and hard-to-reach assets using remotely operated aerial vehicles (ROAV). Aerial inspection reduces the need for scaffolding and work at height, giving engineers high-resolution imagery to assess condition quickly.",
    features: [
      "ROAV visual inspection of elevated and hard-to-reach assets",
      "High-resolution imagery and video for defect review",
      "Less scaffolding, rope access and work at height",
      "Photographic reports with defect referencing",
      "Fast mobilisation for routine and ad-hoc surveys",
    ],
    includes: [
      "Flare stack inspection",
      "Power transmission line and tower inspection",
      "Stack, chimney and tall structure surveys",
      "Roof, tank and structure surveys",
    ],
    applications: ["Flare stacks and flare tips", "Power transmission lines and towers", "Chimneys, stacks and tall structures", "Roofs and large external surfaces"],
    industries: ["Refineries", "Petrochemical", "Power and utilities"],
    standards: ["GACA unmanned aircraft regulations", "Client site access and permit-to-work rules"],
    rfpLabel: "Request Drone Inspection Quote",
  },
  {
    slug: "rotating-equipment",
    name: "Rotating Equipment Inspection & Overhaul Support",
    shortName: "Rotating Equipment",
    icon: "cog",
    tagline: "Inspection and technical support for rotating equipment overhauls.",
    summary:
      "Technical inspection and support through the overhaul cycle of pumps, compressors, turbines and drivers. We help define scope, verify condition during overhaul and confirm results afterwards, linking findings to condition monitoring data.",
    features: [
      "Inspection of pumps, compressors, turbines and drivers",
      "Overhaul scope definition and technical support",
      "Condition verification during dismantling and reassembly",
      "Post-overhaul checks and reporting",
      "Findings linked to vibration and condition monitoring data",
    ],
    includes: [
      "Pre-overhaul condition assessment",
      "Overhaul inspection support",
      "Post-overhaul verification",
      "Overhaul reporting",
    ],
    applications: ["Centrifugal pumps and compressors", "Steam and gas turbines", "Gearboxes and couplings", "Plant turnaround overhaul campaigns"],
    industries: ["Refineries", "Petrochemical", "Power plants"],
    standards: ["API 610", "API 617", "API 686", "OEM maintenance manuals"],
    rfpLabel: "Request Overhaul Support Quote",
  },
];

// Short list for the Safety & Compliance section.
export const codesAndStandards = [
  "ASME Section V",
  "API 510 / 570 / 653",
  "API 580 / 581",
  "API 579-1",
  "ISO 20816",
  "ISO 18436",
  "API 670",
  "API 610 / 617",
  "ASNT SNT-TC-1A / ISO 9712",
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// "Six" etc., so headline copy follows the catalog instead of being hardcoded.
const countWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
export const serviceLineCount = countWords[services.length] ?? String(services.length);

export const rfpHref = (slug?: string) => `/contact?type=rfp${slug ? `&service=${slug}` : ""}#quote`;
