import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function WhenToVisitSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Quando procurar um Reumatologista?
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Você deve procurar um reumatologista principalmente se tiver
            sintomas como dor inflamação ou rigidez nas articulações, fraqueza
            muscular ou outros sintomas relacionados ao sistema
            musculoesquelético.
          </p>
        </div>

        <div className="mt-12">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 h-full">
                  <h3 className="text-xl font-semibold mb-2">Dores no corpo</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Dores persistentes em articulações, músculos ou ossos.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 h-full">
                  <h3 className="text-xl font-semibold mb-2">
                    Fadiga / Cansaço
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Cansaço extremo sem causa aparente.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 h-full">
                  <h3 className="text-xl font-semibold mb-2">
                    Boca e olhos secos
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sensação persistente de secura.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 h-full">
                  <h3 className="text-xl font-semibold mb-2">
                    Trombose venosa e arterial
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    De repetição, sem causa aparente.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 h-full">
                  <h3 className="text-xl font-semibold mb-2">
                    Olhos avermelhados
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    E secos, além de sensibilidade à luz.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 h-full">
                  <h3 className="text-xl font-semibold mb-2">
                    Fenômeno de Raynaud
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Pele com coloração azulada nas extremidades.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-900 h-full">
                  <h3 className="text-xl font-semibold mb-2">
                    Inchaço nas articulações
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Vermelhidão e calor nas juntas.
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
