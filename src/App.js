import {BrowserRouter, HashRouter} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./routes/Router";
function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Router />
      </HashRouter>
    </>
  );
}

export default App;
