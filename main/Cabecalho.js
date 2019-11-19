import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <Cabeca>
      <Titulo>Livraria Dom Casmurro</Titulo>
      <Navigation>
        <Link to="/">HOME</Link>
      </Navigation>

      <Navigation>
        <Link to="/sobre">SOBRE</Link>
      </Navigation>

      <Navigation>
        <Link to="/vendidos">VENDIDOS</Link>
      </Navigation>

      <Navigation>
        <Link to="/recomendado">RECOMENDADO</Link>
      </Navigation>

      <Navigation>
        <Link to="/contato">CONTATO</Link>
      </Navigation>
    </Cabeca>
  );
}

const Cabeca = styled.header`
  display: flex;
  background: #1086dc;
  align-items: center;
  font-size: 1rem;
  justify-content: space-between;
  color: white;
`;

const Navigation = styled(Link)`
  margin: 10px;
`;

const Titulo = styled.h1`
  font-size: 1.5rem;
`;
