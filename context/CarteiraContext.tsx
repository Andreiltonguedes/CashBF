import { createContext, useContext, useState } from "react";

const CarteiraContext = createContext<any>(null);

export function CarteiraProvider({ children }: any) {

  const [saldo, setSaldo] = useState(120);
  const [historico, setHistorico] = useState<any[]>([]);

  function pagar(valor: number) {
    setSaldo((s) => s - valor);

    setHistorico((h) => [
      { nome: "Pagamento", valor, tipo: "saida" },
      ...h,
    ]);
  }

  function transferir(valor: number) {
    setSaldo((s) => s - valor);

    setHistorico((h) => [
      { nome: "Transferência", valor, tipo: "saida" },
      ...h,
    ]);
  }

  function receber(valor: number) {
    setSaldo((s) => s + valor);

    setHistorico((h) => [
      { nome: "Recebido", valor, tipo: "entrada" },
      ...h,
    ]);
  }

  return (
    <CarteiraContext.Provider
      value={{
        saldo,
        historico,
        pagar,
        transferir,
        receber,
      }}
    >
      {children}
    </CarteiraContext.Provider>
  );
}

export function useCarteira() {
  return useContext(CarteiraContext);
}