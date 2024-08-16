import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-zinc-50 dark:bg-zinc-950 w-screen max-md:shadow-2xl">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12 mt-10">
            <a className="block text-sky-600" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/logo-invert.png"
                alt="Logo da Orquestra Shalom"
                width={150}
                height={150}
                className="flex dark:invert"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-600/75"
                    href="/"
                  >
                    Início
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-600/75"
                    href="/pages/orquestra"
                  >
                    A Orquestra
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-600/75"
                    href="/pages/cronograma"
                  >
                    Cronograma
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-600/75"
                    href="/pages/escola-de-musica"
                  >
                    Escola de Música
                  </a>
                </li>

                <li>
                  <a
                    className="text-zinc-500 dark:text-zinc-300 transition hover:text-sky-600/75"
                    href="/pages/componentes"
                  >
                    Componentes
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                href="https://www.instagram.com/orquestrashalom/"
                className="text-sky-500 transition hover:text-sky-600/75"
                title="Link para o Instagram da orquestra"
              >
                <Instagram />
              </a>
            </div>

            <div className="block md:hidden">
              <button
                type="button"
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                title="Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
