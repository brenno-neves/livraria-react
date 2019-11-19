import React from "react";
import styled from "styled-components";

import image1 from "../../src/img/image1.png";
import image2 from "../../src/img/image2.png";
import image3 from "../../src/img/image3.png";
import image4 from "../../src/img/image4.png";
import image5 from "../../src/img/image5.png";
import image6 from "../../src/img/image6.png";

export default function Livros() {
  const books = [
    {
      id: 1,
      caminhoIMG: image1,
      title: "Quincas Borba",
      author: "Machado de Assis",
      price: "R$ 30,00"
    },
    {
      id: 2,
      caminhoIMG: image2,
      title: "A Guerra do Fim do Mundo",
      author: "Mario Vargas Llosa",
      price: "R$ 40,00"
    },
    {
      id: 3,
      caminhoIMG: image3,
      title: "Os Irmãoes Karamázov",
      author: "Fiódor Dostoviéski",
      price: "R$ 50,00"
    },
    {
      id: 4,
      caminhoIMG: image4,
      title: "A Viagem de Théo",
      author: "Catherine Clement",
      price: "R$ 30,00"
    },
    {
      id: 5,
      caminhoIMG: image5,
      title: "Madame Bovary",
      author: "Gustave Flaubery",
      price: "R$ 40,00"
    },
    {
      id: 6,
      caminhoIMG: image6,
      title: "Triste Fim do Policarpo Quaresma",
      author: "Lima Barreto",
      price: "R$ 50,00"
    }
  ];

  return (
    <List>
      <h1>Lançamentos</h1>
      <Ul>
        {books.map(titulo => (
          <Li key={titulo.id}>
            <Img src={titulo.caminhoIMG} />
            <Titulo>{titulo.title}</Titulo>
            <Autor>{titulo.author}</Autor>
            <Preco>{titulo.price}</Preco>{" "}
          </Li>
        ))}
      </Ul>
    </List>
  );
}

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Titulo = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;

const Autor = styled.h4`
  font-family: Arial, Helvetica, sans-serif;
`;

const Preco = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: blue;
  font-weight: bold;
`;
const Img = styled.img``;
