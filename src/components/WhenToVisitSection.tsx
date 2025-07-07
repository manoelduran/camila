"use client";

import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "./ui/carousel";

const items = [
  {
    text: "Dor articular, principalmente pela manhã, com rigidez nas articulações e/ou na coluna",
  },
  {
    text: "Inchaço e calor nas articulações",
  },
  {
    text: "Lesões de pele que pioram com a exposição ao sol",
  },
  {
    text: "Olhos e boca secos",
  },
  {
    text: "Fadiga persistente",
  },
  {
    text: "Úlceras orais ou genitais",
  },
  {
    text: "Tromboses de repetição",
  },
  {
    text: "Fraturas ósseas por fragilidade",
  },
  {
    text: "Febre sem causa aparente",
  },
];

export function WhenToVisitSection() {
  function CarouselAutoplay() {
    const { api } = useCarousel();

    useEffect(() => {
      if (!api) return;

      let interval: NodeJS.Timeout | null = null;

      const startAutoplay = () => {
        if (interval) clearInterval(interval);
        interval = setInterval(() => {
          api.scrollNext();
        }, 3000);
      };

      const stopAutoplay = () => {
        if (interval) clearInterval(interval);
      };

      const handleVisibility = () => {
        if (document.visibilityState === "visible") {
          startAutoplay();
        } else {
          stopAutoplay();
        }
      };

      // Inicializa autoplay se a aba estiver visível
      if (document.visibilityState === "visible") {
        startAutoplay();
      }

      // Escuta mudança de visibilidade
      document.addEventListener("visibilitychange", handleVisibility);

      return () => {
        stopAutoplay();
        document.removeEventListener("visibilitychange", handleVisibility);
      };
    }, [api]);

    return null;
  }
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-48 max-w-screen-xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Quando procurar um reumatologista?
          </h2>
          <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            A reumatologia é a especialidade médica que cuida das doenças que
            afetam o sistema musculoesquelético e o tecido conjuntivo. Engana-se
            quem pensa que essas doenças atingem apenas os idosos — muitas
            condições reumatológicas, como as autoimunes, são mais comuns em
            adultos jovens. Procure um reumatologista se você apresenta sintomas
            como:
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Carousel
            className="w-full max-w-6xl"
            opts={{ loop: true, align: "start" }}
          >
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 px-2 py-2"
                >
                  <div className="p-6 bg-white flex items-center justify-center rounded-lg shadow-md dark:bg-gray-900 h-full">
                    <p className="text-gray-500 text-center dark:text-gray-400">
                      {item.text}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Apenas em telas médias e maiores */}
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />

            {/* Componente que ativa o autoplay */}
            <CarouselAutoplay />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
