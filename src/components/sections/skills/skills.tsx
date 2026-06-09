import { ISectionSkills } from "@/types/resume.type";
import { SkillCard } from "./components/skill.card";

interface IProps {
  sectionsSkills: ISectionSkills[];
}

export const Skills: React.FC<IProps> = ({ sectionsSkills }) => {
  return (
    <section id="skills" className="max-w-7xl mx-auto mb-16">
      <h2 className="text-3xl font-bold mb-8 text-purple-700">Навыки</h2>

      <div className="glass rounded-2xl p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sectionsSkills.map((section, index) => (
            <SkillCard section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
