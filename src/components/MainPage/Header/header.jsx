import "./styleHeader.css";

export default function Header({ setLogin }) {
  function backToWelcomePage() {
    setLogin(false);
  }
  return (
    <>
      <header className="headerContainer">
        <img src="assets/Nu Kenzie Preto.png" alt="Logo" />
        <button className="btn" onClick={() => backToWelcomePage()}>
          Inicio
        </button>
      </header>
    </>
  );
}
