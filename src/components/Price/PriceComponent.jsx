/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Switcher from "./Switcher";
import lockIcon from "../../svg/lock-svgrepo-com.svg";
import plustIcon from "../../imgs/plus-svgrepo-com.png";
import { Prices } from "./Prices";

export function PriceComponent() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleChange = (isChecked) => {
    setIsMonthly(isChecked);
  };

  return (
    <section id="price" class="container px-4 mx-auto">
      <div className="py-24">
        <div className="flex">
          <div className="w-full">
            <div className="flex justify-between">
              <div>
                <h2
                  class="pl-8 text-3xl md:text-5xl text-gray-900 font-bold tracking-tighter"
                  data-config-id="auto-txt-2-1"
                >
                  Цена
                </h2>
              </div>
              <div className="flex justify-end self-end  mr-0  w-1/3 ">
                <Switcher onChange={handleChange} />
              </div>
            </div>
            <div className="w-full p-8 flex shadow-md rounded-2xl justify-between my-4 bg-gray-100">
              <div className="w-1/3">
                <h3
                  class="mb-2 text-2xl text-gray-900 font-bold"
                  data-config-id="auto-txt-3-1"
                >
                  Гибкий план для вас
                </h3>
                <p className="text-lg text-gray-400 font-medium">
                  Во все тарифы уже включены:
                </p>
              </div>
              <div className="text-gray-900 w-2/3 text-lg font-medium">
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="mr-2">
                      <img src={plustIcon} alt="plus icon" className="w-8 " />
                    </span>
                    Персональный менеджер
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">
                      <img src={plustIcon} alt="plus icon" className="w-8 " />
                    </span>
                    Мозговой шторм сессия
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">
                      <img src={plustIcon} alt="plus icon" className="w-8 " />
                    </span>
                    30 дней паузы
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">
                      <img src={plustIcon} alt="plus icon" className="w-8 " />
                    </span>
                    Сохранения цены
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center -mx-4">
          <Prices
            isMonthly={isMonthly}
            discount={"100$"}
            price={440}
            plantLvl={"Базовый План"}
            array={[
              "Анализ конкурентов",
              "Анализ ЦА",
              "15 видео",
              "1 актер",
              "Съемка",
              "Монтаж",
              "Отслеживание метрик",
            ]}
          />
          <Prices
            isMonthly={isMonthly}
            discount={"100$"}
            price={750}
            plantLvl={"Продвинутый план"}
            scale={"scale-105"}
            array={[
              "Анализ конкурентов",
              "Анализ ЦА",
              "30 видео",
              "2 актер",
              "Съемка",
              "Монтаж",
              "Отслеживание метрик",
            ]}
          />
          <Prices
            isMonthly={isMonthly}
            discount={"100$"}
            price={1440}
            plantLvl={"Премиум план"}
            array={[
              "Анализ конкурентов",
              "Исследование сегментов ЦА",
              "72 видео",
              "4 актер",
              "Съемка",
              "Монтаж, цветокоррекция, работа с шумами",
              "Отслеживание метрик",
            ]}
          />

          <div class="w-full md:w-1/2 lg:w-1/4 p-4">
            <div class="flex flex-col items-center pt-0 px-8 pb-8 bg-gray-50 rounded-md shadow-md  transition duration-500">
              {isMonthly ? (
                <div className="pb-2 pt-2 mb-2 border w-full rounded-es-lg rounded-ee-lg text-center text-white border-white shadow-sm bg-green-400 cursor-default">
                  100$ discount
                </div>
              ) : (
                <div className="pb-2 pt-2 mb-2 border w-full rounded-es-lg rounded-ee-lg text-center text-gray-400 border-gray-400 shadow-sm bg-white flex justify-center cursor-default">
                  <img src={lockIcon} alt="lock icon" className="w-6 " />
                  <span>100$ discount</span>
                </div>
              )}
              <h3
                class="mb-4 text-lg md:text-xl text-green-500 font-medium"
                data-config-id="auto-txt-5-1"
              >
                Особеный план
              </h3>
              <div class="mb-4">
                <span
                  class="relative -top-6 right-1 text-2xl text-gray-900 font-medium"
                  data-config-id="auto-txt-6-1"
                >
                  $
                </span>
                {/*//! Сделать динамическую смену сумы услыги и поля месяц\год  */}
                <span
                  class="text-5xl text-gray-900 font-medium"
                  data-config-id="auto-txt-7-1"
                >
                  150
                </span>

                <span
                  class="text-3xl text-gray-900 font-medium"
                  data-config-id="auto-txt-8-1"
                >
                  /mo
                </span>
              </div>
              <p
                class="mb-7 text-lg md:text-xl text-gray-400 font-medium"
                data-config-id="auto-txt-9-1"
              >
                Billed annually
              </p>
              <ul class="self-start mb-8">
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                  <span data-config-id="auto-txt-10-1">
                    Complete documentation
                  </span>
                </li>
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                  <span data-config-id="auto-txt-11-1">
                    Working materials in Figma
                  </span>
                </li>
                <li class="flex items-center mb-3 text-gray-500 font-medium">
                  <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                  <span data-config-id="auto-txt-12-1">
                    100GB cloud storage
                  </span>
                </li>
                <li class="flex items-center text-gray-500 font-medium">
                  <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                  <span data-config-id="auto-txt-13-1">500 team members</span>
                </li>
              </ul>
              <a
                class="inline-block py-3 px-7 w-full border border-green-500 text-green-500 font-medium text-center bg-white hover:bg-white-fade focus:ring-2 focus:ring-white-fade focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
                data-config-id="auto-txt-14-1"
              >
                Request a Demo
              </a>
            </div>
          </div>
          {/* <div
            className={`text-gray-400 text-center my-8 ${
              isMonthly ? "" : "text-transparent select-none"
            }`}
          >
            Подписка начинается от 3 месяцев
          </div> */}
        </div>
      </div>
    </section>
  );
}
