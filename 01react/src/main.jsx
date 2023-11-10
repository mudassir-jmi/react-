import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

const User = "Akhter";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visite google",
  User // evaluated expression or variable value
);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  reactElement
  // </React.StrictMode>,
);
