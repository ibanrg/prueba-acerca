import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers";

import "./index.css";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
);

const version = "1.0.0";
const consoleVersionStyle = [
    "background: linear-gradient(rgba(85, 193, 233, 1), rgba(0, 93, 185, 1))",
    "border: 1px solid #3E0E02",
    "color: white",
    "display: block",
    "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
    "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
    "line-height: 40px",
    "text-align: center",
    "font-weight: bold",
    "padding: 4px"
].join(";");

console.info(
    "%cPrueba Acerca - Versión: " + version,
    consoleVersionStyle
);

// registerServiceWorker();
