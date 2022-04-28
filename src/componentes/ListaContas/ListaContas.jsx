import React, { useEffect, useState} from "react";
import "./ListaContas.css";
import { useSalario } from "../../hooks/useSalario";

export default function ListaContas() {
  const { salary } = useSalario()
  const [valorGastos, setValorGastos] = useState()

  useEffect(() => {
    console.log(salary)
    setValorGastos(salary)
  }, [salary])


  return (
    <>
      <div className="container_Gastos">
        <h2>Seus gastos totais: R${valorGastos}</h2>
        <div className="container_Botao">
          <button>Adicionar</button>
          <button>Remover</button>
        </div>
      </div>
      <div className="container_DosGastos">
        <div id="cont-valor">
          <p>Valor</p>
        </div>
        <div id="cont-espec">
          <p>Especificação</p>
        </div>
        <div id="cont-data">
          <p>Data</p>
        </div>
      </div>
    </>
  );
}
