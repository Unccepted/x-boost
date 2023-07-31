import { NumberComponent } from "./NumberComponent";

function SocialProof() {
  return (
    <section id="why-x-boost" class="bg-gray-900">
      <div class="container px-4 mx-auto lg:py-16 lg:px-6">
        <div className=" text-white text-6xl font-bold mb-16">
          Почему X-Boost?
        </div>
        <div class="grid  gap-8 mx-auto  sm:grid-cols-4 text-white mb-12">
          <NumberComponent number={"73M+"} type={"developers"} />
          <NumberComponent number={"1B+"} type={"contributors"} />
          <NumberComponent number={"73M+"} type={"organizations"} />
          <NumberComponent number={"73M+"} type={"organizations"} />
        </div>
        <div className="text-gray-400 text-lg">
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
