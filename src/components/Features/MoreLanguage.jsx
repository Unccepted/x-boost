import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { CalendyButton } from "../Resusable/CalendyButton";

function MoreLanguage() {
  return (
    <div class="container my-24 mx-auto md:px-6">
      <section class="text-center lg:text-left">
        <div class="block rounded-lg bg-white  ">
          <div class="flex flex-wrap-reverse items-center">
            <div class="w-full lg:w-7/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="mb-6 pb-2 text-7xl font-bold text-gray-900">
                  Контент на 18+ языках
                </h2>
                <p class="mb-6 pb-2 text-neutral-500 ">
                  Откройте для своего бренда новые горизонты с нашим
                  многоязычным контентом. Наши творческие специалисты владеют
                  более чем 23 языками и создадут убедительный и аутентичный
                  контент, способный привлечь широкую аудиторию.
                </p>
                <div class="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 grid-flow-cols  mb-6">
                  <div class="mb-4 w-full">
                    <p class="flex">
                      <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                      Русский
                    </p>
                  </div>
                  <div class="mb-4 w-full ">
                    <p class="flex">
                      <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                      Украинский
                    </p>
                  </div>
                  <div class="mb-4 w-full">
                    <p class="flex">
                      <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                      Английский
                    </p>
                  </div>
                  <div class="mb-4 w-full">
                    <p class="flex">
                      <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                      И другие.
                    </p>
                  </div>
                </div>
                <CalendyButton
                  className="inline-block py-5 px-16 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                  buttonText="Начать сейчас"
                />
              </div>
            </div>
            <div class="w-full lg:w-5/12">
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
