"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2017-2019",
    title: "Formação e Revalidação",
    description:
      "Residência Clínica Médica Hospital Universitário Professor Edgard Santos.",
    // image: "/foto2.png",
  },
  {
    year: "2019-2021",
    title: "Especialização em Atenção Básica",
    description:
      "Residência Reumatologia Hospital das Clínicas da Universidade de São Paulo (USP-SP).",
    // image: "/foto3.jpg",
  },
  {
    year: "2021-2024",
    title: "Medicina Interna",
    description: "Doutorado em Ciências do Sistema Musculoesquelético USP-SP.",
    // image: "/foto2.png",
  },
  {
    year: "Desde 2023",
    title: "Atuação Profissional",
    description:
      "Professora Adjunta da Escola Bahiana de Medicina e Saúde Pública.",
    // image: "/foto3.jpg",
  },
  {
    year: "Desde 2021",
    title: "Atuação Profissional",
    description:
      "Investigadora Principal e Subinvestigadora de protocolos de pesquisa clínica na Clínica SER da Bahia.",
    // image: "/foto3.jpg",
  },
];

export function TimelineSection() {
  return (
    <section
      className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
      id="trajectoria"
    >
      <div className="container  md:px-6 px-6 sm:px-12 lg:px-24 xl:px-32 2xl:px-48 max-w-screen-xl mx-auto">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trajetória Profissional
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Conheça a jornada profissional da Dra. Camila Cendon
          </p>
        </div>

        <div className="relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

          {/* Itens da Timeline */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const alignment = isEven ? "md:flex-row" : "md:flex-row-reverse";

              return (
                <motion.div
                  key={index}
                  className={`flex flex-col ${alignment} items-center gap-8 relative`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Ponto na linha */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-red-600 z-10 border-4 border-white dark:border-gray-800"></div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-bold text-red-600 mb-2">
                        {item.year}
                      </h3>
                      <h4 className="text-lg font-semibold mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Espaço vazio para alternar os lados */}
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
