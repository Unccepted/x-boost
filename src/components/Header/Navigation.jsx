import React, { useState, useEffect, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ContextApp } from "../ContextAPI";

import logo_img from "../../imgs/logo's-img.png";
import logo_text from "../../imgs/logo's-text.png";
import memnuIcon from "../../svg/menu-icon.svg";
import { DropdownNavigation } from "./DropdownNavigation";

export function Navigation() {
  const { scrolled, setScrolled } = useContext(ContextApp);
  const { navmenu, setNavmenu } = useContext(ContextApp);

  function handleScroll() {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`sticky top-0 z-50 w-full ${
        scrolled ? " bg-white p-3" : "bg-transparent p-6"
      } bg-white overflow-hidden text-xl  transition-all duration-100`}
    >
      <header className="bg-transparent container px-4 mx-auto ">
        <nav className="flex justify-between px-4">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2 xl:w-1/5 flex flex-row items-center">
              <div className="mr-2">
                <Link smooth className="block max-w-max" to="#home">
                  <img src={logo_img} alt="logo x-boost " className="h-12" />
                </Link>
              </div>
              <div>
                <img src={logo_text} alt="logo x-boost text" className="h-8" />
              </div>
            </div>
            <div className="w-full xl:w-4/5 justify-end">
              <ul className="hidden xl:flex xl:justify-center items-center">
                <li className="mr-12">
                  <Link
                    smooth
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth"
                    to="#why-x-boost"
                  >
                    Почему X-Boost
                  </Link>
                </li>
                <li className="mr-12">
                  <Link
                    smooth
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth"
                    to="#our-cases"
                  >
                    Наши кейсы
                  </Link>
                </li>
                <li className="mr-12">
                  <Link
                    smooth
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth"
                    to="#our-clients"
                  >
                    Наши клиенты
                  </Link>
                </li>
                <li className="mr-12">
                  <Link
                    smooth
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth"
                    to="#how-its-work"
                  >
                    Как это работает
                  </Link>
                </li>
                <li className="mr-12">
                  <Link
                    smooth
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth hover:scroll-auto"
                    to="#price"
                  >
                    Цена
                  </Link>
                </li>
                <li className="">
                  <div className="hidden xl:flex items-center justify-end">
                    <button className="text-white  text-xl font-medium bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
                      Начать
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <button
              class="self-center xl:hidden rounded-md p-2 hover:shadow-inner"
              onClick={() => setNavmenu(!navmenu)}
            >
              <img src={memnuIcon} alt="menu icon" className="w-14 " />
            </button>
          </div>
        </nav>
        <DropdownNavigation navmenu={navmenu} setNavmenu={setNavmenu} />
      </header>
    </section>
  );
}
