import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.scss";

const container = document.getElementById("root")!;
const root = createRoot(container);
const routing = (
  <Router>
    <App />
  </Router>
);

root.render(routing);
