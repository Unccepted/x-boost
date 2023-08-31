import React, { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
// import i18n from "../../localization/translation";

import { HashLink as Link } from "react-router-hash-link";

import { ContextApp } from "../ContextAPI";

import logo_img from "../../resources/imgs/logo's-img.webp";
import logo_text from "../../resources/imgs/logo's-text.webp";
import memnuIcon from "../../resources/svg/menu-icon.svg";

import { DropdownNavigation } from "./DropdownNavigation";
import { Links } from "./Links";
import { CalendyButton } from "../Resusable/CalendyButton";
import ChangeLanguage from "./ChangeLanguage";

export function Navigation() {
  const { scrolled, setScrolled } = useContext(ContextApp);
  const { navmenu, setNavmenu } = useContext(ContextApp);

  const { t, i18n } = useTranslation();

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
      <header className="container px-8 py-4 mx-auto ">
        <nav className="flex justify-between">
          <div className="flex items-center w-full">
            <div className="max-w-max xl:w-3/12">
              <Link
                smooth
                className="flex gap-1 min-[420px]:gap-2 items-center"
                to="#home"
              >
                <img
                  src={logo_img}
                  alt="logo x-boost"
                  className="h-full w-12 xl:w-16 lg:w-14 "
                />
                <span className="min-[420px]:hidden uppercase font-sans font-extrabold text-2xl text-emerald-600">
                  -
                </span>
                <span className="min-[420px]:hidden uppercase font-sans font-extrabold text-2xl text-emerald-600">
                  boost
                </span>
                <img
                  src={logo_text}
                  alt="logo x-boost text"
                  className="hidden min-[420px]:block max-w-max h-10 lg:h-12 "
                />
              </Link>
            </div>
            <div className="w-full xl:w-9/12">
              {/* Here change menu types   */}

              <ul className="hidden xl:flex xl:justify-end items-center">
                <Links url="#why-x-boost" text={t("navigation.whyXBoost")} />
                <Links url="#our-cases" text={t("navigation.ourCases")} />
                {/* <Links url="#our-clients" text="Наши клиенты" /> */}
                <Links url="#how-its-work" text={t("navigation.ourCases")} />
                <Links url="#price" text={t("navigation.pricing")} />
                <li>
                  <div className="hidden xl:flex items-center justify-end">
                    <CalendyButton
                      buttonText={t("navigation.getStarted")}
                      className={
                        "text-white  text-xl font-medium bg-green-500 hover:bg-green-600 py-2 px-4 rounded-md"
                      }
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <ChangeLanguage />
            </div>
            <button
              className="self-center xl:hidden rounded-md p-2 hover:shadow-inner"
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
