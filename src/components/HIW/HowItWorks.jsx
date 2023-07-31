import { CardHIW } from "./CardHIW";

export function HowItWorks() {
  return (
    <section id="how-its-work" class="container px-4 mx-auto">
      <div class="text-center mb-12 ">
        <h1 class="mb-8 text-6xl text-gray-900 font-bold tracking-tighter">
          Как это работает?
        </h1>
        <p class="text-lg md:text-xl text-gray-500 font-medium">
          Наша компания предоставляет высококачественные услуги по созданию
          контента, разработанные специально для предприятий, помогая им
          привлекать и увлекать свою целевую аудиторию убедительными и
          информативными материалами.
        </p>
      </div>

      <div class="flex flex-wrap -mx-4 ">
        <CardHIW
          count={1}
          header={"Создание контента для бизнеса"}
          time={"до 2 дней"}
          text={" Помогает компаниям эффективно создавать контент."}
          arrow={"up"}
        />
        <CardHIW
          count={2}
          header={"Создание контента для бизнеса"}
          time={"до 2 дней"}
          text={" Помогает компаниям эффективно создавать контент."}
          arrow={"down"}
        />
        <CardHIW
          count={3}
          header={"Создание контента для бизнеса"}
          time={"до 2 дней"}
          text={" Помогает компаниям эффективно создавать контент."}
          arrow={"up"}
        />
        <CardHIW
          count={4}
          header={"Создание контента для бизнеса"}
          time={"до 2 дней"}
          text={" Помогает компаниям эффективно создавать контент."}
          arrow={"hidden"}
        />
      </div>
    </section>
  );
}
