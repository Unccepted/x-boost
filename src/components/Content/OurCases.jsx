import React, { useContext } from "react";
import { Cases } from "./Cases";
import { ContextApp } from "../ContextAPI";

import caseOneVideo from "../../resources/video/Case-1.mp4";
import caseTwoVideo from "../../resources/video/Case-2.mp4";
import caseThreeVideo from "../../resources/video/Case-3.mp4";

import tatuImg from "../../resources/imgs/tatuImg.webp";
// import waterDImg from "../../imgs/waterD.jpg";
import appImg from "../../resources/imgs/dating.webp";

import clientsIcon from "../../resources/svg/clients-icon.svg";
import deliveryIcon from "../../resources/svg/delivery-icon.svg";
import appIcon from "../../resources/svg/appIcon.svg";

function OurCases() {
  const { t } = useContext(ContextApp);
  // const cases = t("ourCases.cases", { returnObjects: true });
  return (
    <section id="our-cases">
      <div className="mx-auto container px-4 mb-16 ">
        <div className="pt-10">
          <div className="pb-4 text-center xl:grid xl:grid-cols-2 w-4/6 mx-auto">
            <h2 className="mb-4 text-6xl text-gray-900 font-bold tracking-tighter">
              Наши кейсы
            </h2>
          </div>
        </div>
        <div>
          {/* {Object.values(cases).map((item, index) => {
            return (
              <Cases
                key={index}
                reverse={item.reverse}
                niche={item.niche}
                text={item.text}
                metric={item.metric}
                number={item.number}
                salesType={item.salesType}
                procent={item.procent}
                alt={item.alt}
                iconAlt={item.iconAlt}
                src={caseOneVideo}
                caseIcon={appImg}
                icon={item.icon}
              />
            );
          })} */}
          <Cases
            reverse={t("ourCases.cases.firstCase.reverse")}
            niche={t("ourCases.cases.firstCase.niche")}
            text={t("ourCases.cases.firstCase.text")}
            metric={t("ourCases.cases.firstCase.metric")}
            number={t("ourCases.cases.firstCase.number")}
            salesType={t("ourCases.cases.firstCase.salesType")}
            procent={t("ourCases.cases.firstCase.procent")}
            alt={t("ourCases.cases.firstCase.alt")}
            iconAlt={t("ourCases.cases.firstCase.iconAlt")}
            src={caseOneVideo}
            caseIcon={tatuImg}
            icon={clientsIcon}
          />
          <Cases
            reverse={t("ourCases.cases.secondCase.reverse")}
            niche={t("ourCases.cases.secondCase.niche")}
            text={t("ourCases.cases.secondCase.text")}
            metric={t("ourCases.cases.secondCase.metric")}
            number={t("ourCases.cases.secondCase.number")}
            salesType={t("ourCases.cases.secondCase.salesType")}
            procent={t("ourCases.cases.secondCase.procent")}
            alt={null}
            iconAlt={t("ourCases.cases.secondCase.iconAlt")}
            src={caseTwoVideo}
            caseIcon={null}
            icon={deliveryIcon}
          />
          <Cases
            reverse={t("ourCases.cases.thirdCase.reverse")}
            niche={t("ourCases.cases.thirdCase.niche")}
            text={t("ourCases.cases.thirdCase.text")}
            metric={t("ourCases.cases.thirdCase.metric")}
            number={t("ourCases.cases.thirdCase.number")}
            salesType={t("ourCases.cases.thirdCase.salesType")}
            procent={t("ourCases.cases.thirdCase.procent")}
            alt={t("ourCases.cases.thirdCase.alt")}
            iconAlt={t("ourCases.cases.thirdCase.iconAlt")}
            src={caseThreeVideo}
            caseIcon={appImg}
            icon={appIcon}
          />
        </div>
      </div>
    </section>
  );
}

export default OurCases;
