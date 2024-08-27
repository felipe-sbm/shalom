"use client";
import { ChevronUp } from "lucide-react";

export const VoltarAoTopo = (): void => {
  const targetElement = document.getElementById("target-section");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Elemento não encontrado.");
  }
};

export const BotaoVoltarAoTopo = ({ Texto }: { Texto: string }) => {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-sky-500 px-8 py-3 text-zinc-50 dark:text-zinc-950 hover:bg-transparent hover:font-bold hover:text-sky-500 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-700 focus:outline-none focus:ring active:bg-white/90"
      onClick={VoltarAoTopo}
      title={Texto}
    >
      <ChevronUp />
    </button>
  );
};
