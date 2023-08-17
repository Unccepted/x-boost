import caseOneVideo from "../../video/Case-1.mp4";
import caseTwoVideo from "../../video/Case-2.mp4";
import caseThreeVideo from "../../video/Case-3.mp4";

import tatuImg from "../../imgs/tatuImg.png";
// import waterDImg from "../../imgs/waterD.jpg";
import appImg from "../../imgs/dating.png";

import clientsIcon from "../../svg/clients-icon.svg";
import deliveryIcon from "../../svg/delivery-icon.svg";
import appIcon from "../../svg/appIcon.svg";

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
            niche={"Тату-салон"}
            text={
              "Уютное место для нанесения оригинальных татуировок опытными мастерами с индивидуальным подходом."
            }
            metric="Увеличение CTR"
            src={caseOneVideo}
            number={110}
            salesType={"Клиентов/ мес"}
            procent={"110%%"}
            caseIcon={tatuImg}
            icon={clientsIcon}
            iconAlt={"Иконка групы клиентов"}
            alt="Черная иконка тату-салона"
          />
          <Cases
            reverse={true}
            niche={"Декоративные Чехлы для Кулера"}
            text={
              "Изготовление стильных и функциональных подставок любой формы и размера под индивидуальный заказ."
            }
            metric="Повышение рентабельности"
            src={caseTwoVideo}
            number={36}
            salesType={"Заказы/мес"}
            procent={"40%%"}
            // caseIcon={null}
            icon={deliveryIcon}
            iconAlt={"Иконка коробок"}
          />
          <Cases
            niche={"Приложение для Знакомств и Отношений"}
            text={
              "Удобный инструмент для поиска партнера и развития отношений в цифровую эпоху."
            }
            metric="Снижение CPA"
            src={caseThreeVideo}
            number={6750}
            salesType={"Ежедневный Онлайн"}
            procent={"65%"}
            caseIcon={appImg}
            icon={appIcon}
            iconAlt={"Иконка клиентов онлайн"}
            alt="Иконка приложение для Знакомств"
          />
        </div>
      </div>
    </section>
  );
}

export default OurCases;
