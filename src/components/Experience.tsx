import Image from "next/image";

type Job = {
  company: string;
  role: string;
  location: string;
  dates: string;
  logo: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    company: "Capital One",
    role: "Software Engineer Intern",
    location: "McLean, VA",
    dates: "June 2026 – August 2026",
    logo: "/images/logos/capital-one.svg",
    bullets: [
      "Revamped small business card account screens, viewed by 8M+ customers daily",
      "Developed a feature-flagged enhancement to the card-decline notification API, adding second- and third-person messaging across 4 decline types and refactoring widget-building logic into composable, testable functions",
      "Wrote 250+ lines of Jest tests covering a dozen decline-messaging scenarios and edge cases, enabling safe, incremental rollout via feature flags",
    ],
  },
  {
    company: "Reinventing Geospatial Inc.",
    role: "Software Engineer Intern",
    location: "Fairfax, VA",
    dates: "January 2026 – May 2026",
    logo: "/images/logos/rgi.png",
    bullets: [
      "Shipped 20+ features and fixes for a GIS application in an Agile workflow, demoing releases directly to stakeholders",
      "Delivered a Map Descriptor feature spanning schema migration, UI, and persistence layers across all 3 obstacle geometry types via 5 merged MRs",
      "Fixed critical crashes (Telerik chart decimal overflow, basemap reimport duplicate-key exception) and migrated 3 ViewModels to ValidatableDouble for safe chart binding",
    ],
  },
  {
    company: "WR Systems",
    role: "Software Engineer Intern",
    location: "Fairfax, VA",
    dates: "May 2025 – December 2025",
    logo: "/images/logos/wr-systems.png",
    bullets: [
      "Refined interactive map controls in a C# Blazor GIS application by enabling smooth, device-sensitive zoom and rotation, improving UX across input types",
      "Engineered a secure decryption pipeline to extract embedded encryption parameters and transform protected datasets into usable formats",
    ],
  },
  {
    company: "'Sup",
    role: "Software Engineer Intern",
    location: "Remote",
    dates: "December 2024 – May 2025",
    logo: "/images/logos/sup.webp",
    bullets: [
      "Built and integrated OAuth authentication with TypeScript for secure user login and access control",
      "Designed and developed secure front-end features for a startup platform connecting students to internships",
    ],
  },
  {
    company: "BAE Systems",
    role: "Women in Technology Intern",
    location: "Manassas, VA",
    dates: "November 2023 – February 2024",
    logo: "/images/logos/bae-systems.svg",
    bullets: [
      "Simulated intricate electronic circuits using TinkerCAD to create an efficient prototype",
      "Constructed breadboard circuits, using prototypes as a foundation for seamless integration and functionality",
      "Optimized firmware for an electronic system with C++ on Arduino platforms, ensuring optimal functionality and heightened performance in embedded designs",
    ],
  },
  {
    company: "One-Off Coder",
    role: "Lead Intern and Camp Counselor",
    location: "Gainesville, VA",
    dates: "February 2022 – November 2023",
    logo: "/images/logos/one-off-coder.png",
    bullets: [
      "Conducted individualized weekly tutoring sessions in Python by implementing challenging projects for students",
      "Delivered personalized mathematics tutoring sessions to help students master fundamental concepts and problem-solving techniques",
      "Mentored seven new interns, providing guidance and knowledge transfer to cultivate a collaborative and skilled team",
      "Presented daily STEM activities for students, developing games to create an interactive and dynamic learning environment",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
        Experience
      </h2>
      <div className="mt-10 space-y-10">
        {jobs.map((job) => (
          <div key={job.company} className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white p-2.5">
              <Image
                src={job.logo}
                alt={`${job.company} logo`}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium text-zinc-950">
                  {job.role} · {job.company}
                </h3>
                <p className="font-mono text-xs text-zinc-500">{job.dates}</p>
              </div>
              <p className="text-sm text-zinc-500">{job.location}</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
