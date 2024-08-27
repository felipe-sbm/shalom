import Image from "next/image";
import {
  GraduationCap,
  Music,
  Sprout,
  Medal,
  CalendarClock,
  FishSymbol,
  CirclePlus,
  CircleMinus,
} from "lucide-react";

export default function EscolaDeMusica() {
  return (
    <main>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 place-content-center mt-5 lg:mt-1">
            <div className="relative overflow-hidden rounded-xl lg:py-5 sm:h-80 lg:order-last lg:h-full">
              <Image
                src="/orchestra-3.png"
                alt="Foto da orquestra com os músicos"
                width={1000}
                height={600}
                className="object-fill h-215 shadow-xl rounded-xl"
              />
            </div>

            <div className="lg:py-5">
              <h2 className="text-xl dark:text-zinc-100 font-extrabold sm:text-6xl">
                Venha fazer parte da nossa família
              </h2>

              <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                Seja bem-vindo a escola de música da Orquestra Shalom. Estamos
                de portas abertas para mostrar a você o mundo da música. Aqui
                você irá aprender a tocar um instrumento musical, entender a
                teoria por trás da música e fazer parte de uma orquestra. Venha
                fazer parte da nossa família e descobrir o seu talento musical!
              </p>

              <a
                href="https://www.instagram.com/orquestrashalom/"
                className="mt-8 inline-block shadow-xl rounded bg-sky-500 px-12 py-3 text-sm font-medium text-zinc-50 dark:text-zinc-950 transition hover:bg-sky-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Consultar disponibilidade
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-4 gap-4 lg:gap-8 pb-6">
        <div className="lg:h-32 h-16 rounded-lg bg-gray-200 bg-[url('/sintetizador.jpg')] bg-cover bg-center shadow-lg" />
        <div className="lg:h-32 h-16 rounded-lg bg-gray-200 bg-[url('/trompetes.jpg')] bg-cover bg-top shadow-lg" />
        <div className="lg:h-32 h-16 rounded-lg bg-gray-200 bg-[url('/teclado.jpg')] bg-cover bg-top shadow-lg" />
        <div className="lg:h-32 h-16 rounded-lg bg-gray-200 bg-[url('/orchestra.jpg')] bg-cover bg-bottom shadow-lg" />
      </div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl dark:text-zinc-100 font-extrabold sm:text-5xl">
                Vantagens de fazer parte da nossa escola
              </h2>

              <p className="mt-4 text-zinc-700 dark:text-zinc-300">
                A escola de música da Orquestra Shalom é um projeto que visa
                aperfeiçoar o estudante de música que tem interesse de entoar
                louvores ao Senhor por meio de uma orquestra. Aqui o estudante
                recebe os cuidados necessários para se tornar um músico de
                excelência, não sendo necessário ter um conhecimento anterior,
                somente a curiosidade e a vontade de aprender. Conheça as
                vantagens
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a className="block shadow-lg rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <GraduationCap className="text-sky-500 dark:text-sky-300" />
                <h2 className="mt-2 font-semibold font-serif text-zinc-600 dark:text-zinc-50">
                  Formação
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm text-zinc-500 dark:text-zinc-100">
                  Aprenda e tire dúvidas com quem realmente entende.
                </p>
              </a>

              <a className="block shadow-lg rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <Music className="text-sky-500 dark:text-sky-300" />
                <h2 className="mt-2 font-semibold font-serif text-zinc-600 dark:text-zinc-50">
                  Teoria e pŕatica
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm text-zinc-500 dark:text-zinc-100">
                  Em um único local você irá aprender as duas coisas, sem a
                  necessidade de sair.
                </p>
              </a>

              <a className="block shadow-lg rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <Sprout className="text-sky-500 dark:text-sky-300" />
                <h2 className="mt-2 font-semibold font-serif text-zinc-600 dark:text-zinc-50">
                  Crescimento
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm text-zinc-500 dark:text-zinc-100">
                  Excelente para iniciantes na área, ou quem busca aprimorar.
                </p>
              </a>

              <a className="block shadow-lg rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <Medal className="text-sky-500 dark:text-sky-300" />
                <h2 className="mt-2 font-semibold font-serif text-zinc-600 dark:text-zinc-50">
                  Professores selecionados
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm text-zinc-500 dark:text-zinc-100">
                  Independente da sua escolha de instrumento, temos bons
                  professores.
                </p>
              </a>

              <a className="block shadow-lg rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <CalendarClock className="text-sky-500 dark:text-sky-300" />
                <h2 className="mt-2 font-semibold font-serif text-zinc-600 dark:text-zinc-50">
                  Curto prazo
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm text-zinc-500 dark:text-zinc-100">
                  As aulas teórias terminam em 6 meses, e as práticas de 1 à 2
                  anos.
                </p>
              </a>

              <a className="block shadow-lg rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <FishSymbol className="text-sky-500 dark:text-sky-300" />
                <h2 className="mt-2 font-semibold font-serif text-zinc-600 dark:text-zinc-50">
                  Ingressão na nossa igreja
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm text-zinc-500 dark:text-zinc-100">
                  Ao terminar as aulas, você pode ingressar na Boa Vista 1.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="space-y-4 pb-6">
        <details
          className="group rounded-lg bg-zinc-100 dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-500 dark:text-zinc-100">
            <h2 className="mx-10 font-serif text-zinc-700 dark:text-zinc-300 font-semibold">
              O que é a escola de música da Orquestra Shalom?
            </h2>

            <span className="relative size-5 shrink-0">
              <CirclePlus className="absolute inset-0 opacity-100 group-open:opacity-0" />
              <CircleMinus className="absolute inset-0 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mx-10 mt-4 font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
            A escola de música da Orquestra Shalom é um projeto que visa ensinar
            música para pessoas de todas as idades. <br />O projeto tem como
            objetivo ensinar música de forma prática e teórica, para que os
            alunos possam aprender a tocar um instrumento musical e entender a
            teoria por trás da música.
          </p>
        </details>

        <details className="group rounded-lg bg-zinc-100 dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-500 dark:text-zinc-100">
            <h2 className="mx-10 font-serif font-semibold text-zinc-700 dark:text-zinc-300">
              Quais são os benefícios de aprender música?
            </h2>

            <span className="relative size-5 shrink-0">
              <CirclePlus className="absolute inset-0 opacity-100 group-open:opacity-0" />
              <CircleMinus className="absolute inset-0 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mx-10 mt-4 font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
            Aprender música traz diversos benefícios para a saúde mental e
            emocional. Além disso, tocar um instrumento musical é uma atividade
            prazerosa e relaxante, que pode ajudar a aliviar o estresse e a
            ansiedade. A música também estimula o cérebro e melhora a memória e
            a concentração.
          </p>
        </details>

        <details className="group rounded-lg bg-zinc-100 dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-500 dark:text-zinc-100">
            <h2 className="mx-10 font-serif font-semibold text-zinc-700 dark:text-zinc-300">
              Qual o valor das aulas de música? E o que está incluso?
            </h2>

            <span className="relative size-5 shrink-0">
              <CirclePlus className="absolute inset-0 opacity-100 group-open:opacity-0" />
              <CircleMinus className="absolute inset-0 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mx-10 mt-4 font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
            As aulas de música da Orquestra Shalom tem um valor acessível e
            muito abaixo do mercado! Geralmente os valores variam de R$ 80,00 à
            R$ 100,00 por mês, dependendo do instrumento escolhido. E ao se
            matricular nas aulas teóricas o aluno recebe um material didático
            exclusivo, juntamente com uma flauta doce.
          </p>
        </details>
      </div>
    </main>
  );
}
