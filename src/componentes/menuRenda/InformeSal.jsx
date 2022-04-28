import React, { useState } from "react";
import "./InformeSal.css";
import { useSalario } from "../../hooks/useSalario";


export default function InformeSal() {
  const [valor, setValor] = useState("0")
  const { handleGetSalario } = useSalario()

  const handleOnSubmit = (e) => {
    e.preventDefault();

    handleGetSalario(valor)
  }

  return (
    <>
      <div className="container_informe">
        <div id="container_informeSal">
          <h2>Informe sua renda</h2>
        </div>
        <form className="container_form" onSubmit={handleOnSubmit}>
          <div className="container_input">
            <input className='input-renda' type="number" value={valor} placeholder="Digite sua Renda" onChange={(e) => setValor(e.target.value)} />
          </div>
          <button type="submit" className="bottao_input">Salvar</button>
        </form>
      </div>
    </>
  )
}
