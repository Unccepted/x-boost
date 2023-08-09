import React from "react";
import plustIcon from "../../imgs/plus-svgrepo-com.png";
import lockIcon from "../../svg/lock-svgrepo-com.svg";

export function PriceHeader(props) {
  return (
    <div className="w-full p-4 my-4  flex flex-col gap-2 lg:flex-row shadow-md rounded-2xl justify-between  bg-gray-100 lg:p-8">
      <div className="w-full lg:w-4/12">
        <h3 class="text-xl md:text-2xl text-gray-900 font-bold">
          Во все тарифы уже включены:
        </h3>
        {props.isMonthly && (
          <p className="text-md xl:text-lg mt-2 font-medium text-green-500  md:text-left">
            Всё от плана на месяц, плюс:
          </p>
        )}
        {!props.isMonthly && (
          <p className="hidden text-md  xl:text-lg mt-2 text-gray-400 font-medium xl:flex sm:justify-start">
            <img src={lockIcon} alt="lock icon" className="w-6" />4 выгоды от
            3-месячного заказа
          </p>
        )}
      </div>
      <div className="text-gray-900 w-full lg:w-8/12 text-md lg:text-lg font-medium ">
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 ">
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
            <li className="flex items-center sm:col-span-2 xl:hidden">
              {!props.isMonthly && (
                <p className="text-md text-gray-400 font-medium flex sm:justify-start">
                  <img
                    src={lockIcon}
                    alt="lock icon"
                    className="w-6 ml-1 mr-3 "
                  />
                  4 выгоды от 3-месячного заказа
                </p>
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
