import { ISectionSkills } from "@/types/resume.type";

interface IProps {
  section: ISectionSkills;
  index: number;
}

export const SkillCard: React.FC<IProps> = ({ section, index }) => {
  const getSkillColor = (type: string) => {
    switch (type) {
      case "primary":
        return "bg-purple-500/10 text-[var(--color-foreground)] border border-purple-500/30";
      case "secondary":
        return "bg-blue-500/10 text-[var(--color-foreground)] border border-blue-500/30";
      case "accent":
        return "bg-pink-500/10 text-[var(--color-foreground)] border border-pink-500/30";
      default:
        return "bg-gray-500/10 text-[var(--color-foreground)] border border-gray-500/30";
    }
  };

  return (
    <div
      key={index}
      className="glass-dark rounded-xl p-5 hover:bg-white/5 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-blue-500`}
        >
          <i className={section.iconClass}></i>
        </div>
        <h3 className="text-xl font-bold text-white-700">{section.name}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {section.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default ${getSkillColor(
              section.type,
            )}`}
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-between items-center text-sm opacity-70">
        <span>{section.skills.length} навыков</span>
        <span className="flex items-center gap-1">
          <i className="fas fa-bolt text-xs"></i>
          Уровень: эксперт
        </span>
      </div>
    </div>
  );
};
