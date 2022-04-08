import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "./context";
import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
