/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import Switcher from "./Switcher";
import { Prices } from "./Prices";
import { PriceHeader } from "./PriceHeader";
import { ContextApp } from "../ContextAPI";

export function PriceComponent() {
  const [isMonthly, setIsMonthly] = useState(true);
  const { t } = useContext(ContextApp);
  const handleChange = (isChecked) => {
    setIsMonthly(isChecked);
  };

  return (
    <section id="price" className="container px-4 mx-auto">
      <div className="py-12">
        <div className="flex">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row  justify-between items-center">
              <div>
                <h2 className="text-center pb-8 text-5xl lg:text-6xl text-gray-900 font-bold tracking-tighter">
                  {t("prices.header")}
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
          {Object.values(t("prices.plans")).map((item, index) => {
            return (
              <Prices
                key={index}
                isMonthly={isMonthly}
                hidden={item.hidden}
                best={item.best}
                discount={item.discount}
                price={item.price}
                discountPrice={item.discountPrice}
                plantLvl={item.plantLvl}
                array={item.array}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
