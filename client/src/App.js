import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import "semantic-ui-css/semantic.min.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [logged, setLogged] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  return (
    <div className="app">
      <BrowserRouter>
        <Header
          logged={logged}
          setLogged={setLogged}
          setAccessToken={setAccessToken}
        />
        <MainRouter logged={logged} accessToken={accessToken} />
      </BrowserRouter>
    </div>
  );
}

export default App;
