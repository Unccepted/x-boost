import { useContext } from "react";
import { ContextApp } from "../ContextAPI";

import { NumberComponent } from "./NumberComponent";

export function SocialProof() {
  const { t } = useContext(ContextApp);
  const statistics = t("socialProof.statistics", { returnObjects: true });
  return (
    <section id="why-x-boost" className="bg-gray-900">
      <div className="container px-4 mx-auto py-16 lg:px-6">
        <div className=" text-white text-center lg:text-left text-3xl min-[420px]:text-4xl uppercase font-bold mb-16">
          {t("socialProof.header")}
        </div>
        <div className="grid gap-10  grid-cols-1 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 text-white mb-12">
          {Object.values(statistics).map((item, index) => (
            <NumberComponent
              key={index}
              number={item.number}
              type={item.text}
            />
          ))}
        </div>
        <div className="text-gray-400 text-lg">
          <p className="text-center lg:text-left">{t("socialProof.text")}</p>
        </div>
      </div>
    </section>
  );
}
