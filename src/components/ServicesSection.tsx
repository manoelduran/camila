import { Card, CardContent } from "./ui/card";

const services = [
  {
    description:
      "Dor articular, principalmente pela manhã, com rigidez nas articulações e/ou na coluna.",
  },
  {
    description: "Inchaço e calor nas articulações.",
  },
  {
    description: "Lesões de pele que pioram com a exposição ao sol.",
  },
  {
    description: "Olhos e boca secos.",
  },
  {
    description: "Fadiga persistente.",
  },
  {
    description: "Úlceras orais ou genitais.",
  },
  {
    description: "Tromboses de repetição.",
  },
  {
    description: "Fraturas ósseas por fragilidade.",
  },
  {
    description: "Febre sem causa aparente.",
  },
];
export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32" id="servicos">
      <div className="container px-6 sm:px-12 lg:px-24">
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

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <Card key={index} className="w-full sm:w-[45%] lg:w-[30%]">
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
