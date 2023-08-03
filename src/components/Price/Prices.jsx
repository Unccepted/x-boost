import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import lockIcon from "../../svg/lock-svgrepo-com.svg";

export function Prices(props) {
  return (
    <div class="w-full md:w-1/2 lg:w-1/4 p-4">
      <div
        class={`flex flex-col items-center pt-0 px-8 pb-8 bg-gray-50 rounded-md shadow-md ${props.scale} transition`}
      >
        {props.isMonthly ? (
          <div className="pb-2 pt-2 mb-2 border w-full rounded-es-lg rounded-ee-lg text-center text-white border-white-fade shadow-sm bg-green-400 cursor-default">
            {props.discount} скидка
          </div>
        ) : (
          <div className="pb-2 pt-2 mb-2 border w-full rounded-es-lg rounded-ee-lg text-center text-gray-400 border-gray-400 shadow-sm bg-white flex justify-center cursor-default">
            <img src={lockIcon} alt="lock icon" className="w-6 " />
            <span>{props.discount} скидка</span>
          </div>
        )}
        <h3 class="mb-4 text-lg md:text-xl text-green-500 font-medium">
          {props.plantLvl}
        </h3>
        <div class="mb-4">
          <span class="relative -top-6 right-1 text-2xl text-gray-900 font-medium">
            $
          </span>

          <span class="text-5xl text-gray-900 font-medium">{props.price}</span>

          <span class="text-3xl text-gray-900 font-medium">/mo</span>
        </div>
        <p class="mb-5 text-lg md:text-xl text-gray-400 font-medium "></p>
        <ul class="self-start mb-8 border-t border-gray-400">
          {props.array.map((item) => (
            <li
              key={item}
              class="flex items-center mb-3 text-gray-500 font-medium mt-2"
            >
              <CheckCircleRoundedIcon className="text-green-400 mr-3" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <a
          class="inline-block py-3 px-7 w-full border border-green-500 text-green-500 font-medium text-center bg-white hover:bg-white-fade focus:ring-2 focus:ring-white-fade focus:ring-opacity-50 rounded-md shadow-sm"
          href="#"
        >
          Начать работу
        </a>
      </div>
    </div>
  );
}
