/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Switcher from "./Switcher";
import { Prices } from "./Prices";
import { PriceHeader } from "./PriceHeader";

export function PriceComponent() {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleChange = (isChecked) => {
    setIsMonthly(isChecked);
  };

  return (
    <section id="price" className="container px-4 mx-auto">
      <div className="py-12">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row lg:pl-8 justify-between items-center">
              <div>
                <h2 className="text-center pb-8 text-5xl lg:text-6xl text-gray-900 font-bold tracking-tighter">
                  Цена
                </h2>
              </div>
              <div className="flex w-full sm:w-3/4 lg:justify-end lg:w-2/4  xl:w-1/3">
                <Switcher onChange={handleChange} />
              </div>
            </div>
            <PriceHeader isMonthly={isMonthly} />
          </div>
        </div>
        <div className="flex flex-nowrap xl:justify-center gap-8 pb-8 overflow-x-scroll lg:overflow-x-auto">
          <Prices
            isMonthly={isMonthly}
            discount={30}
            price={520}
            plantLvl={"Базовый План"}
            array={["15 видео", "1 актер", "Базовое отслеживание метрик"]}
          />
          <Prices
            isMonthly={isMonthly}
            discount={20}
            price={980}
            best={true}
            plantLvl={"Продвинутый план"}
            // scale={"scale-105"}
            array={["30 видео", "2 актерa", "Продвинутое отслеживание метрик"]}
          />
          <Prices
            isMonthly={isMonthly}
            discount={10}
            price={1560}
            plantLvl={"Премиум план"}
            array={["45 видео", "до 4 актеров", "Глубокое отслеживание метрик"]}
          />
          <Prices
            isMonthly={true}
            hidden={true}
            price={"от 35"}
            plantLvl={"Маштабируемый план"}
            array={["До 50 видео в неделю"]}
          />
        </div>
      </div>
    </section>
  );
}
