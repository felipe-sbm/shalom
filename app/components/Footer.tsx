import Image from "next/image";
import { ChevronUp, Instagram, Church, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950">
      <div className="flex relative mx-auto max-w-screen-xl justify-between space-y-8 px-4 py-10 pt-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="">
            <div className="flex justify-center lg:justify-start dark:invert">
              <Image
                src="/logo-invert.png"
                title="Logo da Orquestra Shalom"
                alt="Logo da Orquestra Shalom"
                width={150}
                height={100}
              />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-zinc-500 dark:text-zinc-100 lg:text-left">
              A identidade da orquestra Shalom é essa, transmitir a paz do nosso
              Pai com o nosso louvor.
            </p>

            <ul className="mt-8 flex gap-6 justify-center lg:justify-start">
              <li>
                <a
                  href="https://www.instagram.com/orquestrashalom/"
                  title="Instagram da Orquestra"
                  className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-500/75"
                >
                  <span className="sr-only">Instagram da Orquestra</span>
                  <Instagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@orquestrashalom"
                  title="Youtube da Orquestra"
                  className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-500/75"
                >
                  <span className="sr-only">Youtube da Orquestra</span>
                  <Youtube />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/ieadern.boavista1/"
                  title="Instagram da Igreja"
                  className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-500/75"
                >
                  <span className="sr-only">Instagram da Igreja</span>
                  <Church />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-zinc-600 transition dark:text-zinc-100 text-center lg:text-left">
                Navegação
              </p>

              <ul className="mt-6 space-y-4 text-sm text-center lg:text-left">
                <li>
                  <a
                    href="/"
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-500/75"
                  >
                    Início
                  </a>
                </li>

                <li>
                  <a
                    href="/pages/orquestra"
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-500/75"
                  >
                    A Orquestra
                  </a>
                </li>

                <li>
                  <a
                    href="/pages/cronograma"
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-500/75"
                  >
                    Cronograma
                  </a>
                </li>

                <li>
                  <a
                    href="/pages/escola-de-musica"
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-500/75"
                  >
                    Escola de Música
                  </a>
                </li>

                <li>
                  <a
                    href="/pages/componentes"
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-500/75"
                  >
                    Componentes
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-zinc-600 transition dark:text-zinc-100 text-center lg:text-left">
                Patrocinadores Máster
              </p>

              <ul className="mt-6 space-y-4 text-sm itens-center lg:itens-left">
                <li>
                  <a
                    href="https://www.instagram.com/casadobebe.parnamirim/"
                    title="Instagram da Casa do Bebê"
                    className="flex justify-center lg:justify-start invert dark:invert-0 opacity-90 dark:opacity-100 hover:opacity-75"
                  >
                    <Image
                      src="/casa-do-bebe.svg"
                      alt="Logo da Casa do Bebê"
                      width={120}
                      height={120}
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/marco_scell/"
                    title="Instagram do Marcos Cell"
                    className="flex justify-center lg:justify-start invert dark:invert-0 opacity-90 dark:opacity-100 hover:opacity-75"
                  >
                    <Image
                      src="/marcoscell.svg"
                      alt="Logo do Marcos Cell"
                      width={120}
                      height={120}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="absolute end-8 top-8 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
              <a
                className="inline-block rounded-full bg-sky-500 p-2 mt-2 text-white shadow transition hover:bg-sky-600/75 sm:p-3 lg:p-4"
                title="Voltar para o topo"
                href="#MainContent"
              >
                <span className="sr-only">Voltar para o topo</span>
                <ChevronUp className="dark:text-zinc-950" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-2 mb-0.5 mx-auto max-w-7xl px-4 sm:px-6 lg:space-y-16 lg:px-8">
          {" "}
          <p className="text-xs text-center lg:text-right text-zinc-500 dark:text-zinc-100 font-serif">
            &copy; 2024. Spiral SBM. Todos os direitos reservados.
          </p>
        </div>
      <div className="bg-sky-500 place-content-center h-8">
        <p className="font-bold lg:text-sm text-xs text-zinc-50 dark:text-zinc-950 font-serif text-center">
          Desde 2001 louvando ao Senhor com honra e muita fé.
        </p>
      </div>
    </footer>
  );
}
