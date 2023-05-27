import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ContextSetter, ContextProvider } from "./contexts/ContextSetter";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { ContextSetter };

root.render(
  <StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </StrictMode>
);
