"use client";
import { useState } from "react";
import Image from "next/image";
import {
  SquareMenu,
  X,
  ListStart,
  Music,
  CalendarClock,
  NotebookPen,
  CircleUserRound,
  Instagram,
} from "lucide-react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-zinc-100 dark:bg-zinc-950 shadow-md" id="target-section">
      <nav
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex h-16 lg:justify-between items-center"
        aria-label="Global"
      >
        <div className="gap-12">
          <a className="flex mt-14" href="/">
            <span className="sr-only">Início</span>
            <Image
              className="dark:invert"
              src="/logo-invert.png"
              title="Logo da Orquestra Shalom (ao clicar volta para o início)"
              alt="Logo da Orquestra Shalom (ao clicar volta para o início)"
              width={170}
              height={128}
            />
          </a>
        </div>
        <div className="flex absolute lg:hidden right-5">
          <button
            type="button"
            className="-m-2.5 inline-flex rounded-md p-2.5 text-zinc-700 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <SquareMenu />
          </button>
        </div>
        <PopoverGroup className="hidden md:block place-content-center">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm md:hidden lg:flex">
              <li>
                <a
                  className="text-zinc-500 transition hover:text-sky-500/75"
                  href="/"
                >
                  {" "}
                  Início{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 transition hover:text-sky-500/75"
                  href="/pages/orquestra"
                >
                  {" "}
                  A Orquestra{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 transition hover:text-sky-500/75"
                  href="/pages/cronograma"
                >
                  {" "}
                  Cronograma{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 transition hover:text-sky-500/75"
                  href="/pages/escola-de-musica"
                >
                  {" "}
                  Escola de Música{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 transition hover:text-sky-500/75"
                  href="/pages/componentes"
                >
                  {" "}
                  Componentes{" "}
                </a>
              </li>
            </ul>
          </nav>
        </PopoverGroup>
        <div className="lg:flex gap-4 hidden">
          <a
            href="https://www.instagram.com/orquestrashalom/"
            className="text-sky-500 transition hover:text-sky-600/75"
            title="Link para o Instagram da orquestra"
          >
            <Instagram />
          </a>
        </div>
      </nav>
      <Dialog
        className="lg:hidden shadow"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-950/10 dark:bg-zinc-950">
          <div className="flex items-center justify-between">
            <Image
              className="dark:invert"
              src="/logo-invert.png"
              alt="Logo da orquestra Shalom"
              width={100}
              height={50}
            />
            <button
              type="button"
              className="-mt-8 rounded-md text-zinc-700 dark:text-zinc-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <X />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="my-6 divide-y divide-zinc-500/10">
              <div className="space-y-5 py-6">
                <a
                  href="/"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-sky-950/75 dark:hover:text-sky-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <ListStart /> Início
                </a>
                <a
                  href="/pages/orquestra"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-sky-950/75 dark:hover:text-sky-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <Music />A Orquestra
                </a>
                <a
                  href="/pages/cronograma"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-sky-950/75 dark:hover:text-sky-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <CalendarClock />
                  Cronograma
                </a>
                <a
                  href="/pages/escola-de-musica"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-sky-950/75 dark:hover:text-sky-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <NotebookPen />
                  Escola de Música
                </a>
                <a
                  href="/pages/componentes"
                  className="flex -mx-3 block indent-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-sky-950/75 dark:hover:text-sky-300/95 px-3 py-2 text-base font-semibold leading-7 text-zinc-700 dark:text-zinc-200"
                >
                  <CircleUserRound />
                  Componentes
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
