import { CardHIW } from "./CardHIW";

export function HowItWorks() {
  return (
    <section id="how-its-work" class="container px-4 mx-auto">
      <div className="py-24">
        <div class="text-center mb-12 ">
          <h1 class="mb-8 text-6xl text-gray-900 font-bold tracking-tighter">
            Как это работает?
          </h1>
          <p class="text-lg md:text-xl text-gray-500 font-medium">
            Несколько простых шагов чтобы вывести ваш контент на новый уровень
          </p>
        </div>

        <div class="grid grid-rows-1 lg:grid-cols-4 gap-y-8 ">
          <CardHIW
            count={1}
            header={"Первая встреча и брифинг"}
            time={"2 дня"}
            text={
              "Знакомимся и погружаемся детальней в ваш продукт, анализируем ваших конкурентов и преимущества"
            }
            arrow={"up"}
          />
          <CardHIW
            count={2}
            header={"Прописывание сценариев"}
            time={"5 дней"}
            text={
              "Реализация концепта, прописываем оригинальные сценарии, вносим правки "
            }
            arrow={"down"}
          />
          <CardHIW
            count={3}
            header={"Создание видео"}
            time={"4 дня"}
            text={
              "Мы трудимся над видео, снимаем и монтируем, чтобы они идеально соответствовали вашим ожиданиям"
            }
            arrow={"up"}
          />
          <CardHIW
            count={4}
            header={"Выкладка видео, оптимизация"}
            time={" "}
            text={"Тестируем форматы, отслеживаем показатели"}
            arrow={"hidden"}
          />
        </div>
      </div>
    </section>
  );
}
