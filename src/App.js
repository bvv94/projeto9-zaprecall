import React from "react";
import { useState } from "react";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Deck from "./Components/Deck";

export default function App() {

  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
  const [cont, setCont] = useState(0)
  

  return (
    <>
      <GlobalStyle />

      <Container>
        <NavBar />
        <Deck cards={cards} cont={cont} setCont={setCont} />
        <Footer cont={cont} cards={cards} />
      </Container>

    </>
  );
}

const Container = styled.div`
  background-color: #FB6B6B;
  width: auto;
  min-height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`