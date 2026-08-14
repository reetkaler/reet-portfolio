import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-10 px-6 pb-20 pt-16 sm:flex-row sm:pt-24"
    >
      <div className="flex-1 text-center sm:text-left">
        <p className="font-mono text-sm text-blue-700">Hi, I&apos;m</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Reet Kaler
        </h1>
        <p className="mt-6 max-w-xl text-zinc-600">
          Third-year Computer Science student at Virginia Tech.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <a
            href="#projects"
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            Get in touch
          </a>
          <a
            href="https://linkedin.com/in/reet-kaler"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="shrink-0">
        <Image
          src="/images/headshot-full.jpg"
          alt="Portrait of Reet Kaler"
          width={320}
          height={480}
          priority
          className="h-72 w-auto object-cover shadow-lg sm:h-96"
        />
      </div>
    </section>
  );
}
