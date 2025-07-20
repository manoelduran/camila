import { Card, CardContent } from "./ui/card";

const diseases = [
  {
    name: "Lupus Eritematoso Sistêmico",
    image: "/lupus.jpeg",
  },
  {
    name: "Artrite Reumatoide",
    image: "/artrite_reumatoide.jpeg",
  },
  {
    name: "Espondilite Anquilosante",
    image: "/espondilite_anquilosante.jpeg",
  },
  {
    name: "Artrite Psoriasica",
    image: "/artrite_psoriasica.jpeg",
  },
  {
    name: "Síndrome Sjogren",
    image: "/sjogren.jpeg",
  },
  {
    name: "Osteoporose",
    image: "/osteoporose.jpeg",
  },
  {
    name: "Esclerose Sistêmica",
    image: "/esclerose_sistemica.jpeg",
  },
  {
    name: "Gota",
    image: "/gota.jpeg",
  },
  {
    name: "Fibromialgia",
    image: "/fibromialgia.jpeg",
  },
  {
    name: "Vasculites",
    image: "/vasculites.jpeg",
  },
];
export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-white lg:py-32" id="servicos">
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-48 max-w-screen-xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl text-[#5d0625] font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Principais doenças atendidas
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {diseases.map((disease) => (
            <Card
              key={disease.name}
              className="relative overflow-hidden w-full sm:w-[45%] lg:w-[30%] h-64"
              style={{
                backgroundImage: `url(${disease.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CardContent className="absolute bottom-0 rounded-b-lg left-0 w-full p-3 bg-black/60 backdrop-blur-sm">
                <p className="text-white text-sm font-medium">{disease.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
