import Link from "next/link";
import { INavigationConfItem } from "../../config/navigation.conf";

interface IProps {
  navigationConf: INavigationConfItem[];
  onHideMenu: () => void;
}

export const NavigationMobile: React.FC<IProps> = ({
  navigationConf,
  onHideMenu,
}) => {
  return (
    <div
      className="md:hidden absolute top-full left-0 w-full glass-dark mt-2 py-6 px-6"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="flex flex-col space-y-5">
        {navigationConf.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() => onHideMenu()}
            className="hover:text-purple-300 text-[var(--color-primary)] transition-all duration-400 py-3 hover:pl-4 text-center"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
