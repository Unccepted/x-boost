/* eslint-disable jsx-a11y/anchor-is-valid */
import logo_img from "../imgs/logo's-img.png";
import logo_text from "../imgs/logo's-text.png";
export function Navigation() {
  return (
    <section className="relative bg-whire overflow-hidden text-xl">
      <div className="bg-transparent container px-4 mx-auto">
        <nav className="flex justify-between p-6 px-4">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2 xl:w-1/5 flex flex-row items-center">
              <div className="mr-2">
                <a className="block max-w-max" href="#">
                  <img src={logo_img} alt="logo x-boost " className="h-12" />
                </a>
              </div>
              <div>
                <img src={logo_text} alt="logo x-boost text" className="h-8" />
              </div>
            </div>
            <div className="w-full xl:w-4/5 justify-end">
              <ul className="hidden xl:flex xl:justify-center items-center">
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Наши примеры
                  </a>
                </li>{" "}
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Наши кейсы
                  </a>
                </li>{" "}
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Наши клиенты
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Как это работает
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Цена
                  </a>
                </li>
                <li className="mr-12">
                  <div className="hidden xl:flex items-center justify-end">
                    <button className="text-white  text-xl font-medium bg-green-500 hover:bg-green-600 py-2 px-4 rounded">
                      Начать
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
