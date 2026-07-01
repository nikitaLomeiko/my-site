import { IProject } from "@/types/resume.type";

function imgPath(src: string): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  const basePath = process.env.NODE_ENV === "production" ? "/my-site" : "";
  return `${basePath}${src}`;
}

interface IProps extends IProject {
  index: number;
}

export const ProjectCard: React.FC<IProps> = (props) => {
  const {
    descriptions,
    iconClass,
    label,
    labelList,
    languages,
    subtitle,
    title,
    repositoryUrl,
    projectUrl,
    imageUrl,
    index,
    isCompanyProject = false,
    isPetProject = false,
    isStartupProject = false,
    isTestProject = false,
  } = props;

  return (
    <div
      key={index}
      className="glass rounded-3xl p-5 sm:p-8 flex flex-col h-full relative"
    >
      {imageUrl && (
        <div
          className="relative -mx-5 sm:-mx-8 -mt-5 sm:-mt-8 mb-8 overflow-hidden p-2"
          style={{ borderRadius: "24px 24px 0 0" }}
        >
          <img
            src={imgPath(imageUrl)}
            alt={title}
            className="w-full aspect-video object-cover rounded-2xl"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 65%, rgba(0,0,0,0.3) 100%)",
              boxShadow: "inset 0 0 15px rgba(0,0,0,0.2)",
              backdropFilter: "blur(0.5px)",
              WebkitBackdropFilter: "blur(0.5px)",
            }}
          />
        </div>
      )}
      {isCompanyProject && (
        <div className="absolute -top-3 right-4 bg-red-700 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
          Проект в компании
        </div>
      )}

      {isPetProject && (
        <div className="absolute -top-3 right-4 bg-green-700 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
          Личный проект
        </div>
      )}

      {isStartupProject && (
        <div className="absolute -top-3 right-4 bg-purple-700 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
          Стартап
        </div>
      )}

      {isTestProject && (
        <div className="absolute -top-3 right-4 bg-yellow-700 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg z-10">
          Тестовый задание
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white">
          <i className={`${iconClass} text-blue-500 !text-4xl sm:text-2xl`}></i>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
          <p className="opacity-70 text-sm sm:text-base">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {descriptions.map((item, index) => (
          <p
            key={index}
            className="opacity-90 mb-6 leading-relaxed text-sm sm:text-base"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="mb-6 space-y-3">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 bg-white hover:from-purple-700 text-black rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg w-full justify-center"
          >
            <i className="fas fa-external-link-alt text-lg"></i>
            <span>Посмотреть сайт проекта</span>
          </a>
        )}

        {repositoryUrl ? (
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg w-full justify-center"
          >
            <i className="fab fa-github text-lg"></i>
            <span>Посмотреть код на GitHub</span>
          </a>
        ) : (
          <div className="flex items-center justify-center gap-3 px-4 py-3 bg-gray-700/80 border border-gray-600 rounded-xl text-gray-300">
            <i className="fas fa-lock text-lg"></i>
            <div className="text-center">
              <p className="font-medium">Коммерческий проект</p>
              <p className="text-xs opacity-70">
                Код недоступен для публичного просмотра
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-4 text-sm sm:text-base">
          Использованные технологии:
        </h4>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {languages.map((language, idx) => (
            <span
              key={idx}
              className="skill-chip skill-chip-primary text-xs sm:text-sm"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      <div className="glass-dark rounded-2xl p-4 sm:p-6 mt-auto">
        <h4 className="font-bold mb-4 text-purple-700 text-sm sm:text-base">
          {label}:
        </h4>
        <ul className="space-y-2 sm:space-y-3">
          {labelList.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <i
                className={`${item.classIcon} mt-1 mr-2 sm:mr-3 text-sm sm:text-base`}
              ></i>
              <span className="text-xs sm:text-sm flex-1">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
