import { VideoHero } from "./VideoHero";
// import { HashLink as Link } from "react-router-hash-link";
import { CalendyButton } from "../Resusable/CalendyButton";
import { useContext } from "react";
import { ContextApp } from "../ContextAPI";

export function Home() {
  const { t } = useContext(ContextApp);
  return (
    <section id="home" className="container px-8 mx-auto">
      <div className="py-8 lg:py-16 xl:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center  justify-center">
          <div className=" lg:my-0 lg:w-1/2 grid grid-rows-3 gap-6 lg:gap-12">
            <h1 className="text-center mt-8  text-2xl leading-tight font-bold tracking-tight text-gray-900 lg:text-left lg:text-4xl xl:text-5xl uppercase">
              {t("home.header")}
            </h1>
            <p className="lg:flex items-center text-center tracking-tight leading-tight lg:text-left  text-xl md:text-xl xl:text-2xl text-gray-500 font-medium ">
              {t("home.text")}
            </p>
            <div className="grid grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-none">
              <div className="w-full">
                <CalendyButton
                  buttonText={t("home.bookACall")}
                  className="inline-block py-5 px-3 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
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
