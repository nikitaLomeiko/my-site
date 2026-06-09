import { MainContent } from "./components/main.content";
import { ProfileCard } from "./components/profile.card";

interface IProps {
  status: string;
  fullname: string;
  position: string;
  avatarURL: string;
  location: string;
  phone: string;
  email: string;
  stack: string;
  yearExperience: string;
  projectCount: string;
  resumeUrl: string;
  githubUrl?: string;
}

export const Profile: React.FC<IProps> = (props) => {
  return (
    <section className="max-w-7xl mx-auto mb-12 md:mb-24 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-1 order-2">
          <MainContent
            position={props.position}
            status={props.status}
            yearExperience={props.yearExperience}
            projectCount={props.projectCount}
            stack={props.stack}
            githubUrl={props.githubUrl}
            resumeUrl={props.resumeUrl}
            fullname={props.fullname}
          />
        </div>

        <div className="w-full md:w-2/5 md:order-2 order-1 mb-8 md:mb-0">
          <ProfileCard
            avatarURL={props.avatarURL}
            fullname={props.fullname}
            position={props.position}
            location={props.location}
            phone={props.phone}
            email={props.email}
          />
        </div>
      </div>
    </section>
  );
};
