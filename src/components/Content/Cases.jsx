import React from "react";

export function Cases(props) {
  return (
    <div>
      <div className="flex flex-col justify-center md:grid md:grid-rows-none md:grid-cols-2 items-center">
        {/* Смена порядка текста / левая часть Кейса */}
        <div
          className={`w-80 lg:w-full   ${
            props.reverse &&
            "md:order-2 flex-row-reverse  md:text-right xl:pl-20"
          }`}
        >
          {/* Округление с сторон */}
          <div
            className={`grid grid-rows-2  items-center gap-1 lg:gap-4 text-color p-8 lg:rounded-t-3xl lg:shadow-md lg:border  ${
              props.reverse
                ? "lg:rounded-s-3xl lg:mr-auto"
                : "lg:rounded-e-3xl lg:ml-auto"
            }`}
          >
            <h1 className="text-2xl lg:text-4xl text-gray-900 md:leading-snug tracking-tighter font-black">
              {props.niche}
            </h1>
            <p className="text-lg text-gray-900 leading-tight tracking-tight lg:text-2xl mt-1 lg:mt-4">
              {props.text}
            </p>
            <div
              className={`flex items-center ${
                props.reverse && " flex-row-reverse"
              }`}
            >
              <h3 className="text-lg lg:text-xl font-semibold  text-green-500 uppercase">
                {props.metric}
              </h3>
              <div
                className={` 
                ${!props.reverse ? "lg:ml-auto " : "lg:mr-auto hidden lg:block"}
                "rounded-2xl w-28 lg:w-40 h-auto"
             `}
              >
                <img src={props.caseIcon} alt={props.alt} />
              </div>
            </div>
          </div>
        </div>
        {/* Смена порядка видео */}
        <div
          className={`w-full h-full relative flex flex-col items-center justify-center  ${
            props.reverse && "lg:order-1"
          }`}
        >
          <video
            src={props.src}
            className="rounded-xl  w-72"
            autoPlay
            loop
            muted
          />
          <div className="w-72 z-10 bg-white border border-gray-200 rounded-xl shadow p-6  ">
            {/* <div className="flex items-center justify-between w-full sm:w-full"> */}
            <div className="flex items-center">
              <div className="bg-white  rounded-md">
                <img src={props.icon} alt={props.iconAlt} className="h-12" />
              </div>
              <div className="ml-6 flex gap-2">
                <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                  {props.number}
                </h3>
                <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                  {props.salesType}
                </p>
              </div>
            </div>
            {/* <div>
                <div className="flex items-center pl-3 text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trending-up"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="14 7 21 7 21 14" />
                  </svg>
                  <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">
                    {props.procent}
                  </p>
                </div>
                <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                  Increase
                </p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
