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

        <div class="flex flex-wrap -mx-4 ">
          <CardHIW
            count={1}
            header={"Первая встреча и брифинг"}
            time={"2 дней"}
            text={
              "Знакомимся и погружаемся детальней в ваш продукт, анализируем ваших конкурентов и преимущества"
            }
            arrow={"up"}
          />
          <CardHIW
            count={2}
            header={"Создание контента"}
            time={"8 дней"}
            text={
              "Прописываем оригинальные сценарии, снимаем видео и монтируем"
            }
            arrow={"down"}
          />
          <CardHIW
            count={3}
            header={"Правки изменения"}
            time={"3 дней"}
            text={
              "Мы трудимся над видео, чтобы они идеально соответствовали вашим ожиданиям"
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
