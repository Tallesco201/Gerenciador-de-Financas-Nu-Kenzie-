import "./styleCard.css";
export default function Card({
  toDoList,
  setToDoList,
  tipoValor,
  element,
  setListFilter,
  listFilter,
}) {
  function handleItenList(iten) {
    setToDoList(toDoList.filter((itensList) => itensList !== iten));
    setListFilter(listFilter.filter((itensList) => itensList !== iten));
  }
  return (
    <>
      {tipoValor === "Entrada" ? (
        <div className="containerListVerde">
          <div className="ContainerDescriptionEType">
            <h3 className="description">{element.description}</h3>
            <span className="valor">R$ {element.value}</span>
            <button className="lixeira" onClick={() => handleItenList(element)}>
              <img
                className="imgLixeira"
                src="assets/trash.png"
                alt="lixeira"
              />
            </button>
          </div>
          <p className="type">{element.type}</p>
        </div>
      ) : (
        <div className="containerListVermelho">
          <div className="ContainerDescriptionEType">
            <h3 className="description">{element.description}</h3>
            <span className="valor">R$ {element.value}</span>
            <button className="lixeira" onClick={() => handleItenList(element)}>
              <img
                className="imgLixeira"
                src="assets/trash.png"
                alt="lixeira"
              />
            </button>
          </div>
          <p className="type">{element.type}</p>
        </div>
      )}
    </>
  );
}
