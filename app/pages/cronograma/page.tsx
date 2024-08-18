export default function Cronograma() {
  return (
    <main>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mb-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div className="rounded-2xl border border-sky-600 p-6 shadow-md ring-1 ring-sky-600 sm:order-last sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-100">
                17/08/2024
                <span className="sr-only">Data</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-zinc-500 dark:text-zinc-100">
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
              href="#"
              className="mt-8 block rounded-full border border-sky-600 bg-sky-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-sky-700 hover:ring-1 hover:ring-sky-700 focus:outline-none focus:ring active:text-sky-500"
            >
              Save the date
            </a>
          </div>

          <div className="rounded-xl border border-zinc-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-100">
                10/08/2024
                <span className="sr-only">Data</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-2xl font-bold text-zinc-500 dark:text-zinc-100">
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
              className="mt-8 block rounded-full border border-zinc-200 bg-zinc-300 dark:bg-black px-12 py-3 text-center text-sm font-medium text-zinc-200 hover:ring-1 hover:ring-sky-600 focus:outline-none focus:ring active:text-sky-500"
            >
              Assistir a transmissão
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
