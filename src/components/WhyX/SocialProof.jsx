import { NumberComponent } from "./NumberComponent";

export function SocialProof() {
  return (
    <section id="why-x-boost" class="bg-gray-900">
      <div class="container px-4 mx-auto lg:py-16 lg:px-6">
        <div className=" text-white text-6xl font-bold mb-16">
          Почему X-Boost?
        </div>
        <div class="grid  gap-8 mx-auto  sm:grid-cols-4 text-white mb-12">
          <NumberComponent
            number={"780+"}
            type={"Создали видео для наших клиентов"}
          />
          <NumberComponent
            number={"19.530$"}
            type={"Затраты на маркетинг наших клиентов"}
          />
          <NumberComponent
            number={"4 дней"}
            type={"Самая быстрая доставка роликов"}
          />
          <NumberComponent number={"23М+"} type={"Просмотров наших видео"} />
        </div>
        <div className="text-gray-400 text-lg">
          <p>
            Мы специализируемся на создание контента для вашего бизнеса, который
            путем публикаций в соц сетях, таргета, принесет вам органические
            охваты и повысит доверие к вашему бизнесу!
          </p>
        </div>
      </div>
    </section>
  );
}
