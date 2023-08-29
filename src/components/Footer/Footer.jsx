/* eslint-disable no-unused-vars */
import logo_img from "../../resources/imgs/logo's-img.webp";
import xIcon from "../../resources/svg/Twitter X.svg";
import instagramIcon from "../../resources/svg/instagram-svgrepo-com.svg";
import telegramIcon from "../../resources/svg/telegram-alt-svgrepo-com.svg";
import youtubeIcon from "../../resources/svg/youtube-168-svgrepo-com.svg";
import tiktokIcon from "../../resources/svg/tiktok-svgrepo-com.svg";
import { Icons } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-green-dark ">
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
              X-BOOST
            </span>
          </a>
        </h1>
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-white-light">
                Уникальный контент для вашего успешного продвижения в соцсетях!
              </p>
              <p className="mt-4 text-sm text-white-light">
                Создаем привлекательные видео ролики в собственном стиле для
                всех сфер и бизнесов. Охватите аудиторию на Instagram, Youtube и
                TikTok с нашими креативными решениями
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-emerald-50">
              Контакты
            </p>
            <div className="flex">
              <p className="mr-1 text-white-light">Телефон:</p>
              <a
                href="tel:(+380)97-466-5809"
                aria-label="(+380)97-466-5809"
                className="transition-colors duration-300 text-gray-400 hover:text-white-light"
              >
                (+380) 97-466-5809
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-white-light ">Електроная Почта:</p>
              <a
                href="mailto:xboosthub@gmail.com"
                aria-label=" xboosthub@gmail.com"
                className="transition-colors duration-300 text-gray-400 hover:text-white-light"
              >
                xboosthub@gmail.com
              </a>
            </div>
          </div>
          {/* <div>
            <span className="text-base font-bold tracking-wide text-emerald-50 ">
              Мы в Соц.Сетях
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
          <p className="text-sm text-gray-400">
            © Copyright 2023. All rights reserved.
          </p>
          {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white-light"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white-light"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white-light"
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
