import { projectsData } from '@/lib/projectsData';
import ProjectPreview from './ProjectPreview';

export default async function ProjectsContainer() {
  return (
    <section id="projectsSection" className="grid place-items-center w-full">
      <h2 className="uppercase text-[40px] text-secondary font-mono lg:text-[62px] mb-[110px] lg:mb-[250px] pt-[120px]">
        Projects
      </h2>
      <div className="flex flex-col items-center w-full gap-y-[105px] lg:gap-y-[276px]">
        {projectsData.map((project, index) => {
          return (
            <ProjectPreview
              index={index}
              project={project}
              key={project.title}
            />
          );
        })}
      </div>
    </section>
  );
}
