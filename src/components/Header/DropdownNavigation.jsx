import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo_img from "../../imgs/logo's-img.png";
import logo_text from "../../imgs/logo's-text.png";
import { DropdownLink } from "./DropdownLink";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export function DropdownNavigation(props) {
  return (
    <nav
      class={` ${
        props.navmenu ? "" : "hidden"
      } fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50`}
    >
      <div class="fixed top-0 left-0 bottom-0 w-9/12 max-w-md bg-white p-4">
        <div class="m-auto p-4 grid grid-cols-1 gap-8">
          <div className="flex justify-between">
            <Link smooth className="max-w-max flex items-center" to="#home">
              <img src={logo_img} alt="logo x-boost " className="h-14 mr-4" />
              <img
                src={logo_text}
                alt="logo x-boost text"
                className="hidden sm:block min h-10 lg:h-12"
              />
            </Link>
            <button
              class=" top-7 right-4 "
              onClick={() => props.setNavmenu(!props.navmenu)}
            >
              <CloseRoundedIcon
                fontSize="large"
                className=" text-gray-500 hover:text-green-500 active:text-green-600 hover:shadow-inner hover:border-green-500 rounded-lg flex items-center "
              />
            </button>
          </div>
          <ul className="grid grid-col-1 gap-4">
            <DropdownLink text={"Почему X-Boost"} link={"#why-x-boost"} />
            <DropdownLink text={"Наши кейсы"} link={"#our-cases"} />
            {/* Remove because Client doesn't  */}
            {/* <DropdownLink text={"Наши клиенты"} link={"#our-clients"} /> */}
            <DropdownLink text={"Как это работает"} link={"#how-its-work"} />
            <DropdownLink text={"Цена"} link={"#price"} />
          </ul>
          <div class="flex flex-wrap">
            <div className=" xl:flex  items-center justify-end w-full">
              <button class="inline-block py-2 px-4  text-md  w-full leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md">
                Начать
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
