"use client";

import { useState } from "react";
import Link from "next/link";
import { navigationConf } from "../config/navigation.conf";

import { Navigation } from "./ui/navigation";
import { NavigationMobile } from "./ui/navigation.mobile";
import { ThemeChanger } from "@/components/common/theme-changer/theme.changer";

interface IProps {
  name: string;
}

export const Header: React.FC<IProps> = ({ name }) => {
  const [showMenu, setShow] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 py-4 px-6 glass"
      style={{ backdropFilter: "blur(15px)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        <Link href="/" className="text-xl font-bold text-purple-700 hover:opacity-80 transition-opacity">
          {name}
        </Link>

        <div className="flex flex-row items-center gap-10">
          <Navigation navigationConf={navigationConf} />
          {showMenu && (
            <NavigationMobile
              navigationConf={navigationConf}
              onHideMenu={() => setShow(false)}
            />
          )}

          <ThemeChanger />

          <button
            onClick={() => setShow(!showMenu)}
            className="md:hidden text-2xl hover:scale-125 transition-transform duration-300"
          >
            {showMenu ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
