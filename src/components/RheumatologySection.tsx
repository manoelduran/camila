import Image from "next/image";

export function RheumatologySection() {
  return (
    <section className="py-12 md:py-24 lg:py-32" id="reumatologia">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            O que é a Reumatologia?
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            A Reumatologia é a especialidade médica que estuda, diagnostica e
            trata diversas doenças que afetam o sistema musculoesquelético e o
            tecido conjuntivo, encontrado nos órgãos e estruturas do nosso corpo
            como articulações, tendões, ossos, coluna, músculos, pele, coração e
            rins. Pode afetar pessoas de qualquer idade, sexo, etnia e, sem o
            devido tratamento, podem impedir de realizar tarefas cotidianas,
            devido o acometimento da dor. Elas devem ser tratadas por médicos
            especialistas na área, devido a sua complexidade de apresentação
            clínica, diagnóstico e tratamento.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            alt="Reumatologia"
            className="rounded-lg object-cover"
            height="500"
            src="/foto3.jpg"
            width="400"
          />
        </div>
      </div>
    </section>
  );
}
