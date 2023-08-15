import caseOneVideo from "../../video/Case-1.mp4";
import caseTwoVideo from "../../video/Case-2.mp4";
import caseThreeVideo from "../../video/Case-3.mp4";

import tatuImg from "../../imgs/tatuImg.jpg";
import waterDImg from "../../imgs/waterD.jpg";
import appImg from "../../imgs/dating.png";

import React from "react";
import { Cases } from "./Cases";

function OurCases() {
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
          <Cases
            niche={"Тату-искусство"}
            metric="Увеличение CTR"
            src={caseOneVideo}
            number={110}
            salesType={"человек в месяц"}
            procent={"110%%"}
            caseIcon={tatuImg}
            alt="tatu black icon"
          />
          <Cases
            reverse={true}
            niche={"Оборудование для воды"}
            metric="Повышение рентабельности"
            src={caseTwoVideo}
            number={36}
            salesType={"заказов в месяц"}
            procent={"40%%"}
            caseIcon={waterDImg}
            alt="color water despencer icon"
          />
          <Cases
            niche={"Знакомства и отношения"}
            metric="Снижение CPA"
            src={caseThreeVideo}
            number={6750}
            salesType={"ежедневная активная аудитория"}
            procent={"65%"}
            caseIcon={appImg}
            alt="dating ai app icon"
          />
        </div>
      </div>
    </section>
  );
}

export default OurCases;
