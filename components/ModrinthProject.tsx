import { Modrinth } from "typerinth";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./ModrinthProject.module.css";

interface ModrinthProjectProps extends HTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}

function intToHexColor(value: number) {
  return "#" + value.toString(16).padStart(6, "0");
}

export default async function ModrinthProject(props: ModrinthProjectProps) {
  const modrinth = new Modrinth();
  const userProjects = await modrinth.getUserProjects("foxeddev");
  const project = userProjects.reduce((latest, current) =>
    new Date(current.published) > new Date(latest.published) ? current : latest
  );

  return (
    <Link
      {...props}
      href={`https://modrinth.com/project/${project.id}`}
      className={`${props.className} ${styles.root}`}
      target="_blank"
    >
      {project.icon_url && (
        <Image
          className={styles.icon}
          src={project.icon_url}
          alt={"Project Icon"}
          width={150}
          height={150}
          style={
            project.color
              ? ({
                  "--projectColor": intToHexColor(project.color),
                } as React.CSSProperties)
              : undefined
          }
        />
      )}
      <div className={styles.textContainer}>
        <div>
          <p className={styles.titleInfo}>Latest project</p>
          <h3 className={styles.title}>
            <mark>{project.title}</mark>
          </h3>
        </div>
        <p className={styles.description}>{project.description}</p>
      </div>
    </Link>
  );
}
