import setaplay from "../assets/seta_play.png"
import { useState } from "react"
import styled from "styled-components"
// import Pergunta from "./Pergunta"
// import Resposta from "./Resposta"

export default function Inicio({ cards }) {
    const [visible, setVisible] = useState(true);
    const [texto, useTexto] = useState(cards.inicial);
    const [imagem, useImagem] = useState(setaplay);
    const [icone, useIcone] = useState(0);

    console.log(cards);

    switch (icone) {
        case 0:
            return (
                <> chegou no inicio
                    {cards.map((ob, index) =>
                        <Cartao key={index} visible={visible}>
                            <p>{ob.inicial}</p>
                            {/* <p>{o.pergunta}</p> */}
                            {/* <p>{o.resposta}</p> */}
                            <img src={imagem} 
                            alt="play" 
                            // onClick={() => Pergunta({ index, visible, imagem, icone, useIcone, texto, useTexto, cards, useImagem })} 
                            />
                        </Cartao>)}
                </>
            )

        // case 1: <Pergunta />
        //     break
        // case 2: <Resposta />
            break

    }

}


const Cartao = styled.div`
    
    font-family: 'recursive';
    font-size: 16px;
    font-weight: 700;
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ion-icon {
        width: 20px;
        height: 23px;
    }
    img {
        width: 15px;
        height: 18px;
    }
`