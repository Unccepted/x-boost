import React from "react";

export function Cases(props) {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col justify-center lg:grid lg:grid-rows-none lg:grid-cols-2 items-center pb-12">
        {/* Смена порядка текста */}
        <div
          className={`w-full flex lg:mt-8 justify-center lg:justify-end text-center lg:text-left ${
            props.reverse
              ? "lg:order-2 flex-row-reverse lg:text-right xl:pl-20 "
              : " xl:pr-20 "
          }`}
        >
          {/* <div
            className={` ${!props.reverse ? "mr-8" : "ml-8"} flex items-center`}
          ></div> */}

          {/* Округление с сторон */}
          <div
            className={`grid grid-rows-2 items-center gap-4 text-color px-4 p-4 lg:rounded-t-3xl lg:shadow  ${
              props.reverse ? "lg:rounded-s-3xl " : "lg:rounded-e-3xl "
            }`}
          >
            <h1 className="text-4xl text-gray-900 md:leading-snug tracking-tighter font-black">
              {props.niche}
            </h1>

            <h3 className="text-lg lg:text-xl font-semibold  text-green-500">
              {props.metric}
            </h3>
          </div>
        </div>
        {/* Смена порядка видео */}
        <div
          className={`w-full h-full relative flex items-end justify-center ${
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
          <div className="absolute z-10 bg-white border border-gray-200 rounded-xl shadow p-6 lg:w-4/6 lg:-mb-20">
            <div className="flex items-center justify-between w-full sm:w-full">
              <div className="flex items-center">
                <div className="p-4 bg-white border border-green-500 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={9} y1={15} x2={15} y2={9} />
                    <circle cx="9.5" cy="9.5" r=".5" />
                    <circle cx="14.5" cy="14.5" r=".5" />
                    <path d="M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7a2.2 2.2 0 0 0 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1a2.2 2.2 0 0 0 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55 v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55 v-1" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="mb-1 leading-5 text-gray-800 font-bold text-2xl">
                    {props.number}
                  </h3>
                  <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                    {props.salesType}
                  </p>
                </div>
              </div>
              <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
