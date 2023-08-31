import { RingSpinner } from "react-spinners-kit";

export function LoadingPage() {
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto h-screen max-w-screen-xl lg:py-16 lg:px-6 flex items-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-6xl tracking-tight font-extrabold  text-green-500 animate-pulse">
            Loading
          </h1>
          <div className="flex justify-center">
            <RingSpinner size={90} color="#22c55e" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingPage;
