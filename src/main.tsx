import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "tailwindcss/tailwind.css";

createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
