import "moment/dist/locale/ru";
import moment from "moment";
import { ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

moment.locale(window.navigator.language);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
);
