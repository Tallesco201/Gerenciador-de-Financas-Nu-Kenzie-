import "./styleTotalMoney.css";
export default function TotalMoney({ toDoList }) {
  const total = toDoList.reduce((sum, valor) => sum + valor.value, 0);
  return (
    <div className="total-money">
      <div className="containerMoney">
        <h3>Valor total:</h3>
        <h3 className="saldo">$ {total}</h3>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
}
