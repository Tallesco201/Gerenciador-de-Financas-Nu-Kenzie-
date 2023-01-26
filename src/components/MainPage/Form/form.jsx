import "./styleForm.css";
export default function Form({
  toDoList,
  setToDoList,
  valorInput,
  setValorInput,
  valorDinheiro,
  setValorDinheiro,
  tipoValor,
  setTipoValor,
}) {
  function verificacao(e) {
    e.preventDefault();
    if (valorInput !== "" && valorDinheiro !== "" && tipoValor !== "") {
      ReceberValorForm();
    }
  }

  function ReceberValorForm() {
    const novoObjeto = {
      description: valorInput,
      type: tipoValor,
      value:
        tipoValor === "Despeza"
          ? parseInt(valorDinheiro) * -1
          : parseInt(valorDinheiro),
    };

    setToDoList([...toDoList, novoObjeto]);
  }

  return (
    <>
      <form onSubmit={(event) => verificacao(event)}>
        <div className="formCima">
          <p>Descrição</p>
          <input
            type="text"
            value={valorInput}
            placeholder="Digite aqui sua descrição"
            onChange={(e) => setValorInput(e.target.value)}
          />
          <span className=" strigDeExemplo">Ex: compra de roupas</span>
        </div>
        <div className="formMeio">
          <div className="divValor">
            <p>Valor</p>
            <input
              type="number"
              value={valorDinheiro}
              placeholder="0"
              min="1"
              onChange={(e) => setValorDinheiro(e.target.value)}
            />
            {/*  <p id="cifrao">R$</p> */}
          </div>
          <div className="divValor">
            <p>Tipo de valor</p>
            <label>
              <select
                value={tipoValor}
                onChange={(event) => {
                  event.preventDefault();
                  setTipoValor(event.target.value);
                }}
              >
                <option value="">Selecione</option>
                <option value="Entrada">Entrada</option>
                <option value="Despeza">Despeza</option>
              </select>
            </label>
          </div>
        </div>
        <button type="submit">Inserir Valor</button>
      </form>
    </>
  );
}
