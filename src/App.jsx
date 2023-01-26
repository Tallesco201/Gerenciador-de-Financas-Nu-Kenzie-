import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage/welcomePage";
import MainPage from "./components/MainPage/mainPage";

function App() {
  const [Login, setLogin] = useState(false);
  return (
    <div className="container">
      <div>
        {Login ? (
          <MainPage setLogin={setLogin} />
        ) : (
          <WelcomePage setLogin={setLogin} />
        )}
      </div>
    </div>
  );
}

export default App;
