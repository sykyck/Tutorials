import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
