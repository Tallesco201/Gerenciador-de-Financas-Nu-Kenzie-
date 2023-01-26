import Card from "../Card/card";
import "./styleList.css";
export default function List({
  listFilter,
  toDoList,
  setToDoList,
  setListFilter,
}) {
  return (
    <>
      {toDoList.length === 0 ? (
        <>
          <h3>Você ainda não possui nenhum lançamento </h3>
          <img className="imgNoCard" src="assets/NoCard.png" alt="NoCard" />
        </>
      ) : listFilter.length === 0 ? (
        toDoList.map((element, index) => (
          <Card
            key={index}
            setListFilter={setListFilter}
            listFilter={listFilter}
            toDoList={toDoList}
            setToDoList={setToDoList}
            tipoValor={element.type}
            element={element}
          />
        ))
      ) : (
        listFilter.map((element, index) => (
          <Card
            key={index}
            listFilter={listFilter}
            toDoList={toDoList}
            setListFilter={setListFilter}
            setToDoList={setToDoList}
            tipoValor={element.type}
            element={element}
          />
        ))
      )}
    </>
  );
}
