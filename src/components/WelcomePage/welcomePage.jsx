import "./styleWelcomePage.css";

export default function WelcomePage({ setLogin }) {
  function LoginTrue() {
    setLogin(true);
  }

  return (
    <>
      <main className="HomePage">
        <aside>
          <div className="conteudos">
            <img
              className="logo"
              src="assets/Nu Kenzie.png"
              alt="Logo Nu Kenzie Branco"
            />
            <h1>Centralize o controle das suas finanças</h1>
            <p className="bordao">de forma rápida e segura</p>
            <button className="button" onClick={() => LoginTrue()}>
              Iniciar
            </button>
          </div>
          <div className="divImgIlustracao">
            <img
              className="ilustracao"
              src="assets/illustration.png"
              alt="Ilustração"
            />
          </div>
        </aside>
      </main>
    </>
  );
}
