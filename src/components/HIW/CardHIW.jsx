import greenArrow from "../../svg/right-arrow-svgrepo-com.svg";

export function CardHIW({ count, header, text, time, arrow }) {
  return (
    <div class="w-full md:w-1/2 lg:w-1/4 px-4 relative ">
      <div class="h-full p-4 pb-8 border shadow-sm shadow-gray-400 rounded-xl ">
        <div class="flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
          <span className="text-3xl font-bold">{count}</span>
        </div>
        <h3 class="text-xl md:text-2xl text-gray-900 leading-tight font-bold">
          {header}
        </h3>
        <span className="mb-4 text-green-600">{time}</span>
        <p class="text-gray-500 font-medium mt-4">{text}</p>
      </div>
      {arrow !== "hidden" && (
        <div
          className={`absolute   
          ${
            arrow === "up"
              ? "top-4 -right-7 rotate-6"
              : "bottom-4 -right-7 -rotate-6"
          }  rounded-xl bg-white z-10 border-2 border-green-500 shadow-sm shadow-green-600`}
        >
          <img
            src={greenArrow}
            alt="Green arrow pointing right"
            className="h-14  p-2 "
          />
        </div>
      )}
    </div>
  );
}
