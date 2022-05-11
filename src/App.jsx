import React from 'react'
import MenuList from './componentes/topbar/MenuList'
import InformeSal from './componentes/menuRenda/InformeSal'
import ListaContas from './componentes/ListaContas/ListaContas'
import { SalarioContextProvider } from './context/SalarioContext'
import { Modal } from './componentes/ModalComponent/ModalComponent'

export default function App() {

  return (
    <SalarioContextProvider>
      <MenuList />
      <InformeSal />
      <Modal />
      <ListaContas />
    </SalarioContextProvider>
  );
}