function MoreLanguage() {
  return (
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32 text-center md:text-left">
        <div class="block rounded-lg bg-white  ">
          <div class="flex flex-wrap-reverse  items-center">
            <div class="w-full lg:w-5/12 xl:w-7/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="mb-6 pb-2 text-7xl font-bold text-gray-900">
                  Контент на 23+ языках
                </h2>
                <p class="mb-6 pb-2 text-neutral-500 ">
                  Откройте для своего бренда новые горизонты с нашим
                  многоязычным контентом. Наши творческие специалисты владеют
                  более чем 23 языками и создадут убедительный и аутентичный
                  контент, способный привлечь широкую аудиторию.
                </p>
                <div class="mb-6 flex flex-wrap">
                  <div class="mb-4 w-full md:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-neutral-900 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Русский
                    </p>
                  </div>
                  <div class="mb-4 w-full md:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-neutral-900 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Украинский
                    </p>
                  </div>
                  <div class="mb-4 w-full md:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-neutral-900 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Английский
                    </p>
                  </div>
                  {/* <div class="mb-4 w-full md:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-neutral-900 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Updates
                    </p>
                  </div>
                  <div class="mb-4 w-full md:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-neutral-900 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Reports
                    </p>
                  </div>
                  <div class="mb-4 w-full md:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-neutral-900 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Mobile
                    </p>
                  </div> */}
                </div>
                <button
                  type="button"
                  className="inline-block py-5 px-16 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Начать сейчас
                </button>
              </div>
            </div>
            <div class="block w-full   lg:flex lg:w-7/12 xl:w-5/12">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/126.jpg"
                alt="Trendy Pants and Shoes"
                class="w-full rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoreLanguage;
