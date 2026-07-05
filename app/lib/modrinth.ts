interface ModrinthProject {
  slug: string;
  id: string;
  title: string;
  description: string;
  icon_url: string;
  color: number;
  updated: string;
}

export async function getLatestUserProject(
  username: string,
): Promise<ModrinthProject | null> {
  const response = await fetch(
    `https://api.modrinth.com/v2/user/${username}/projects`,
  );
  const projects: ModrinthProject[] = await response.json();
  return projects.length > 0
    ? projects.sort(
        (a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime(),
      )[0]
    : null;
}
