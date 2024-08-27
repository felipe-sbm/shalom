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
                draggable="false"
                width={640}
                height={430}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-4 lg:gap-8 pb-6">
        <div className="lg:h-32 h-20 rounded-lg bg-gray-200 col-span-2 bg-[url('/cover.jpg')] bg-cover bg-center" />
        <div className="lg:h-32 h-20 rounded-lg bg-gray-200 bg-[url('/vozes.jpg')] bg-cover bg-top" />
      </div>
      <div className="lg:mx-10 my-12">
        <h1 className="text-4xl dark:text-zinc-300 font-bold">
          Não são apenas
          <strong className="font-extrabold text-sky-500"> partituras</strong>.
        </h1>
        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          A música é uma forma de expressão, de comunicação e de evangelização,
          que é uma grande ferramenta de louvor e adoração. Que o simples fato
          de escutar, cantar ou tocar, interfere no mundo físico. Mexendo com
          células, neurônios e órgãos, e mexe muito mais no mundo espiritual. A
          Música foi criada por Deus e com o livre arbitrio encontramos a música
          em todos os lugares e com diversidade. A música usada com
          discernimento, envolve o proclamar da palavra de Deus. O nosso louvor
          produz vibrações, não de vibrações místicas, mas sim de vibrações
          físicas (frequência) que afetam o organismo, reordenam as células e
          que é capaz de curar.
        </p>
        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Viabiliza o fluir da alma e do espírito por isso nós tocamos e
          cantamos nos cultos, as notas musicais são frequências de movimentação
          de partículas de ar e é aqui que fazemos entender pela palavra de
          Deus, que ao tocarmos movimentamos o espírito. A orquestra em si não é
          uma decoração, ela é muito mais do que isso. Para a orquestra a música
          é uma ferramenta espiritual, e está no mundo inteiro!
        </p>
        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Que é tanto, que algumas notas juntas podem nos fazer chorar, rir, se
          alegrar, sentir medo ou até mesmo mudar o ânimo. Então quando
          começamos a tocar, e a você ouvir, estamos expostos à essas vibrações
          que mexe com o corpo alma e espírito. O ar que sai dos nossos pulmões
          e passam pelas cordas vocais produz vibrações, e consequentemente
          emite sons, e esse som é único na face da terra, é a sua identidade, é
          a sua voz. Considerando tudo isso, todos nós somos músicos, então
          louve ao nosso Criador em nossos cultos com este instrumento poderoso
          que Deus te presenteou.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-6">
        <div className="lg:h-32 h-24  rounded-lg bg-gray-200 bg-[url('/saxofones.jpg')] bg-cover bg-center sm:bg-center" />
        <div className="lg:h-32 h-24 rounded-lg bg-gray-200 lg:col-span-2 bg-[url('/trombones.jpg')] bg-cover bg-center" />
      </div>
      <div className="lg:mx-10 my-12">
        <h1 className="text-4xl dark:text-zinc-300 font-bold">
          Venha nos visitar!
        </h1>

        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Deus tem um grande propósito em sua vida, e nós da Orquestra Shalom
          queremos que você se aproxime dEle através dos hinos que tocamos.
          Venha louvar ao Senhor conosco, estamos te aguardando!
        </p>
        <p className="mt-4 dark:text-zinc-300 sm:text-md/relaxed">
          Todos os domingos à partir das 18:00H, na: Rua Georgino Avelino, 345 -
          Santos Reis, Parnamirim - RN, 59141-045 Não se esqueça de conferir a
          disponibilidade na aba{" "}
          <a href="/pages/cronograma" className="underline text-sky-500">
            cronograma
          </a>
          . Aqui você encontra a programação semanal da orquestra, e pode ver
          transmissões ao vivo passadas.
        </p>
      </div>
    </div>
  );
}
