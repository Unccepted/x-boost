import { useContext } from "react";
import mainVideo from "../../resources/video/main-video.mp4";
import mainVideoWebM from "../../resources/video/main-video.webm";
import { CalendyButton } from "../Resusable/CalendyButton";
import { ContextApp } from "../ContextAPI";

function BookCall() {
  const { showModal, setShowModal } = useContext(ContextApp);
  return (
    <section className="bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mx-auto lg:ml-0 lg:col-span-7 text-center lg:text-left">
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">
            Все еще сомниваетесь? Узнайте больше о продвижении контента в
            Соц.Сетях
          </h1>

          <p className="max-w-2xl mb-4 font-light   md:text-lg lg:text-lg text-gray-400">
            Закажите небольшой 15-минутный звонок, и мы с удовольствием обсудим
            все аспекты нашего сотрудничества.
          </p>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-lg text-gray-400 ">
            Наши опытные специалисты будут рады поделиться более подробной
            информацией о наших услугах и рассказать, как мы сможем помочь
            вашему бренду добиться выдающихся результатов в социальных медиа.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 w-full  mx-auto lg:ml-0">
            <CalendyButton
              className=" inline-flex w-full  lg:w-1/2 items-center justify-center py-5 px-3 text-base font-medium text-center    rounded-lg    text-green-50 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500"
              buttonText="Запланировать звонок"
            />
            <button
              className="lg:w-1/2 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border  rounded-lg  focus:ring-4  text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
              onClick={() => setShowModal(!showModal)}
            >
              Подписаться на рассылку
            </button>
          </div>
        </div>
        <div className="w-full hidden lg:flex  lg:col-span-5  justify-center">
          <div className="h-full  rounded-xl  w-72  shadow-md  shadow-slate-700">
            <video
              className="rounded-xl w-72 h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={mainVideo} type="video/mp4" />
              <source src={mainVideoWebM} type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCall;
