import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
const root = createRoot(document.getElementById("app"));
root.render(<App></App>);

// import React from "react";
// import { render } from "react-dom";
// render(<h1>Hola mundo</h1>, document.getElementById("app"));
