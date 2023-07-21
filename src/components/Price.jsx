/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export function Price() {
  return (
    <div class="container px-4 mx-auto">
      <span
        class="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-3xl"
        data-config-id="auto-txt-1-1"
      >
        Pricing
      </span>
      <h2
        class="mb-4 text-3xl md:text-5xl text-gray-900 font-bold tracking-tighter"
        data-config-id="auto-txt-2-1"
      >
        Flexible pricing plan for your startup
      </h2>
      <p
        class="mb-12 text-lg md:text-xl text-gray-500 font-medium"
        data-config-id="auto-txt-3-1"
      >
        Pricing that scales with your business immediately.
      </p>
      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="flex flex-col items-center pt-0 px-8 pb-8 bg-gray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
            <div className="pb-2 pt-2 mb-2 border w-full rounded-es-lg rounded-ee-lg text-center text-green-400 border-green-400 shadow-sm bg-green-50">
              100$ discount
            </div>

            <h3
              class="mb-4 text-lg md:text-xl text-green-500 font-medium"
              data-config-id="auto-txt-5-1"
            >
              Basic Plan
            </h3>
            <div class="mb-4">
              <span
                class="relative -top-6 right-1 text-2xl text-gray-900 font-medium"
                data-config-id="auto-txt-6-1"
              >
                $
              </span>
              {/*//! Сделать динамическую смену сумы услыги и поля месяц\год  */}
              <span
                class="text-5xl text-gray-900 font-medium"
                data-config-id="auto-txt-7-1"
              >
                440
              </span>

              <span
                class="text-3xl text-gray-900 font-medium"
                data-config-id="auto-txt-8-1"
              >
                /mo
              </span>
            </div>
            <p
              class="mb-7 text-lg md:text-xl text-gray-400 font-medium"
              data-config-id="auto-txt-9-1"
            >
              Billed annually
            </p>
            <ul class="self-start mb-8">
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                <span data-config-id="auto-txt-10-1">
                  Complete documentation
                </span>
              </li>
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                <span data-config-id="auto-txt-11-1">
                  Working materials in Figma
                </span>
              </li>
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                <span data-config-id="auto-txt-12-1">100GB cloud storage</span>
              </li>
              <li class="flex items-center text-gray-500 font-medium">
                <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                <span data-config-id="auto-txt-13-1">500 team members</span>
              </li>
            </ul>
            <a
              class="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#"
              data-config-id="auto-txt-14-1"
            >
              Request a Demo
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="flex flex-col items-center pt-10 px-8 pb-8 bg-gray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
            <h3
              class="mb-4 text-lg md:text-xl text-green-500 font-medium"
              data-config-id="auto-txt-16-1"
            >
              Freelancer Plan
            </h3>
            <div class="mb-4">
              <span
                class="relative -top-6 right-1 text-2xl text-gray-900 font-medium"
                data-config-id="auto-txt-17-1"
              >
                $
              </span>
              <span
                class="text-5xl text-gray-900 font-medium"
                data-config-id="auto-txt-18-1"
              >
                820
              </span>
              <span
                class="text-3xl text-gray-900 font-medium"
                data-config-id="auto-txt-19-1"
              >
                /mo
              </span>
            </div>
            <p
              class="mb-7 text-lg md:text-xl text-gray-400 font-medium"
              data-config-id="auto-txt-20-1"
            >
              Billed annually
            </p>
            <ul class="self-start mb-8">
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <img
                  class="mr-3"
                  src="flex-ui-assets/elements/pricing/checkbox-green.svg"
                  data-config-id="auto-img-5-1"
                />
                <span data-config-id="auto-txt-21-1">
                  Complete documentation
                </span>
              </li>
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <img
                  class="mr-3"
                  src="flex-ui-assets/elements/pricing/checkbox-green.svg"
                  data-config-id="auto-img-6-1"
                />
                <span data-config-id="auto-txt-22-1">
                  Working materials in Figma
                </span>
              </li>
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <img
                  class="mr-3"
                  src="flex-ui-assets/elements/pricing/checkbox-green.svg"
                  data-config-id="auto-img-7-1"
                />
                <span data-config-id="auto-txt-23-1">100GB cloud storage</span>
              </li>
              <li class="flex items-center text-gray-500 font-medium">
                <img
                  class="mr-3"
                  src="flex-ui-assets/elements/pricing/checkbox-green.svg"
                  data-config-id="auto-img-8-1"
                />
                <span data-config-id="auto-txt-24-1">500 team members</span>
              </li>
            </ul>
            <a
              class="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#"
              data-config-id="auto-txt-25-1"
            >
              Request a Demo
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="flex flex-col items-center pt-10 px-8 pb-8 bg-gray-50 rounded-md shadow-md hover:scale-105 transition duration-500">
            <h3
              class="mb-4 text-lg md:text-xl text-green-500 font-medium"
              data-config-id="auto-txt-27-1"
            >
              Enterprise Plan
            </h3>
            <div class="mb-4">
              <span
                class="relative -top-6 right-1 text-2xl text-gray-900 font-medium"
                data-config-id="auto-txt-28-1"
              >
                $
              </span>
              <span
                class="text-5xl text-gray-900 font-medium"
                data-config-id="auto-txt-29-1"
              >
                1550
              </span>
              <span
                class="text-3xl text-gray-900 font-medium"
                data-config-id="auto-txt-30-1"
              >
                /year
              </span>
            </div>
            <p
              class="mb-7 text-lg md:text-xl text-gray-400 font-medium"
              data-config-id="auto-txt-31-1"
            >
              Billed annually
            </p>
            <ul class="self-start mb-8">
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <img
                  class="mr-3"
                  src="flex-ui-assets/elements/pricing/checkbox-green.svg"
                  data-config-id="auto-img-9-1"
                />
                <span data-config-id="auto-txt-32-1">
                  Complete documentation
                </span>
              </li>
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <img
                  class="mr-3"
                  src="flex-ui-assets/elements/pricing/checkbox-green.svg"
                  data-config-id="auto-img-10-1"
                />
                <span data-config-id="auto-txt-33-1">
                  Working materials in Figma
                </span>
              </li>
              <li class="flex items-center mb-3 text-gray-500 font-medium">
                <img
                  class="mr-3"
                  src="flex-ui-assets/elements/pricing/checkbox-green.svg"
                  data-config-id="auto-img-11-1"
                />
                <span data-config-id="auto-txt-34-1">100GB cloud storage</span>
              </li>
              <li class="flex items-center text-gray-500 font-medium">
                <img
                  class="mr-3"
                  src="flex-ui-assets/elements/pricing/checkbox-green.svg"
                  data-config-id="auto-img-12-1"
                />
                <span data-config-id="auto-txt-35-1">500 team members</span>
              </li>
            </ul>
            <a
              class="inline-block py-3 px-7 w-full text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
              href="#"
              data-config-id="auto-txt-36-1"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
