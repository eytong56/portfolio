import Subsection from "@/app/ui/subsection";
import type { Experience } from "@/app/lib/definitions";
import { education, experiences } from "../lib/content";
import { Fragment } from "react";

function Experience({ experience }: { experience: Experience }) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 w-full">
        <h3 className="font-semibold">{experience.company}</h3>
        <p className="font-light">
          {experience.description.map((line, index) => {
            return (
              <Fragment key={line}>
                {line}
                {index < experience.description.length - 1 && <br />}
              </Fragment>
            );
          })}
        </p>
      </div>
      <div className="">{experience.date}</div>
    </div>
  );
}

function ExperienceWrapper({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="flex flex-col gap-4">
      {experiences.map((experience) => (
        <Experience key={experience.description[0]} experience={experience} />
      ))}
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <Subsection subsectionHeader="education">
        <ExperienceWrapper experiences={education} />
      </Subsection>
      <Subsection subsectionHeader="experience">
        <div className="flex flex-col gap-4">
          <ExperienceWrapper experiences={experiences} />
        </div>
      </Subsection>
      <Subsection subsectionHeader="skills">
        <div className="flex flex-col gap-4 font-light">
          <p>
            <span className="font-semibold">languages.</span> Python,
            JavaScript, TypeScript, Java, Go, SQL, Standard ML, C++, C, Bash
          </p>
          <p>
            <span className="font-semibold">web & database technologies.</span>{" "}
            React, Node.js, Express.js, Next.js, RESTful APIs, PostgreSQL,
            HTML/CSS
          </p>
          <p>
            <span className="font-semibold">tools & design.</span> Git, Figma,
            Framer, Adobe Creative Cloud, Latex
          </p>
        </div>
      </Subsection>
      <Subsection subsectionHeader="fun">
        <p className="font-light">
          In my free time, I enjoy filming documentaries, taking photos, and
          playing bass guitar.
        </p>
      </Subsection>
    </div>
  );
}
