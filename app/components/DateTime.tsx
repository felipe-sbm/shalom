"use client";
const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth();
// Eaê leitor!
// Vou comentar nesse código aqui, pois é bem diferente a leitura,
// pois aqui ele vai retornar a data do culto mais próxima e a data do culto anterior.

// Verificar se são domingos.
function Domingo(date: Date): boolean {
  return date.getDay() === 0;
}

// Verificar terças-feiras.
function Terca(date: Date): boolean {
  return date.getDay() === 2;
}

// Informar ao sistema os dias de culto
function DiasCulto(year: number, month: number): Date[] {
  const domingos: Date[] = [];
  let primeiraTerca: Date | null = null;
  const date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    if (Domingo(date)) {
      domingos.push(new Date(date));
    }
    if (Terca(date) && !primeiraTerca) {
      primeiraTerca = new Date(date);
    }
    date.setDate(date.getDate() + 1);
  }

  const cultos = [...domingos];
  if (primeiraTerca) {
    cultos.push(primeiraTerca);
  }

  return cultos;
}

// Função para encontrar a data de culto mais próxima no futuro
function dataMaisProxima(dates: Date[]): Date | null {
  const agora = new Date();
  let maisProxima: Date | null = null;
  let menorDiferenca = Infinity;

  for (const date of dates) {
    const diferenca = date.getTime() - agora.getTime();
    if (diferenca >= 0 && diferenca < menorDiferenca) {
      menorDiferenca = diferenca;
      maisProxima = date;
    }
  }

  return maisProxima;
}

// Função para encontrar a data de culto mais próxima no passado
function dataAnterior(dates: Date[]): Date | null {
  const agora = new Date();
  let Anterior: Date | null = null;
  let menorDiferenca = Infinity;

  for (const date of dates) {
    const diferenca = agora.getTime() - date.getTime();
    if (diferenca >= 0 && diferenca < menorDiferenca) {
      menorDiferenca = diferenca;
      Anterior = date;
    }
  }
  return Anterior;
}

// Função para formatar a data
function formatarData(date: Date): string {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Função para a data próxima
export function DateTime() {
  const cultosMesAtual = DiasCulto(ano, mes);
  const cultosProximoMes = DiasCulto(ano, mes + 1);
  const cultos = [...cultosMesAtual, ...cultosProximoMes];
  const proximaData = dataMaisProxima(cultos);

  return (
    <div>
      {proximaData ? (
        <div>
          <p className="font-serif">Próxima data de culto:</p>
          <p>{formatarData(proximaData)}</p>
        </div>
      ) : (
        <div className="flex">
          <p className="font-serif font-medium">
            Nenhuma data de culto próxima encontrada.
          </p>
        </div>
      )}
    </div>
  );
}

// Função para retornar a data enterior
export function PastDateTime() {
  const cultosMesAtual = DiasCulto(ano, mes);
  const cultosProximoMes = DiasCulto(ano, mes + 1);
  const cultos = [...cultosMesAtual, ...cultosProximoMes];
  const cultoAnterior = dataAnterior(cultos);

  return (
    <div>
      {cultoAnterior ? (
        <div>
          <p className="font-serif">Data de culto anterior:</p>
          <p>{formatarData(cultoAnterior)}</p>
        </div>
      ) : (
        <div className="flex">
          <p className="font-serif font-medium">
            Nenhuma data de culto anterior encontrada.
          </p>
        </div>
      )}
    </div>
  );
}
