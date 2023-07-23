import testVideo from "../video/test-video.mp4";

function BookCall() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Все еще сомниваетесь? Узнайте больше о продвижении контента в
            Соц.Сетях
          </h1>
          {/* <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Если вы все еще сомневаетесь в эффективности продвижения контента в
            социальных сетях, давайте уладим все ваши вопросы и сомнения личным
            созвоном.
          </p> */}

          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Закажите небольшой 15-минутный звонок, и мы с удовольствием обсудим
            все аспекты нашего сотрудничества.
          </p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Наши опытные специалисты будут рады поделиться более подробной
            информацией о наших услугах и рассказать, как мы сможем помочь
            вашему бренду добиться выдающихся результатов в социальных медиа.
          </p>

          {/* <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Eсли же вам удобнее получать информацию по почте, подпишитесь на нашу
            рассылку. Таким образом, вы всегда будете в курсе последних
            тенденций и лучших практик продвижения в социальных сетях.
          </p> */}

          {/* <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Не упустите возможность улучшить свою стратегию продвижения с нашей
            помощью! Закажите созвон или подпишитесь на рассылку уже сегодня
          </p> */}

          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
          >
            Запланировать созвон
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Подписаться на рассылку
          </a>
        </div>
        <div class="w-full  lg:col-span-5 flex justify-center">
          <div className="h-full  rounded-xl  w-72  shadow-md  shadow-slate-700">
            <video
              src={testVideo}
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
