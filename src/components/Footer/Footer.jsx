/* eslint-disable no-unused-vars */
import { useContext } from "react";

import logo_img from "../../resources/imgs/logo's-img.webp";
import xIcon from "../../resources/svg/Twitter X.svg";
import instagramIcon from "../../resources/svg/instagram-svgrepo-com.svg";
import telegramIcon from "../../resources/svg/telegram-alt-svgrepo-com.svg";
import youtubeIcon from "../../resources/svg/youtube-168-svgrepo-com.svg";
import tiktokIcon from "../../resources/svg/tiktok-svgrepo-com.svg";

import { Icons } from "./Icons";
import { ContextApp } from "../ContextAPI";

export default function Footer() {
  const { t } = useContext(ContextApp);
  return (
    <footer className="bg-green-900 ">
      <div className="container px-8 pt-4 mx-auto">
        <h1>
          <a
            href="/"
            aria-label="X-Boost"
            title="Company"
            className="inline-flex items-center"
          >
            <img src={logo_img} alt="logo x-boost " className="h-12" />
            <span className="ml-2 text-2xl font-bold tracking-wide text-emerald-50 uppercase">
              {t("footer.header")}
            </span>
          </a>
        </h1>
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className=" lg:max-w-sm">
              <p className="text-sm text-white">{t("footer.textUp")}</p>
              <p className="mt-4 text-sm text-white">{t("footer.textDown")}</p>
            </div>
          </div>
          <div className="md:col-start-4 text-sm">
            <p className="text-base font-bold tracking-wide text-emerald-50">
              {t("footer.ourContacts.header")}
            </p>
            <div className="flex">
              <p className="mr-1 text-white">
                {" "}
                {t("footer.ourContacts.phoneNumeber")}
              </p>
              <a
                href="tel:(+380)97-466-5809"
                aria-label="(+380)97-466-5809"
                className="transition-colors duration-300 text-gray-400 hover:text-white"
              >
                (+380) 97-466-5809
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white ">
                {t("footer.ourContacts.email")}
              </p>
              <a
                href="mailto:xboosthub@gmail.com"
                aria-label=" xboosthub@gmail.com"
                className="transition-colors duration-300 text-gray-400 hover:text-white"
              >
                xboosthub@gmail.com
              </a>
            </div>
          </div>
          {/* <div>
            <span className="text-base font-bold tracking-wide text-emerald-50 ">
             {t("footer.ourContacts.weInSocials")}
            </span>
            <div className="flex justify-start items-center gap-4">
              <Icons src={instagramIcon} href={""} />
              <Icons src={telegramIcon} href={""} />
              <Icons src={youtubeIcon} href={""} />
              <Icons src={xIcon} href={""} />
              <Icons src={tiktokIcon} href={""} />
            </div>
          </div> */}
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-400">© {t("footer.rights")}</p>
          {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}
