import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { SearchContextProvider } from "./contexts/SearchContextProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <SearchContextProvider>
    <Router>
      <App />
    </Router>
  </SearchContextProvider>
);
