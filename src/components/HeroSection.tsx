import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-12 bg-white md:py-24 lg:py-32">
      <div className="container px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <h1
            className="text-3xl
           text-[#72132E] font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Dra. Camila Cendon
          </h1>
          <p className="text-[#5C4A4A] dark:text-gray-400">
            CRM: 30024-BA / RQE 20434
            <br />
            Médica Reumatologista em Salvador
          </p>
          <p className="max-w-[600px] mx-auto lg:mx-0 text-[#5C4A4A] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Sou médica reumatologista, com foco no diagnóstico, tratamento e
            acompanhamento de doenças autoimunes. Atuo em consultório,
            oferecendo uma abordagem humanizada e individualizada, voltada para
            o cuidado integral de cada paciente. Além da prática clínica, sou
            professora da Escola Bahiana de Medicina, onde contribuo para a
            formação de novos profissionais com base em uma prática médica
            ética, empática e fundamentada em evidências científicas. Além
            disso, participo de pesquisas clínicas na área da reumatologia,
            buscando continuamente o aprimoramento dos conhecimentos e
            tratamentos disponíveis. Meu compromisso é oferecer um atendimento
            de excelência, unindo ciência, experiência e atenção às necessidades
            de cada paciente.
          </p>
        </div>

        {/* Imagem */}
        <Image
          alt="Dra. Camila Cendon"
          className="rounded-lg object-cover border-1 border-[#C2A87C]"
          height={500}
          width={400}
          src="/camila_duran.jpeg"
        />
      </div>
    </section>
  );
}
