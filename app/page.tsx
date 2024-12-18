import { Certifications } from "@/components/certifications";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import ParticlesComponent from "@/components/ParticlesBackground";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div>
      <ParticlesComponent id='particles' />
      <div>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}
