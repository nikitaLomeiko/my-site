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
