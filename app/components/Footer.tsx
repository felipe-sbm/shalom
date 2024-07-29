import Image from "next/image";
import { ChevronUp, Instagram, Church } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-6">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-sky-500 p-2 text-white shadow transition hover:bg-sky-600/75 sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Voltar para o topo</span>
            <ChevronUp />
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start dark:invert">
                <Image
                src="/logo-invert.png"
                alt="Logo da Orquestra Shalom"
                width={200}
                height={200}
                /> 
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              A identidade da orquestra Shalom é essa, transmitir a paz
              do nosso Pai com o nosso louvor.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-600/75"
                href="https://www.instagram.com/orquestrashalom/"
                title="Link para o Instagram da orquestra"
              >
                <Instagram />
              </a>
            </li>

            <li>
              <a
                className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-600/75"
                href="https://www.instagram.com/ieadern.boavista1/"
                title="Link para o Instagram da igreja"
              >
                <Church />
              </a>
            </li>

            <li>
              <a
                className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-600/75"
                href="https://spiral-sbm.vercel.app"
                title="Link para o desenvolvedor do site"
              >
                Sobre o site
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2024. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
