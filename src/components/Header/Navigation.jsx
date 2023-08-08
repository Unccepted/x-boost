import React, { useState, useEffect, useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { ContextApp } from "../ContextAPI";

import logo_img from "../../imgs/logo's-img.png";
import logo_text from "../../imgs/logo's-text.png";
import memnuIcon from "../../svg/menu-icon.svg";
import { DropdownNavigation } from "./DropdownNavigation";
import { Links } from "./Links";

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
  });

  return (
    <section
      className={`sticky top-0 z-50 w-full ${
        scrolled ? " bg-white" : "bg-transparent "
      } bg-white overflow-hidden text-xl transition-all duration-100`}
    >
      <header className="container p-4  mx-auto ">
        <nav className="flex justify-between">
          <div className="flex items-center w-full">
            <div className="w-full xl:w-3/12">
              <Link smooth className="flex gap-2 items-center" to="#home">
                <img
                  src={logo_img}
                  alt="logo x-boost"
                  className="h-full w-12 xl:w-16 lg:w-14 "
                />
                <img
                  src={logo_text}
                  alt="logo x-boost text"
                  className="hidden min-[425px]:block max-w-max h-10 lg:h-12 "
                />
              </Link>
            </div>
            <div className="w-full xl:w-9/12">
              {/* Here change menu types   */}

              <ul className="hidden xl:flex xl:justify-end items-center">
                <Links url="#why-x-boost" text="Почему X-Boost" />
                <Links url="#our-cases" text="Наши кейсы" />
                {/* Add when have feedack */}

                {/* <Links url="#our-clients" text="Наши клиенты" /> */}
                <Links url="#how-its-work" text="Как это работает" />
                <Links url="#price" text="Цена" />

                <li>
                  <div className="hidden xl:flex items-center justify-end">
                    <button className="text-white  text-xl font-medium bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md">
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
              <img src={memnuIcon} alt="menu icon" className="w-20 " />
            </button>
          </div>
        </nav>
        <DropdownNavigation navmenu={navmenu} setNavmenu={setNavmenu} />
      </header>
    </section>
  );
}
