/* eslint-disable jsx-a11y/anchor-is-valid */
import youtubeIcon from "../imgs/youtube-icon-svgrepo-com.png";
import tiktokIcon from "../svg/tiktok-logo-logo-svgrepo-com.svg";
import instagramIcon from "../imgs/instagram-1-svgrepo-com.png";
import testVideo from "../video/test-video.mp4";

export function Home() {
  return (
    <section className="container px-4 mx-auto">
      <div className="py-20 md:py-28">
        <div className="flex flex-wrap xl:items-center ">
          <div className="flex max-md:flex-col-reverse justify-center">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 ">
              <h1
                className="mb-6 text-2xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-gray-800 "
                data-config-id="auto-txt-14-1"
              >
                Создаем продающий контент, для продвижения вашего бизнеса.
              </h1>
              <p
                className="mb-8 text-lg md:text-xl text-gray-500 font-medium"
                data-config-id="auto-txt-15-1"
              >
                Мы специализируемся на создании продающего контента, обращаясь
                непосредственно к целевой аудитории. С опытом работы с
                компаниями, обслуживающими возрастную категорию 40+,
                разрабатываем индивидуальные решения, которые приносят
                результаты
              </p>
              <div className="flex flex-wrap">
                <div className="w-fu  ll md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                    href="#"
                    data-config-id="auto-txt-16-1"
                  >
                    Начать работу
                  </a>
                </div>
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a
                    className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-600 font-medium text-center bg-white hover:bg-white-fade focus:ring-2 focus:bg-white-fade focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                    href="#"
                    data-config-id="auto-txt-16-1"
                  >
                    Запланировать звонок
                  </a>
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 px-4 ">
              <div className="relative md:mr-0  flex justify-center">
                <div className="h-full  rounded-xl  w-72  shadow-md  shadow-slate-700 relative">
                  <img
                    className="absolute rounded-md p-1 z-10 -left-14 -top-12  sm:w-14 sm:-left-6 sm:-top-6 md:w-16 md:-left-8 md:-top-8 lg:w-24 "
                    src={youtubeIcon}
                    alt=""
                    data-config-id="auto-img-5-1"
                  />
                  <img
                    className="absolute rounded-md p-1 z-10 -right-7 -bottom-8  sm:w-14 md:w-16  lg:w-24 "
                    src={instagramIcon}
                    alt=""
                    data-config-id="auto-img-6-1"
                  />
                  <img
                    className="absolute rounded-md p-1 z-10 -left-12 bottom-4  sm:w-14 sm:-left-4 md:w-16  md:-left-10 lg:w-24 "
                    src={tiktokIcon}
                    alt=""
                    data-config-id="auto-img-6-1"
                  />
                  <video
                    src={testVideo}
                    className="rounded-xl w-72 h-full object-cover"
                    autoPlay="true"
                    loop
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
