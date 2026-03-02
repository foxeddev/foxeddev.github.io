import { Modrinth } from "typerinth";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

function intToHexColor(value: number) {
  return value.toString(16).padStart(6, "0");
}

export default async function ModrinthProject() {
  const modrinth = new Modrinth();
  const userProjects = await modrinth.getUserProjects("foxeddev");
  const project = userProjects.reduce((latest, current) =>
    new Date(current.published) > new Date(latest.published) ? current : latest,
  );

  return (
    <Link
      href={`https://modrinth.com/project/${project.id}`}
      target="_blank"
      className="flex flex-col justify-center gap-4 row-span-2 bg-bg shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[8px_8px_0_0_var(--color-primary)] p-8 text-center transition hover:-translate-2"
    >
      <div
        className="mx-auto w-fit bg-(--projectColor)"
        style={
          project.color
            ? ({
                "--projectColor": `#${intToHexColor(project.color)}`,
              } as CSSProperties)
            : undefined
        }
      >
        {project.icon_url && (
          <Image
            src={project.icon_url}
            alt="Project Icon"
            width={96}
            height={96}
            placeholder="empty"
            className="shadow-[8px_8px_0_0_var(--projectColor)] -translate-2"
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-primary text-xl">{project.title}</h3>
        <p className="font-mono text-text-secondary">{project.description}</p>
      </div>
    </Link>
  );
}
