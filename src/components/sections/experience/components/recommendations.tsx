import { IRecommendation } from "@/types/resume.type";

interface IProps {
  recommendations: IRecommendation[];
}

export const Recommendations: React.FC<IProps> = ({ recommendations }) => {
  return (
    <div className="border-t border-gray-700 pt-10">
      <h3 className="text-2xl font-bold mb-8 text-purple-700">Рекомендации</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recommendations.map((item, index) => (
          <div key={index} className="glass-dark rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="font-bold text-lg sm:text-xl text-white">
                  {item.name[0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-lg sm:text-xl truncate">
                  {item.name}
                </h4>
                <p className="opacity-70 text-sm sm:text-base break-words">
                  {item.position}
                </p>
              </div>
            </div>
            <p className="opacity-90 italic border-l-4 border-purple-500 pl-4 py-2 text-sm sm:text-base">
              {item.messsage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
