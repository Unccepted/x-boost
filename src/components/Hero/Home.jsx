import { VideoHero } from "./VideoHero";
import { HashLink as Link } from "react-router-hash-link";
import { CalendyButton } from "../Resusable/CalendyButton";
import exclamationMark from "../../imgs/white-exclamation-mark-svgrepo-com.png";

export function Home() {
  return (
    <section id="home" className="container px-8 mx-auto">
      <div className="py-8 lg:py-16 xl:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center  justify-center">
          <div className=" lg:my-0 lg:w-1/2 grid grid-rows-3 gap-6 lg:gap-12">
            <h1 className="text-center mt-8  text-2xl leading-tight font-bold tracking-tight text-gray-900 lg:text-left lg:text-4xl xl:text-5xl uppercase">
              Вертикальный контент для вашего бизнеса
              {/* Создание видеоконтента - это лучший инструмент для генерации
              лояльных покупателей для вашего бизнеса! */}
            </h1>
            <p className="lg:flex items-center text-center tracking-tight leading-tight lg:text-left  text-xl md:text-xl xl:text-2xl text-gray-500 font-medium ">
              {/* Мы специализируемся на создание контента, который путем публикаций
              в социальных сетях, принесет вам органические охваты и повысит
              доверие к вашему бизнесу! */}
              Мы достигаем поставленных результатов
              <img
                src={exclamationMark}
                alt="exclamation green mark"
                className="hidden lg:inline-block w-12 pb-6"
              />
            </p>
            <div className="grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-none">
              <div className="w-full">
                <Link
                  className="inline-block py-5 px-3 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                  smooth
                  to="#why-x-boost"
                >
                  Начать работу
                </Link>
              </div>
              <div className="w-full">
                <CalendyButton
                  buttonText="Запланировать звонок"
                  className={
                    "inline-block py-5 px-3 w-full text-base md:text-lg leading-4 text-green-600 font-medium text-center bg-white hover:bg-white-fade focus:ring-2 focus:bg-white-fade focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                  }
                />
              </div>
            </div>
          </div>
          <VideoHero />
        </div>
      </div>
    </section>
  );
}
