import { DateTime, PastDateTime } from "../../components/DateTime";

export default function Cronograma() {
  return (
    <main>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mb-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div className="rounded-2xl border border-sky-500 p-6 shadow-md ring-1 ring-sky-500 sm:order-last sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-100">
                <DateTime />
                <span className="sr-only">Data</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold font-serif text-zinc-500 dark:text-zinc-100">
                  Próximo Culto
                </strong>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <span className="text-zinc-500 dark:text-zinc-100">
                  {" "}
                  à partir das 18:00H, na:
                </span>
              </li>

              <li className="flex items-center gap-1">
                <span className="text-zinc-500 dark:text-zinc-100">
                  {" "}
                  Rua Georgino Avelino, 345 - Santos Reis, Parnamirim - RN,
                  59141-045{" "}
                </span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-zinc-500 dark:text-zinc-100">
                  Estamos esperando por você!
                </span>
              </li>
            </ul>

            <a
              href="https://calendar.google.com/calendar/"
              className="mt-8 block rounded-full border border-sky-500 bg-sky-500 px-12 py-3 text-center text-md font-semibold font-serif text-zinc-50 dark:text-zinc-950 hover:bg-sky-500/75 hover:ring-1 hover:ring-sky-500/75 focus:outline-none focus:ring active:text-sky-400"
            >
              Save the date
            </a>
          </div>

          <div className="rounded-xl border border-zinc-400 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-100">
                <PastDateTime />
                <span className="sr-only">Data</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-2xl font-bold font-serif text-zinc-500 dark:text-zinc-100">
                  Culto Anterior
                </strong>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <span className="text-zinc-500 dark:text-zinc-100">
                  Live do culto realizada pelo Youtube, e disponível através do
                  canal oficial da Igreja.
                </span>
              </li>
            </ul>

            <a
              href="https://www.youtube.com/channel/UCnzacMQfkDEyW7Ftut9Lp4Q"
              className="mt-8 block rounded-full border border-zinc-300 bg-zinc-400 dark:bg-black px-12 py-3 text-center text-sm font-medium font-serif text-zinc-50 hover:ring-1 hover:ring-sky-600 focus:outline-none focus:ring active:text-sky-500"
            >
              Assistir a transmissão
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
