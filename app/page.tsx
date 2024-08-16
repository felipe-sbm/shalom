import Image from "next/image";
import { Music } from "lucide-react";

export default function Home() {
  return (
    <div className="antialasing">
      <section className="bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl dark:text-zinc-300 font-extrabold sm:text-5xl">
              Evangelizando Jesus
              <strong className="font-extrabold text-sky-500 sm:block">
                {" "}
                através da música.{" "}
              </strong>
            </h1>

            <p className="mt-4 dark:text-zinc-300 sm:text-xl/relaxed">
              Transmitindo a paz do nosso Pai através da música e do louvor.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-sky-500 px-12 py-3 text-sm font-medium text-white dark:text-zinc-950 shadow hover:bg-sky-600/75 focus:outline-none focus:ring active:bg-sky-500 sm:w-auto"
                href="/pages/orquestra"
              >
                Conheça a orquestra
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
