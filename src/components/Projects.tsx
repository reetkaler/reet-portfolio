import Image from "next/image";

type Project = {
  name: string;
  tagline?: string;
  description: string[];
  tech: string[];
  badge?: string;
  href?: string;
  images?: string[];
};

const projects: Project[] = [
  {
    name: "Intervue",
    tagline: "AI Interview Practice Platform",
    href: "https://www.inter-vue.com",
    images: [
      "/images/projects/intervue-1.jpg",
      "/images/projects/intervue-2.jpg",
      "/images/projects/intervue-3.jpg",
    ],
    description: [
      "Built a full-stack AI mock interview platform, used by 50+ users, that scores responses via Whisper transcription, Claude-based grading, and MediaPipe body-language tracking.",
      "Implemented a LeetCode-style coding judge with sandboxed Judge0 execution and cost-safety guardrails (per-user quotas, idempotency checks, Turnstile bot verification).",
    ],
    tech: ["Next.js", "FastAPI", "Supabase", "Whisper", "Claude API", "MediaPipe"],
  },
  {
    name: "GroundZero",
    tagline: "Disaster Intelligence Platform",
    href: "https://devpost.com/software/groundzero",
    badge: "HooHacks '26",
    images: ["/images/projects/groundzero-1.jpg", "/images/projects/groundzero-2.jpg"],
    description: [
      "Modeled earthquake impact severity using a 5-factor physics-based scoring system, incorporating a seismic ground-motion attenuation formula, building material vulnerability, and construction-era risk.",
      "Orchestrated up to 4 concurrent AI agents via async task coordination, using Voronoi partitioning and greedy nearest-neighbor routing to assign non-overlapping building coverage.",
    ],
    tech: ["React", "Next.js", "FastAPI", "Mapbox", "Python"],
  },
  {
    name: "Parrot",
    tagline: "AI Phonetics Coach",
    href: "https://devpost.com/software/parrot-l2ndya",
    badge: "VTHacks '25 — Best Use of Gemini API",
    images: [
      "/images/projects/parrot-3.jpg",
      "/images/projects/parrot-1.jpg",
      "/images/projects/parrot-2.jpg",
    ],
    description: [
      "Engineered an AI phonetics coach delivering phoneme-level feedback, real-time lip tracking, and personalized pronunciation scoring.",
      "Designed real-time lip-sync at 30fps using MediaPipe FaceMesh, applying binary search for frame-accurate audio/video alignment during playback.",
    ],
    tech: ["Next.js", "React", "MediaPipe", "Azure"],
  },
  // Ordered chronologically, newest to oldest
  {
    name: "InHerShoes",
    href: "https://devpost.com/software/inhershoes",
    badge: "HackViolet '25",
    description: [
      "Created a 2D interactive game to help women navigate workplace challenges and practice self-advocacy through real-life scenarios and NPC interactions.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "StreetSmart",
    href: "https://devpost.com/software/street-smart-bdalnv",
    badge: "VTHacks '24",
    images: ["/images/projects/streetsmart-1.jpg", "/images/projects/streetsmart-2.jpg"],
    description: [
      "Built a web app using the Google Maps API and Kaggle crime data to help users find safer walking routes through a heat-map visualization of real-time crime statistics.",
    ],
    tech: ["JavaScript", "Google Maps API"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
        Projects
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const card = (
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 transition-shadow hover:shadow-md">
              {project.images && (
                <div
                  className={`grid gap-px bg-zinc-200 ${
                    project.images.length === 3
                      ? "grid-cols-3"
                      : project.images.length > 1
                        ? "grid-cols-2"
                        : "grid-cols-1"
                  }`}
                >
                  {project.images.map((image) => (
                    <Image
                      key={image}
                      src={image}
                      alt={`${project.name} screenshot`}
                      width={600}
                      height={400}
                      className="h-32 w-full object-cover sm:h-36"
                    />
                  ))}
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-zinc-950">
                    {project.name}
                  </h3>
                  {project.href && <span className="text-xs text-zinc-400">↗</span>}
                </div>
                {project.tagline && (
                  <p className="text-sm font-medium text-blue-700">
                    {project.tagline}
                  </p>
                )}
                {project.badge && (
                  <span className="mt-2 inline-block w-fit rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                    {project.badge}
                  </span>
                )}
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  {project.description.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );

          return project.href ? (
            <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer">
              {card}
            </a>
          ) : (
            <div key={project.name}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}
