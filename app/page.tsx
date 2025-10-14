import Hero from "@/app/ui/hero";
import Section from "@/app/ui/section";
import CardWrapper from "@/app/ui/card-wrapper";
import About from "@/app/ui/about";
import { development_projects, design_projects } from "@/app/lib/content";

export default function Home() {
  return (
      <div className="max-w-250 py-24 flex flex-col items-center gap-24">
        <Hero />
        <Section sectionHeader="development">
          <CardWrapper projects={development_projects} />
        </Section>
        <Section sectionHeader="design">
          <CardWrapper projects={design_projects} />
        </Section>
        <Section sectionHeader="about">
          <About />
        </Section>
      </div>
  );
}
