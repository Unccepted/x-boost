import { useContext } from "react";
import { CardHIW } from "./CardHIW";
import { ContextApp } from "../ContextAPI";

export function HowItWorks() {
  const { t } = useContext(ContextApp);
  const cards = t("howItWork.cards", { returnObjects: true });
  return (
    <section id="how-its-work" className="bg-gray-100 ">
      <div className="py-24 container px-4 mx-auto">
        <div className="text-center mb-12 ">
          <h1 className="mb-8 text-6xl text-gray-900 font-bold tracking-tighter">
            {t("howItWork.header")}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium">
            {t("howItWork.text")}
          </p>
        </div>

        <div className="grid grid-rows-1 lg:grid-cols-4 gap-y-8 ">
          {Object.values(cards).map((item, index) => (
            <CardHIW
              count={item.count}
              header={item.header}
              time={item.time}
              text={item.text}
              arrow={item.arrow}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
