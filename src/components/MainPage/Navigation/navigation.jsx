import { useState } from "react";
import "./styleNavigation.css";





export default function Navigation({ listFilter, setListFilter, toDoList }) {

  const [colorButtonEntrada, setColorButtonEntrada]= useState("btn_Cinza")
  const [colorButtonDespeza, setColorButtonDespeza]= useState("btn_Cinza")
  const [colorButtonMostrarTodos, setColorButtonMostrarTodos]= useState("btn_Rosa")
  


  
  function filtrarEntradas() {
    const result = toDoList.filter((itens) => itens.type === "Entrada");
    setColorButtonEntrada("btn_Rosa")
    setColorButtonMostrarTodos("btn_Cinza")
    setColorButtonDespeza("btn_Cinza")
    setListFilter(result);
  }


  function filtrarDespezas() {
    const result = toDoList.filter((itens) => itens.type === "Despeza");
    setColorButtonDespeza("btn_Rosa")
    setColorButtonEntrada("btn_Cinza")
    setColorButtonMostrarTodos("btn_Cinza")
    setListFilter(result);
    console.log(result);
  }
  function mostrarTodos() {
    setColorButtonMostrarTodos("btn_Rosa")
    setColorButtonDespeza("btn_Cinza")
    setColorButtonEntrada("btn_Cinza")
    setListFilter(toDoList);
  }

  return (
    <>
      <nav className="containerNavigation">
        <h3>Resumo financeiro</h3>
        <div className="containerBtn">
          <button className={colorButtonMostrarTodos} onClick={() => mostrarTodos()}>
            Todos
          </button>
          <button className={colorButtonEntrada} onClick={() => filtrarEntradas()}>
            Entradas
          </button>
          <button className={colorButtonDespeza}  onClick={() => filtrarDespezas()}>
            Despezas
          </button>
        </div>
      </nav>
    </>
  );
}
