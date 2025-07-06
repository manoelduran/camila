import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dra. Camila Cendon
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            CRM: 30024-BA / RQE 20434
            <br />
            Médica Reumatologista em Salvador
          </p>
          <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Sou médica especialista em Clínica Médica e Reumatologia, me dedico
            a promover saúde para os pacientes com afecções reumatológicas
            através de uma consulta minuciosa e detalhada, valorizando um
            atendimento humanizado, de forma a proporcionar o melhor tratamento
            e seguimento para o meu paciente.
          </p>
        </div>

        {/* Imagem */}
        <Image
          alt="Dra. Camila Cendon"
          className="rounded-lg object-cover"
          height={500}
          width={400}
          src="/camila2.jpeg"
        />
      </div>
    </section>
  );
}
