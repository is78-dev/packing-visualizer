import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Page from "./features/Page";

const App: React.FC = () => {
  return <Page />;
};

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
