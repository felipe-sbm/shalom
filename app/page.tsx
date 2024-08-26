import Image from "next/image";
import { Music } from "lucide-react";

export default function Home() {
  return (
    <div className="antialasing">
      <section className="py-24 lg:pt-32">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto text-center lg:text-left">
            <h1 className="text-3xl dark:text-zinc-300 font-extrabold sm:text-5xl">
              Evangelizando Jesus
              <br />
              <strong className="font-extrabold text-sky-500">
                {" "}
                através da música
              </strong>
              .
            </h1>
            <p className="mt-4 dark:text-zinc-300 sm:text-xl/relaxed">
              Transmitindo a paz do nosso Pai através da música e do louvor.
            </p>

            <div className="mt-8 flex flex-wrap lg:justify-left md:justify-center gap-4">
              <a
                className="block w-full rounded bg-sky-500 px-12 py-3 text-sm font-medium text-white dark:text-zinc-950 shadow-xl hover:bg-sky-600/75 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto text-center"
                title="Clique para entrar na página da orquestra"
                href="/pages/orquestra"
              >
                Conheça a orquestra
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-full">
              <Image
                src="/album.png"
                alt="Album de fotos da Orquestra Shalom"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 pb-6">
        <div className="lg:h-32 h-16 rounded-lg bg-gray-200 lg:col-span-2"></div>
        <div className="lg:h-32 lg:hidden h-16 rounded-lg bg-gray-200"></div>
      </div>
      <div>
        <h1 className="text-4xl dark:text-zinc-300 font-bold">
          Não são apenas
          <strong className="font-extrabold text-sky-500"> partituras</strong>.
        </h1>
        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maxime
          eius cupiditate at, placeat aperiam quasi ab beatae est officia.
          Alias, accusamus numquam saepe at dolorem exercitationem ratione quos
          nulla?
        </p>
        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          aperiam molestiae optio labore obcaecati, sit eveniet nobis dolore
          porro cumque vitae veniam! Maxime reprehenderit earum deserunt non
          sapiente, molestias iusto!
        </p>
        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia
          provident ullam rerum debitis at accusantium, est impedit eum animi
          maxime deleniti hic nobis quam dolor consequuntur sit sequi natus?
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-6">
        <div className="lg:h-32 h-16 rounded-lg bg-gray-200"></div>
        <div className="lg:h-32 h-16 rounded-lg bg-gray-200 lg:col-span-2"></div>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl dark:text-zinc-300 font-bold">
          Venha nos visitar
          <strong className="font-bold text-sky-500">!</strong>
        </h1>

        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
          deleniti. Aperiam nihil vitae architecto voluptates, dolores est iste,
          itaque saepe nobis ullam a, omnis illum velit dignissimos deserunt
          asperiores exercitationem?
        </p>
        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Todos os domingos à partir das 18:00H, na: Rua Georgino Avelino, 345 -
          Santos Reis, Parnamirim - RN, 59141-045 Não se esqueça de conferir a
          disponibilidade na aba <a href="/pages/cronograma" className="underline text-sky-500">cronograma</a>.
        </p>
      </div>
    </div>
  );
}
