import React from "react";
import ReactDOM from "react-dom/client";
// Import component App (phải được export default trong App.jsx)
import App from "./App.jsx";
// Import CSS toàn cục (reset, font-family, ...)
import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);