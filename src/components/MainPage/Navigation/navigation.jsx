import "./styleNavigation.css";
export default function Navigation({ listFilter, setListFilter, toDoList }) {
  function filtrarEntradas() {
    const result = toDoList.filter((itens) => itens.type === "Entrada");
    setListFilter(result);
  }

  function filtrarDespezas() {
    const result = toDoList.filter((itens) => itens.type === "Despeza");
    setListFilter(result);
    console.log(result);
  }
  function mostrarTodos() {
    /* const result = toDoList.filter(
      (item) => item.type === "Despeza" && item.type === "Entrada"
    ); */
    setListFilter(toDoList);
  }

  return (
    <>
      <nav className="containerNavigation">
        <h3>Resumo financeiro</h3>
        <div className="containerBtn">
          <button className="btn_Rosa" onClick={() => mostrarTodos()}>
            Todos
          </button>
          <button className="btn_Cinza" onClick={() => filtrarEntradas()}>
            Entradas
          </button>
          <button className="btn_Cinza" onClick={() => filtrarDespezas()}>
            Despezas
          </button>
        </div>
      </nav>
    </>
  );
}
