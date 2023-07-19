/* eslint-disable jsx-a11y/anchor-is-valid */
import logo_img from "../imgs/logo's-img.png";
import logo_text from "../imgs/logo's-text.png";
export function Navigation() {
  return (
    <section className="relative bg-whire overflow-hidden text-xl">
      <div className="bg-transparent container px-4 mx-auto">
        <nav className="flex justify-between p-6 px-4">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2 xl:w-1/3 flex flex-row items-center">
              <div className="mr-2">
                <a className="block max-w-max" href="#">
                  <img src={logo_img} alt="logo x-boost " className="h-12" />
                </a>
              </div>
              <div>
                <img src={logo_text} alt="logo x-boost text" className="h-8" />
              </div>
            </div>
            <div className="w-1/2 xl:w-1/3">
              <ul className="hidden xl:flex xl:justify-center">
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Header-1
                  </a>
                </li>{" "}
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Header-2
                  </a>
                </li>{" "}
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Header-3
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Header-3
                  </a>
                </li>
                <li className="mr-12">
                  <a
                    className="text-gray-500 hover:text-gray-900 font-medium"
                    href="#"
                  >
                    Header-3
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 xl:w-1/3">
              <div className="hidden xl:flex items-center justify-end">
                <button className="text-white hover:text-white-fade font-medium bg-emerald-600 hover:bg-emerald-800 py-2 px-4 rounded">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
