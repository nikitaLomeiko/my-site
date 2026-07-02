import { ContactItem } from "./ui/contact.item";

interface IProps {
  avatarURL: string;
  fullname: string;
  position: string;
  location: string;
  phone: string;
  email: string;
}

export const ProfileCard: React.FC<IProps> = (props) => {
  return (
    <div className="glass rounded-3xl p-6 md:p-8 animate-float relative overflow-hidden">
      <div className="flex flex-col items-center mb-6 md:mb-8">
        <div
          className="photo-placeholder !rounded-4xl w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          style={{ backgroundImage: `url(${props.avatarURL})` }}
        />
        <div className="text-center mt-4 md:mt-5">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white-500">
            {props.fullname}
          </h2>
          <p className="opacity-80 text-sm md:text-base">{props.position}</p>
        </div>
      </div>

      <a
        href="/blog"
        className="mb-6 glass-dark rounded-2xl p-4 flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
      >
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-purple-700/30 group-hover:bg-purple-700/40 transition-colors">
          <i className="fas fa-microphone-alt text-lg text-purple-700"></i>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-purple-700">Никита Вещает</p>
          <p className="opacity-60 text-xs truncate">Мои мысли о разработке</p>
        </div>
        <i className="fas fa-arrow-right text-purple-700 text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
      </a>

      <div className="space-y-4 md:space-y-5">
        <ContactItem
          icon="fa-map-marker-alt"
          label="Локация"
          value={props.location}
          color="text-purple-400"
        />
        <ContactItem
          icon="fa-phone"
          label="Телефон"
          value={props.phone}
          color="text-blue-400"
        />
        <ContactItem
          icon="fa-envelope"
          label="Email"
          value={props.email}
          color="text-pink-400"
        />
      </div>
    </div>
  );
};
