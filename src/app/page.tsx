import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Extras from "@/components/Extras";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Extras />
      </main>
      <Contact />
    </div>
  );
}
