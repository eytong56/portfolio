import type { Project } from "@/app/lib/definitions";
import Image from "next/image";
import ExternalLink from "@/app/ui/external-link";

function Card({ project }: { project: Project }) {
  return (
    <a href={project.link_url} target="_blank" rel="noopener noreferrer">
      <div
        className={`flex-1 flex flex-col gap-3 min-w-60 group ${
          project.link_url && "cursor-pointer"
        }`}
      >
        <div className="bg-secondary w-full aspect-3/2 border border-light relative overflow-hidden">
          {project.image_url && (
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>
        <h3 className="text-base font-semibold">
          {project.link_url ? (
            <ExternalLink link_url={project.link_url} underlined={false}>
              {project.title}
            </ExternalLink>
          ) : (
            project.title
          )}
        </h3>
        <desc className="text-sm font-normal">{project.description}</desc>
        <p className="text-sm font-light text-secondary">
          {project.tags.join(" | ")}
        </p>
      </div>
    </a>
  );
}

export default function CardWrapper({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
      {projects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </div>
  );
}
