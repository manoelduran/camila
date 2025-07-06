import { Card, CardContent } from "./ui/card";

const diseases = [
  {
    name: "Lupus Eritematoso Sistêmico",
  },
  {
    name: "Artrite Reumatoide",
  },
  {
    name: "Espondilite Anquilosante",
  },
  {
    name: "Artrite Psoriasica",
  },
  {
    name: "Síndrome Sjogren",
  },
  {
    name: "Osteoporose",
  },
  {
    name: "Esclerose Sistêmica",
  },
  {
    name: "Gota",
  },
  {
    name: "Fibromialgia",
  },
  {
    name: "Vasculites",
  },
];
export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32" id="servicos">
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-48 max-w-screen-xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Principais doenças atendidas
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {diseases.map((disease) => (
            <Card key={disease.name} className="w-full sm:w-[45%] lg:w-[30%]">
              <CardContent>
                <p className="text-gray-500 text-center dark:text-gray-400">
                  {disease.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
