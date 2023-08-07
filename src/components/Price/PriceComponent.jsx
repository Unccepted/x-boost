/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Switcher from "./Switcher";
import lockIcon from "../../svg/lock-svgrepo-com.svg";
import { Prices } from "./Prices";
import { PriceHeader } from "./PriceHeader";

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
                <h2 class="pl-8 text-3xl md:text-5xl text-gray-900 font-bold tracking-tighter">
                  Цена
                </h2>
              </div>
              <div className="flex justify-end self-end  mr-0  w-1/3 ">
                <Switcher onChange={handleChange} />
              </div>
            </div>
            <PriceHeader isMonthly={isMonthly} />
          </div>
        </div>
        <div class="flex flex-wrap justify-center -mx-4">
          <Prices
            isMonthly={isMonthly}
            discount={30}
            price={420}
            plantLvl={"Базовый План"}
            array={["15 видео", "1 актер", "Базовое отслеживание метрик"]}
          />
          <Prices
            isMonthly={isMonthly}
            discount={20}
            price={980}
            plantLvl={"Продвинутый план"}
            scale={"scale-105"}
            array={["30 видео", "2 актерa", "Продвинутое отслеживание метрик"]}
          />
          <Prices
            isMonthly={isMonthly}
            discount={10}
            price={1440}
            plantLvl={"Премиум план"}
            array={["45 видео", "до 4 актеров", "Глубокое отслеживание метрик"]}
          />
          <Prices
            isMonthly={true}
            hidden={true}
            price={"от 35"}
            plantLvl={"Маштабируемый план"}
            array={["До 50 видео в ниделю"]}
          />

          <div class="w-full md:w-1/2 lg:w-1/4 p-4">
            <div class="h-full flex flex-col items-center pt-8 px-8 pb-8 bg-gray-50 rounded-md shadow-md  transition duration-500">
              <h3 class="my-4  text-lg md:text-xl text-green-500 font-medium">
                Маштабируемый план
              </h3>
              <div class="mb-4">
                <span class="relative -top-6 right-1 text-2xl text-gray-900 font-medium">
                  $
                </span>
                {/*//! Сделать динамическую смену сумы услыги и поля месяц\год  */}
                <span class="text-5xl text-gray-900 font-medium">от 35</span>

                <span class="text-3xl text-gray-900 font-medium">/mo</span>
              </div>
              {/* <p
                class="mb-7 text-lg md:text-xl text-gray-400 font-medium"
                
              >
                Billed annually
              </p> */}
              <span>До 50 видео в ниделю</span>

              <a
                class="inline-block py-3 px-7 w-full border border-green-500 text-green-500 font-medium text-center bg-white hover:bg-white-fade focus:ring-2 focus:ring-white-fade focus:ring-opacity-50 rounded-md shadow-sm"
                href="#"
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
