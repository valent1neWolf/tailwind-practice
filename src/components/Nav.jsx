import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constans";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import React, { useState, useEffect } from "react";
const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="nike logo" />
        </a>
        <ul className="md:flex md:flex-1 items-center justify-end gap-16 max-lg:hidden lg:mr-3">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-monsterrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden ">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger>
              <img src={hamburger} alt="hamburger" width={25} height={25} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navLinks.map((item) => (
                <DropdownMenuItem key={item.label}>
                  <a
                    href={item.href}
                    className="font-monsterrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
