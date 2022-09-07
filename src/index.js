import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import data from "./data/data.json";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
