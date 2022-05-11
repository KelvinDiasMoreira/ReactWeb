import React, { useState } from "react";
import "./modalComponent.css";

export function Modal() {
const [targeT, setTarget] = useState({ valor: "", sobre: "", data: "", });


  const handleOnSubmit = (e) => {
    e.preventDefault();
  }

  console.log(targeT);

  return (
    <div className="background-modal">
      <div className="container-modal">

        <button className="button-style">X</button>
        <form onSubmit={handleOnSubmit}>
          <div className="modal-contents">

            <p >Qual o Valor da conta: </p>
            <input className="input-modal-number" value={targeT.valor} type="text" placeholder="Valor da conta" onChange={(e) =>setTarget({...targeT, valor: e.target.value}) } />

            <p>Sobre a conta </p>
            <input className="input-modal-number" value={targeT.sobre} type="text" placeholder="Obs: aluguel" onChange={(e) => setTarget({...targeT, sobre: e.target.value}) } />

            <p>Qual a data da conta </p>
            <input className="input-modal-number" value={targeT.data} type="text" placeholder="Data da conta" onChange={(e) =>setTarget({...targeT, data: e.target.value}) } />

          </div>
          <button className="button-modal-confirm">Confirmar</button>
        </form>
      </div>
    </div>
  )
}