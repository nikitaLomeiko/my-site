import Link from "next/link";
import { INavigationConfItem } from "../../config/navigation.conf";

interface IProps {
  navigationConf: INavigationConfItem[];
}

export const Navigation: React.FC<IProps> = ({ navigationConf }) => {
  return (
    <nav className="flex items-center space-x-8">
      <div className="hidden md:flex space-x-8">
        {navigationConf.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="hover:text-purple-300 transition-all duration-400 text-[var(--color-primary)]"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
