import React from "react";
import styled from "styled-components";

export default function Rodape() {
  return (
    <Rod>
      <ul>
        <h1>Livros</h1>
        <li>Livros de Artes</li>
        <li>Livros de Ciências</li>
        <li>Livros Didáticos </li>
        <li>Livros Humanindades</li>
        <li>Livros de Literatura e Ficção</li>
        <li>Livros de Idiomas e Referência </li>
      </ul>
      <br />

      <ul>
        <h1>DVDs e Blu-ray</h1>
        <li>Filmes</li>
        <li>Infantil</li>
        <li>Séries</li>
        <li>Documentários</li>
        <li>Lançamentos de DvDs</li>
        <li>Shows e Apresentações</li>
      </ul>

      <ul>
        <h1>Pesquise</h1>
        <li>Eventos</li>
        <li>Doe Livros</li>
        <li>Bibliotecas</li>
        <li>Livros em Ofertas</li>
        <li>Os Grandes Autores</li>
        <li>Autores mais vendidos</li>
      </ul>
    </Rod>
  );
}

const Rod = styled.footer`
  background: #ccc;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
`;
