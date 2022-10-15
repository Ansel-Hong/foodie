import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RecipeListProvider } from "./components/store/recipe-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecipeListProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipeListProvider>
);
