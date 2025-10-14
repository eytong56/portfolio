import type { Project } from "@/app/lib/definitions";
import Image from "next/image";

function Card({ project }: { project: Project }) {
  return (
    <div className="flex-1 flex flex-col gap-3 min-w-60 group cursor-pointer">
      <div className="bg-gray-200 w-full aspect-3/2 border border-gray-300 relative overflow-hidden">
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
      <h3 className="text-md font-semibold group-hover:underline">{project.title}</h3>
      <desc className="text-sm font-normal">{project.description}</desc>
      <p className="text-sm font-light text-gray-500">
        {project.tags.join(" | ")}
      </p>
    </div>
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
