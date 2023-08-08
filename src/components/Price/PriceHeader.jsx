import React from "react";
import plustIcon from "../../imgs/plus-svgrepo-com.png";
import lockIcon from "../../svg/lock-svgrepo-com.svg";

export function PriceHeader(props) {
  return (
    <div className="w-full p-4 lg:p-8 flex flex-col md:flex-row shadow-md rounded-2xl justify-between my-4 bg-gray-100">
      <div className="w-full lg:w-4/12">
        <h3 class="mb-2 text-2xl text-gray-900 font-bold">
          Во все тарифы уже включены:
        </h3>
        {props.isMonthly ? (
          <p className="text-lg  font-medium text-green-500 sm:text-center md:text-left">
            Всё от плана на месяц, плюс:
          </p>
        ) : (
          <p className="text-lg text-gray-400 font-medium flex sm:justify-center md:justify-start">
            <img src={lockIcon} alt="lock icon" className="w-6 mx-1 lg:mr-2" />4
            выгоды от 3-месячного заказа
          </p>
        )}
      </div>
      <div className="text-gray-900 w-full lg:w-8/12 text-lg font-medium ">
        {props.isMonthly ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 ">
            <li className="flex items-center">
              <span className="mr-2">
                <img src={plustIcon} alt="plus icon" className="w-8 " />
              </span>
              Персональный менеджер
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <img src={plustIcon} alt="plus icon" className="w-8 " />
              </span>
              Мозговой шторм сессия
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <img src={plustIcon} alt="plus icon" className="w-8 " />
              </span>
              30 дней паузы
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <img src={plustIcon} alt="plus icon" className="w-8 " />
              </span>
              Сохранения цены
            </li>
          </ul>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
            <li className="flex items-center">
              <span className="mr-2 ">
                <img src={plustIcon} alt="plus icon" className="w-8 " />
              </span>
              Анализ конкурентов
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <img src={plustIcon} alt="plus icon" className="w-8 " />
              </span>
              Анализ ЦА
            </li>
            <li className="flex items-center">
              <span className="mr-2 ">
                <img src={plustIcon} alt="plus icon" className="w-8 " />
              </span>
              Сьемка
            </li>
            <li className="flex items-center">
              <span className="mr-2">
                <img src={plustIcon} alt="plus icon" className="w-8 " />
              </span>
              Монтаж
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
