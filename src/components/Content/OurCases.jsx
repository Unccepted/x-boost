import React from "react";
function OurCases() {
  return (
    <section id="our-cases">
      <div className="md:mx-auto md:container px-4 mb-16">
        <div className="pt-10 md:pt-40">
          <div className="pb-4">
            <h2 class="mb-4 text-6xl text-gray-900 font-bold tracking-tighter">
              Наши кейсы
            </h2>
            {/* <p
              class="text-lg md:text-xl text-gray-500 font-medium"
              data-config-id="auto-txt-3-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center pb-12 justify-center">
              <div className="md:w-1/2 lg:w-3/6 w-full xl:pr-20 md:pr-6 flex justify-end">
                <div className=" mr-8 flex items-center">
                  <div className="w-32 h-32 border  rounded-xl shadow-md"></div>
                </div>
                <div className="py-2 text-color">
                  <h1 className="text-4xl text-gray-900 md:leading-snug tracking-tighter font-black">
                    Компания A
                  </h1>
                  <h2 className="text-lg text-gray-600 lg:leading-7 md:leading-10 py-4 md:py-8">
                    Текст компании А.
                  </h2>
                  <div className="flex items-center pb-4 md:pb-0">
                    <h3 className=" text-lg lg:text-2xl font-semibold  text-green-500">
                      Метрика
                    </h3>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-3/6  w-full relative h-96 flex items-end justify-center ">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md shadow-sm"
                  src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png"
                  alt=""
                />
                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div className="flex items-center justify-between w-full sm:w-full mb-8">
                    <div className="flex items-center">
                      <div className="p-4 bg-yellow-200 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-discount"
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
                          2,330
                        </h3>
                        <p className="text-gray-600 text-sm tracking-normal font-normal leading-5">
                          Avg Sales
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
                          7.2%
                        </p>
                      </div>
                      <p className="font-normal text-xs text-right leading-4 text-green-400 tracking-normal">
                        Increase
                      </p>
                    </div>
                  </div>
                  <div className="relative mb-3">
                    <hr className="h-1 rounded-sm bg-gray-200" />
                    <hr className="absolute top-0 h-1 w-7/12 rounded-sm bg-indigo-700" />
                  </div>
                  <h4 className="text-base text-gray-600 font-normal tracking-normal leading-5">
                    Yearly Goal
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap flex-row-reverse items-center pb-12 justify-center">
            <div className="md:w-1/2 lg:w-3/6 w-full xl:pl-20 md:pl-6 flex flex-row-reverse justify-end">
              <div className=" ml-8 flex items-center">
                <div className="w-32 h-32 border  rounded-xl shadow-md"></div>
              </div>
              <div className="py-2 text-color">
                <h1 className="text-4xl text-gray-900 md:leading-snug tracking-tighter font-black">
                  Компания A
                </h1>
                <h2 className="text-lg text-gray-600 lg:leading-7 md:leading-10 py-4 md:py-8">
                  Текст компании А.
                </h2>
                <div className="flex items-center pb-4 md:pb-0">
                  <h3 className=" text-lg lg:text-2xl font-semibold  text-green-500">
                    Метрика
                  </h3>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-3/6 w-full relative h-96 flex items-end justify-center">
              <img
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="https://cdn.tuk.dev/assets/templates/prodify/invoicing-system.png"
                alt=""
              />
              <div className="relative z-10 p-4 bg-white shadow rounded mx-auto w-9/12 -mb-20">
                <h4 className="text-gray-800 font-normal text-md leading-4 tracking-normal mb-2">
                  Invoice # 35RD87
                </h4>
                <p className="text-gray-600 text-xs leading-3 font-normal">
                  Assigned to: Josh Rollins
                </p>
                <div className="mt-4 flex items-center">
                  <span className="text-gray-600">
                    <svg
                      className="feather feather-user"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </span>
                  <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                    Specter Consultancy
                  </p>
                </div>
                <div className="mt-3 flex items-center">
                  <span className="text-gray-600">
                    <svg
                      className="feather feather-dollar-sign"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={12} y1={1} x2={12} y2={23} />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </span>
                  <p className="ml-1 text-sm text-gray-800 leading-3 tracking-normal font-normal">
                    2,354 USD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCases;