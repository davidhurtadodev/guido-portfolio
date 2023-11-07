import { getProjects } from '@/lib/services/service';

export default async function ProjectsContainer() {
  const projects = await getProjects(4);
  projects.forEach((project) => console.log(project.featuredImage));
  return <div></div>;
}
