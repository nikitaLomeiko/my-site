import { IExperience, IIconLabel, IRecommendation } from "@/types/resume.type";
import { Recommendations } from "./components/recommendations";
import { ExperienceCard } from "./components/experience.card";

interface IProps {
  experiences: IExperience[];
}

export const Experience: React.FC<IProps> = ({ experiences }) => {
  return (
    <section id="experience" className="max-w-7xl mx-auto mb-24">
      <h2 className="text-3xl font-bold mb-12 text-purple-700">Опыт работы</h2>
      {experiences.map((item, index) => (
        <div key={index}>
          <ExperienceCard {...item} />
        </div>
      ))}
    </section>
  );
};
