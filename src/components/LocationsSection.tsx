import { MapPin, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function LocationsSection() {
  return (
    <section
      className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
      id="atendimentos"
    >
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-48 max-w-screen-xl mx-auto">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Locais de Atendimento
          </h2>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md dark:bg-gray-900">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-1 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Presencial Ambulatorial</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Clínica SER da Bahia
              <br />
              Rua Conde Filho, 117 - Graça, Salvador - BA, 40150-150
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src={process.env.NEXT_PUBLIC_IFRAME_LINK}
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                title="Mapa da Clínica SER da Bahia"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="flex-1 bg-white p-6 rounded-lg shadow-md dark:bg-gray-900 self-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Smartphone className="h-6 w-6 text-primary " />
              </div>
              <h3 className="text-xl font-semibold">Atendimento Online</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Consultas por telemedicina para todo o Brasil, com a mesma
              qualidade e atenção do atendimento presencial.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="bg-[#dea983] text-white hover:bg-[#d49771] transition-colors hover:scale-105"
                asChild
              >
                <Link
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                >
                  (71) 3022-9886
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
