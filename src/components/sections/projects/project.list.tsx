import { IProject } from "@/types/resume.type";
import { ProjectCard } from "./components/project.card";
import { useState } from "react";

interface IProps {
  projects: IProject[];
}

export const ProjectList: React.FC<IProps> = ({ projects }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const projectsPerLoad = 2;

  const loadMoreProjects = () => {
    setVisibleCount((prev) =>
      Math.min(prev + projectsPerLoad, projects.length),
    );
  };

  const hasMoreProjects = visibleCount < projects.length;

  return (
    <section id="projects" className="max-w-7xl mx-auto mb-24">
      <h2 className="text-3xl font-bold mb-12 text-purple-700">
        Ключевые проекты
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="mt-12 text-center">
          <button
            onClick={loadMoreProjects}
            className="cursor-pointer group relative px-10 py-5  bg-[length:200%_100%] text-white rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              <i className="fas fa-plus text-xl transition-transform duration-500 group-hover:rotate-90"></i>
              <span>Показать ещё {projectsPerLoad} проекта</span>
              <i className="fas fa-arrow-down text-xl transition-transform duration-500 group-hover:translate-y-1"></i>
            </span>

            <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-pink-400 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-purple-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
          </button>

          <p className="mt-6 text-gray-400 text-sm">
            Показано {visibleCount} из {projects.length} проектов
            <span className="block mt-1 text-xs opacity-70">
              Кликните, чтобы увидеть больше работ
            </span>
          </p>
        </div>
      )}
    </section>
  );
};
