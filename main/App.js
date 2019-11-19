import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function App() {
  return (
    <BrowserRouter>
      <Corpo>
        <Cabecalho />
        <Routes />
        <Rodape />
      </Corpo>
    </BrowserRouter>
  );
}

const Corpo = styled.body`
  width: 1266px;
  height: 600px;
  font-family: Arial, Helvetica, sans-serif;
`;
