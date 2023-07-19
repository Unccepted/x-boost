/* eslint-disable jsx-a11y/anchor-is-valid */
import header from "../imgs/header.jpg";

export function Home() {
  return (
    <section>
      <div class="py-20 md:py-28">
        <div class="flex flex-wrap xl:items-center ">
          <div className="container px-4 mx-auto flex">
            <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <h1
                class="mb-6 text-2xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight"
                data-config-id="auto-txt-14-1"
              >
                Создаем продающий контент, для продвижения вашего бизнеса.
              </h1>
              <p
                class="mb-8 text-lg md:text-xl text-gray-500 font-medium"
                data-config-id="auto-txt-15-1"
              >
                We’re different. Flex is the only saas business platform that
                lets you run your business on one platform, seamlessly across
                all digital channels.
              </p>
              <div class="flex flex-wrap">
                <div class="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                    href="#"
                    data-config-id="auto-txt-16-1"
                  >
                    Get Started
                  </a>
                </div>
                <div class="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-600 font-medium text-center bg-white hover:bg-white-fade focus:ring-2 focus:bg-white-fade focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                    href="#"
                    data-config-id="auto-txt-16-1"
                  >
                    Book a call
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-4">
              <div class="relative mx-auto md:mr-0 max-w-max">
                <img
                  class="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
                  src="flex-ui-assets/elements/circle3-yellow.svg"
                  alt=""
                  data-config-id="auto-img-5-1"
                />
                <img
                  class="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
                  src="flex-ui-assets/elements/dots3-blue.svg"
                  alt=""
                  data-config-id="auto-img-6-1"
                />
                <img
                  class="relative rounded-7xl"
                  src={header}
                  alt=""
                  data-config-id="auto-img-3-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
