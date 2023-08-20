import { Link } from "react-router-dom";

export function Page_404() {
  return (
    <section class="bg-white ">
      <div class="py-8 px-4 mx-auto h-screen max-w-screen-xl lg:py-16 lg:px-6 flex items-center">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green-500 ">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
            Something's missing.
          </p>
          <p class="mb-10 text-lg font-light text-gray-500 ">
            Sorry, we can't find that page.
          </p>
          <Link to={"/"}>
            <button className="inline-block p-2 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm">
              На главную страницу
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page_404;
