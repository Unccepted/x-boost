import React, { useState, useEffect } from "react";

import logo_img from "../imgs/logo's-img.png";
import logo_text from "../imgs/logo's-text.png";
export function Navigation() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPos(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <section
      className={`sticky top-0 z-50 w-full ${
        scrollPos > 50 ? "bg-opacity-80 bg-white" : "bg-transparent"
      } bg-whire overflow-hidden text-xl`}
    >
      <div className="bg-transparent container px-4 mx-auto">
        <nav className="flex justify-between p-6 px-4">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2 xl:w-1/5 flex flex-row items-center">
              <div className="mr-2">
                <a className="block max-w-max" href="#home">
                  <img src={logo_img} alt="logo x-boost " className="h-12" />
                </a>
              </div>
              <div>
                <img src={logo_text} alt="logo x-boost text" className="h-8" />
              </div>
            </div>
            <div className="w-full xl:w-4/5 justify-end">
              <ul className="hidden xl:flex xl:justify-center items-center">
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth"
                    href="#why-x-boost"
                  >
                    Почему X-Boost
                  </a>
                </li>{" "}
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth"
                    href="#our-cases"
                  >
                    Наши кейсы
                  </a>
                </li>{" "}
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth"
                    href="#our-clients"
                  >
                    Наши клиенты
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth"
                    href="#how-its-work"
                  >
                    Как это работает
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium scroll-smooth hover:scroll-auto"
                    href="#price"
                    onClick={(event) => scrollToElement(event, "price")}
                  >
                    Цена
                  </a>
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
          </div>
        </nav>
      </div>
    </section>
  );
}
