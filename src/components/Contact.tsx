const links = [
  { label: "Email", value: "reetkcoding@gmail.com", href: "mailto:reetkcoding@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/reet-kaler", href: "https://linkedin.com/in/reet-kaler" },
  { label: "GitHub", value: "github.com/reetkaler", href: "https://github.com/reetkaler" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-3 max-w-md text-zinc-600">
          I&apos;m always happy to talk about software, new projects, or
          internship opportunities. Reach out any of these ways.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="w-full max-w-xs rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:w-auto"
            >
              {link.value}
            </a>
          ))}
        </div>
      </div>
      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Reet Kaler.
      </footer>
    </section>
  );
}
