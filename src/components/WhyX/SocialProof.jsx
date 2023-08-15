import { NumberComponent } from "./NumberComponent";

export function SocialProof() {
  return (
    <section id="why-x-boost" className="bg-gray-900">
      <div className="container px-4 mx-auto py-16 lg:px-6">
        <div className=" text-white text-center lg:text-left text-3xl min-[420px]:text-4xl uppercase font-bold mb-16">
          Почему X-Boost?
        </div>
        <div className="grid gap-10  grid-cols-1 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4 text-white mb-12">
          <NumberComponent
            number={"780+"}
            type={"Создали видео для наших клиентов"}
          />
          <NumberComponent
            number={"22.500$"}
            type={"Затраты на маркетинг наших клиентов"}
          />
          <NumberComponent
            number={"5 дней"}
            type={"Самая быстрая доставка роликов"}
          />
          <NumberComponent number={"23М+"} type={"Просмотров наших видео"} />
        </div>
        <div className="text-gray-400 text-lg">
          <p className="text-center lg:text-left">
            Мы специализируемся на создание контента для вашего бизнеса, который
            путем публикаций в соц сетях, таргета, принесет вам органические
            охваты и повысит доверие к вашему бизнесу!
          </p>
        </div>
      </div>
    </section>
  );
}
