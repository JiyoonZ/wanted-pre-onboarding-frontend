import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ThemeProvider} from "styled-components";
import {themeColor} from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeColor}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);