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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-xl sm:h-80 lg:order-last lg:h-full">
              <Image
                src="/orchestra-3.png"
                alt="Logo da Orquestra Shalom"
                width={1000}
                height={600}
                className="object-fill h-215"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl dark:text-zinc-100 font-extrabold sm:text-5xl">
                Venha fazer parte da nossa família
              </h2>

              <p className="mt-4 text-zinc-500 dark:text-zinc-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-sky-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-sky-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Consultar disponibilidade
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
            <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
              <h2 className="text-3xl dark:text-zinc-100 font-extrabold sm:text-5xl">
                Vantagens de fazer parte da nossa escola
              </h2>

              <p className="mt-4 text-zinc-500 dark:text-zinc-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit
                assumenda? Deleniti quasi inventore, libero reiciendis minima
                aliquid tempora. Obcaecati, autem. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Non velit culpa fugit voluptatem!
                Iusto assumenda inventore a possimus voluptatibus non
                dignissimos error ab dolor esse omnis tempore, suscipit
                praesentium corporis!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <GraduationCap className="text-zinc-500 dark:text-zinc-100"/>
                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-zinc-500 dark:text-zinc-100">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <Music className="text-zinc-500 dark:text-zinc-100"/>
                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-zinc-500 dark:text-zinc-100">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <Sprout className="text-zinc-500 dark:text-zinc-100"/>
                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-zinc-500 dark:text-zinc-100">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <Medal className="text-zinc-500 dark:text-zinc-100"/>
                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-zinc-500 dark:text-zinc-100">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <CalendarClock className="text-zinc-500 dark:text-zinc-100"/>
                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-zinc-500 dark:text-zinc-100">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>

              <a className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                <FishSymbol className="text-zinc-500 dark:text-zinc-100"/>
                <h2 className="mt-2 font-bold">Accountant</h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-zinc-500 dark:text-zinc-100">
                  Lorem ipsum dolor sit amet consectetur.
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
            <h2 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative size-5 shrink-0">
              <CirclePlus className="absolute inset-0 opacity-100 group-open:opacity-0" />
              <CircleMinus className="absolute inset-0 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 font-light leading-relaxed text-zinc-500 dark:text-zinc-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details className="group rounded-lg bg-zinc-100 dark:bg-zinc-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-zinc-500 dark:text-zinc-100">
            <h2 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="relative size-5 shrink-0">
              <CirclePlus className="absolute inset-0 opacity-100 group-open:opacity-0" />
              <CircleMinus className="absolute inset-0 opacity-0 group-open:opacity-100" />
            </span>
          </summary>

          <p className="mt-4 font-light leading-relaxed text-zinc-500 dark:text-zinc-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </div>
    </main>
  );
}
