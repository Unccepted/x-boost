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

  console.log(Math.ceil(216 / 10) * 10);
  return (
    <section id="price" className="container px-4 mx-auto">
      <div className="py-12">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row  justify-between items-center">
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
        <div className="flex flex-nowrap pt-4 xl:justify-between gap-8 pb-8 overflow-x-scroll xl:overflow-x-auto">
          <Prices
            isMonthly={isMonthly}
            discount={10}
            plantLvl={"Базовый План"}
            price={180}
            discountPrice={160}
            array={["4 концепта", "2 актера", "8 готовых видео"]}
          />
          <Prices
            isMonthly={isMonthly}
            discount={10}
            price={310}
            discountPrice={290}
            best={true}
            plantLvl={"Продвинутый план"}
            // scale={"scale-105"}
            array={["8 концептов", "4 актера", "16 готовых видео"]}
          />
          <Prices
            isMonthly={isMonthly}
            discount={10}
            price={490}
            discountPrice={450}
            plantLvl={"Премиум план"}
            array={["16 концепов", "8 актеров", "32 готовых видео"]}
          />
          <Prices
            isMonthly={false}
            hidden={true}
            price={"от 15"}
            plantLvl={"Маштабируемый план"}
            array={["Если вы тестируете болеше 50 креативов в неделю"]}
          />
        </div>
      </div>
    </section>
  );
}
