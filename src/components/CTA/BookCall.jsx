import mainVideo from "../../video/main-video.mp4";

function BookCall() {
  return (
    <section class="bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto lg:col-span-7 text-center lg:text-left">
          <h1 class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">
            Все еще сомниваетесь? Узнайте больше о продвижении контента в
            Соц.Сетях
          </h1>

          <p class="max-w-2xl mb-4 font-light   md:text-lg lg:text-lg text-gray-400">
            Закажите небольшой 15-минутный звонок, и мы с удовольствием обсудим
            все аспекты нашего сотрудничества.
          </p>
          <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-lg text-gray-400 ">
            Наши опытные специалисты будут рады поделиться более подробной
            информацией о наших услугах и рассказать, как мы сможем помочь
            вашему бренду добиться выдающихся результатов в социальных медиа.
          </p>

          <div className="w-1/2">
            <a
              className="inline-flex w-full items-center justify-center py-5 px-3 text-base font-medium text-center    rounded-lg    text-green-50 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500"
              smooth
              to="#"
            >
              Запланировать звонок
            </a>
          </div>
        </div>
        <div className="w-full  lg:col-span-5 flex justify-center">
          <div className="h-full  rounded-xl  w-72  shadow-md  shadow-slate-700">
            <video
              src={mainVideo}
              className="rounded-xl w-72 h-full object-cover"
              autoPlay
              loop
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookCall;
