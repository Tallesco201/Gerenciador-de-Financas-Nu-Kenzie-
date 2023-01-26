import "./styleMainPage.css";
import { useState } from "react";
import Form from "./Form/form";
import Header from "./Header/header";
import List from "./List/List";
import TotalMoney from "./TotalMoney/TotalMoney";
import Navigation from "./Navigation/navigation";

export default function MainPage({ setLogin }) {
  const [toDoList, setToDoList] = useState([]);
  const [listFilter, setListFilter] = useState([]);

  const [valorInput, setValorInput] = useState("");
  const [valorDinheiro, setValorDinheiro] = useState("");
  const [tipoValor, setTipoValor] = useState("");

  return (
    <>
      <Header setLogin={setLogin} />
      <main className="mainPage">
        <aside className="aside">
          <div className="containerFormTotalMoney">
            <Form
              toDoList={toDoList}
              setToDoList={setToDoList}
              valorInput={valorInput}
              setValorInput={setValorInput}
              valorDinheiro={valorDinheiro}
              setValorDinheiro={setValorDinheiro}
              tipoValor={tipoValor}
              setTipoValor={setTipoValor}
            />
            <TotalMoney toDoList={toDoList} />
          </div>
        </aside>
        <div className="containerNavigationEList">
          <Navigation
            listFilter={listFilter}
            setListFilter={setListFilter}
            toDoList={toDoList}
          />
          <List
            tipoValor={tipoValor}
            listFilter={listFilter}
            toDoList={toDoList}
            setToDoList={setToDoList}
            setListFilter={setListFilter}
          />
        </div>
      </main>
    </>
  );
}
