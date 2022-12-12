import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
