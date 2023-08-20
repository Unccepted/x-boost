import greenArrow from "../../svg/right-arrow-svgrepo-com.svg";

export function CardHIW({ count, header, text, time, arrow }) {
  return (
    <div className="w-full px-4 relative">
      <div className="h-full p-4 pb-8 border shadow-sm shadow-gray-400 rounded-xl flex flex-col gap-y-2 bg-white">
        <div className="hidden lg:flex  h-16 w-16 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
          <span className="text-3xl font-bold">{count}</span>
        </div>
        <h2 className="text-2xl text-gray-900 leading-tight font-bold">
          {header}
        </h2>
        <span className=" text-xl font-medium text-green-600">{time}</span>
        <p className="text-gray-500 font-medium">{text}</p>
      </div>
      {arrow !== "hidden" && (
        <div
          className={`absolute   
          ${
            arrow === "up"
              ? "-bottom-11 right-4 rotate-45 lg:bottom-auto lg:top-4 lg:-right-7 lg:rotate-6"
              : "-bottom-11 rotate-45 lg:bottom-4 lg:-right-7 lg:-rotate-6"
          }  rounded-xl bg-white z-10 border-2 border-green-500 shadow-sm shadow-green-600`}
        >
          <img
            src={greenArrow}
            alt="Green arrow pointing right"
            className="h-14  p-2 rotate-45 lg:rotate-0"
          />
        </div>
      )}
    </div>
  );
}
