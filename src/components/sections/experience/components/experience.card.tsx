import { IExperience } from "@/types/resume.type";
import { Recommendations } from "./recommendations";

export const ExperienceCard: React.FC<IExperience> = (props) => {
  const {
    achievements,
    companyName,
    descriptions,
    endDate,
    experienceWork,
    position,
    recommendations,
    responsibility,
    startDate,
  } = props;

  return (
    <div className="glass rounded-3xl p-5 md:p-10">
      <div className="flex flex-col md:flex-row items-start mb-10">
        <div className=" rounded-2xl p-6 mr-0 md:mr-8 mb-6 md:mb-0 w-full md:w-auto">
          <div className="flex flex-col items-center text-blue-500">
            <i className="fas fa-briefcase text-4xl mb-4"></i>
            <div className="text-center">
              <p className="text-2xl font-bold">{experienceWork}</p>
              <p className="text-sm">Опыт работы</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{position}</h3>
          <div className="flex flex-wrap items-center mb-4">
            <span className="text-xl font-semibold text-purple-700 mr-4">
              {companyName}
            </span>
            <span className="glass-dark px-4 py-2 rounded-xl text-sm">
              {startDate} — {endDate}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {descriptions.map((item, index) => (
              <p key={index} className="opacity-90 mb-6">
                {item}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-dark rounded-2xl p-6">
              <h4 className="font-bold mb-4 text-purple-700 text-lg">
                Достижения:
              </h4>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check text-green-400 mt-1 mr-3"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <h4 className="font-bold mb-4 text-blue-700 text-lg">
                Обязанности:
              </h4>
              <ul className="space-y-3">
                {responsibility.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className={item.classIcon}></i>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Recommendations recommendations={recommendations} />
    </div>
  );
};
