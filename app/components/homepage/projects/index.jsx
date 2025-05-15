import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10 flex flex-col items-center">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-center relative w-full">
          <span className="bg-[#1a1443] absolute w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="w-full transition-all duration-500 rounded-lg group relative hover:scale-[1.02] cursor-pointer"
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)]">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
