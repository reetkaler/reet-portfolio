import Image from "next/image";

type Extracurricular = {
  org: string;
  role: string;
  dates: string;
  logo?: string;
  bullets: string[];
  photos?: string[];
};

const extracurriculars: Extracurricular[] = [
  {
    org: "CS Careers at Virginia Tech",
    role: "Vice President (Jan 2026 – Present) · Graphic Designer (Jan 2025 – Jan 2026)",
    dates: "January 2025 – Present",
    logo: "/images/logos/cs-careers.jpg",
    bullets: [
      "Manage a 15-person board, leading student-focused initiatives that support peer career development across the CS community",
      "Increased average post engagement by ~25% through redesigned graphics and layout enhancements",
    ],
    photos: [
      "/images/extracurriculars/cs-careers-1.jpg",
      "/images/extracurriculars/cs-careers-2.jpg",
    ],
  },
  {
    org: "Google Developer's Club at Virginia Tech",
    role: "Graphic Designer",
    dates: "February 2026 – Present",
    logo: "/images/logos/gdg.svg",
    bullets: [
      "Design flyers and social graphics for club workshops and hackathons, maintaining a consistent visual brand",
    ],
  },
];

const skills = {
  Languages: ["Java", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "C#", "C++", "SQL"],
  "Frameworks & Technologies": [
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "OpenCV",
    ".NET/Blazor",
    "Supabase",
    "MediaPipe",
  ],
  "Developer Tools": ["Git", "Docker", "VS Code", "Linux", "GitHub Copilot", "Claude Code", "Jest"],
};

export default function Extras() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
        Extracurriculars
      </h2>
      <div className="mt-10 space-y-10">
        {extracurriculars.map((item) => (
          <div key={item.org} className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white p-2.5">
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={`${item.org} logo`}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="font-mono text-xs font-medium text-zinc-400">
                  {item.org
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium text-zinc-950">{item.org}</h3>
                <p className="font-mono text-xs text-zinc-500">{item.dates}</p>
              </div>
              <p className="text-sm text-zinc-500">{item.role}</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {item.photos && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {item.photos.map((photo) => (
                    <Image
                      key={photo}
                      src={photo}
                      alt={`${item.org} photo`}
                      width={400}
                      height={300}
                      className="h-32 w-full rounded-lg object-cover sm:h-40"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight text-zinc-950">
        Skills
      </h2>
      <div className="mt-8 space-y-5">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6"
          >
            <p className="w-52 shrink-0 text-sm font-medium text-zinc-950">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
