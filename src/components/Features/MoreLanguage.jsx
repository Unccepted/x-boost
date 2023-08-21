import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import collageSmall from "../../imgs/Collage.webp";
import collageBig from "../../imgs/CollageB.webp";
import { CalendyButton } from "../Resusable/CalendyButton";
import languageGroupImg from "../../imgs/languange.webp";

function MoreLanguage() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="text-center lg:text-left">
        <div className="block rounded-lg bg-white  ">
          <div className="flex flex-wrap-reverse items-center">
            <div className="w-full lg:w-7/12">
              <div className="py-12 md:px-12">
                <h2 className="mb-6 pb-2 text-7xl font-bold text-gray-900">
                  Контент на 22+ языках
                </h2>
                <p className="mb-4 text-neutral-500 px-4 md:px-auto">
                  Откройте для своего бренда новые горизонты с нашим
                  многоязычным контентом. Наши творческие специалисты владеют
                  более чем 22 языками и создадут убедительный и аутентичный
                  контент, способный привлечь широкую аудиторию.
                </p>
                <div className="flex justify-center lg:justify-start col-span-2">
                  <img
                    src={languageGroupImg}
                    alt="флаги стран"
                    className="w-auto h-16 sm:h-20 mb-4"
                  />
                </div>
                <div className=" w-1/2 md:w-2/4 lg:w-3/4 xl:w-2/4 grid grid-cols-1 auto-rows-auto justify-center sm:grid-cols-2 mb-8 px-6 gap-y-4 mx-auto lg:mx-0">
                  {/* <div className="w-full"> */}
                  <p className="flex justify-start">
                    <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                    Русский
                  </p>
                  {/* </div>
                  <div className="w-full "> */}
                  <p className="flex justify-start">
                    <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                    Украинский
                  </p>
                  {/* </div> */}
                  {/* <div className="w-full"> */}
                  <p className="flex justify-start">
                    <CheckCircleRoundedIcon className="text-green-400 mr-3" />
                    Английский
                  </p>
                  {/* </div>
                  <div className="w-full"> */}
                  <p className="flex justify-start">
                    <CheckCircleRoundedIcon className="text-green-400 mr-3" />И
                    другие.
                  </p>
                  {/* </div> */}
                </div>
                <CalendyButton
                  className="inline-block py-5 px-16 text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                  buttonText="Начать сейчас"
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <img
                src={collageSmall}
                alt="Trendy Pants and Shoes"
                className="w-full lg:hidden rounded-lg "
              />
              <img
                src={collageBig}
                alt="Trendy Pants and Shoes"
                className="hidden lg:block w-full rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoreLanguage;
