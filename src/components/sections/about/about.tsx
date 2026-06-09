import { IIconLabel } from "@/types/resume.type";

interface IProps {
  descriptions: string[];
  hobbyList: IIconLabel[];
  characteristics: string[];
}

export const About: React.FC<IProps> = (props) => {
  const { characteristics, descriptions, hobbyList } = props;

  return (
    <section id="about" className="max-w-7xl mx-auto mb-24">
      <h2 className="text-3xl font-bold mb-12 text-purple-700">Обо мне</h2>
      <div className="glass rounded-3xl p-5 md:p-10">
        {descriptions.map((item, index) => (
          <p key={index} className="text-lg mb-8 leading-relaxed opacity-90">
            {item}
          </p>
        ))}

        <div className="glass-dark rounded-2xl p-8 mt-8">
          <h3 className="text-2xl font-bold mb-6 text-purple-700">
            Немного о личной жизни
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-4 text-xl">Хобби и интересы:</h4>
              <ul className="space-y-3">
                {hobbyList.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <i className={item.classIcon}></i>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-xl">Ключевые качества:</h4>
              <ul className="space-y-3">
                {characteristics.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check text-green-400 mr-3"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
