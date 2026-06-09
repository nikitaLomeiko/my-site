import { ActionButtons } from "./ui/action.buttons";
import { Badge } from "./ui/badge";

interface IProps {
  position: string;
  status: string;
  yearExperience: string;
  projectCount: string;
  stack: string;
  githubUrl?: string;
  resumeUrl: string;
  fullname: string;
}

export const MainContent: React.FC<IProps> = (props) => {
  return (
    <div className="relative">
      <div className="hidden sm:block">
        <div className="absolute -top-8 -left-8">
          <Badge
            icon="fa-calendar-alt"
            value={props.yearExperience}
            label="во фронтенде"
            color="text-blue-400"
            delay="animate-float-delayed-1"
          />
        </div>
        <div className="absolute -top-4 right-12">
          <Badge
            icon="fa-rocket"
            value={props.projectCount}
            label="коммерческих проектов"
            color="text-purple-400"
            delay="animate-float-delayed-2"
          />
        </div>
        <div className="absolute bottom-8 right-24">
          <Badge
            icon="fa-bolt"
            value={props.stack}
            label="основной стек"
            color="text-yellow-400"
            delay="animate-float-delayed-4"
          />
        </div>
      </div>

      <div className="sm:hidden grid grid-cols-2 gap-3 mb-6">
        <Badge
          icon="fa-calendar-alt"
          value={props.yearExperience}
          label="во фронтенде"
          color="text-blue-400"
          delay="animate-float-delayed-1"
          mobile
        />
        <Badge
          icon="fa-rocket"
          value={props.projectCount}
          label="проектов"
          color="text-purple-400"
          delay="animate-float-delayed-2"
          mobile
        />
        <Badge
          icon="fa-bolt"
          value={props.stack}
          label="основной стек"
          color="text-yellow-400"
          delay="animate-float-delayed-4"
          mobile
        />
      </div>

      <div className="hidden sm:block">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
          <span className="text-purple-500 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {props.position}
          </span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 md:mb-8 opacity-80">
          {props.status}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6">
        <a
          href="#contacts"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-500 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-medium transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base"
        >
          Связаться со мной
        </a>
        <a
          href="#projects"
          className="px-6 sm:px-8 py-3 sm:py-4 glass rounded-xl font-medium transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl text-center text-sm sm:text-base"
        >
          Мои проекты
        </a>
      </div>

      <ActionButtons
        githubUrl={props.githubUrl}
        resumeUrl={props.resumeUrl}
        fullname={props.fullname}
      />
    </div>
  );
};
