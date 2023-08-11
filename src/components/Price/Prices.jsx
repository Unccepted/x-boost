import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import lockIcon from "../../svg/lock-svgrepo-com.svg";
import { CalendyButton } from "../Resusable/CalendyButton";

export function Prices(props) {
  return (
    <div class="w-64 flex-none lg:flex lg:w-72">
      <div
        class={`h-full flex flex-col items-center ${
          props.hidden ? "pt-8" : "pt-0 "
        } px-8 pb-8 bg-white rounded-md shadow-md border-x-2 ${props.scale}  
        ${
          props.best
            ? "border-b border-green-500 shadow-md shadow-green-500 "
            : ""
        } `}
      >
        {!props.hidden ? (
          props.isMonthly ? (
            <div className="py-2 mb-2 border w-full rounded-es-lg rounded-ee-lg text-center text-white border-white-fade shadow-sm bg-green-400 cursor-default">
              {props.discount}% скидка
            </div>
          ) : (
            <div className="py-2 mb-2 border w-full rounded-es-lg rounded-ee-lg text-center text-gray-400 border-gray-400 shadow-sm bg-white flex justify-center cursor-default">
              <img src={lockIcon} alt="lock icon" className="w-6 mr-2" />
              <span>{props.discount}% скидка</span>
            </div>
          )
        ) : (
          ""
        )}
        <h3
          class={`${
            props.hidden ? "my-4" : "mb-4"
          } text-lg md:text-xl text-green-500 font-medium`}
        >
          {props.plantLvl}
        </h3>
        {props.isMonthly && !props.hidden ? (
          <div class="mb-1 lg:mb-4 flex gap-1">
            <span class="text-3xl lg:text-5xl text-gray-900 font-medium">
              {(props.price * (100 - props.discount)) / 100}
            </span>
            <span class="text-xl text-gray-900 font-medium">$</span>
            <span class="text-xl text-gray-900 font-medium">/мес.</span>
          </div>
        ) : (
          <div class="mb-1 lg:mb-4">
            <span class="text-3xl lg:text-5xl text-gray-900 font-medium">
              {props.price}
            </span>
            <span class="relative text-2xl text-gray-900 font-medium">$</span>
          </div>
        )}

        <ul class="self-start border-t w-full border-gray-200 ">
          {props.array.map((item) => (
            <li
              key={item}
              class="flex items-center mb-3 text-gray-500 font-medium mt-2 text-sm"
            >
              <CheckCircleRoundedIcon className="text-green-400 mr-3" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <CalendyButton
          className="inline-block py-3 px-7 mt-auto w-full border border-green-500 text-green-500 font-medium text-center bg-white hover:bg-white-fade focus:ring-2 focus:ring-white-fade focus:ring-opacity-50 rounded-md shadow-sm"
          buttonText="Начать работу"
        />
      </div>
    </div>
  );
}
