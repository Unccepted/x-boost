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
