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
            Sou médica especialista em Clínica Médica e Reumatologia
          </p>
        </div>

        {/* Imagem */}
        <Image
          alt="Dra. Camila Cendon"
          className="rounded-lg object-cover border-1 border-[#C2A87C]"
          height={500}
          width={400}
          src="/camila2.jpeg"
        />
      </div>
    </section>
  );
}
