import { useState } from "react"
import styled from "styled-components"
import Card from "./Card";

export default function Deck({ cards, cont, setCont }) {

    const [visible, setVisible] = useState(true);
    const [text, setText] = useState("Pergunta ");
    const [colour, setColour] = useState("")
    const [icone, setIcone] = useState(0);
    

    // console.log(cards[0].question);
    // console.log (text)
    // console.log(cards)

    switch (icone) {
        case 0:
            return (
                <> 
                    {cards.map((card, index) =>
                        <Card data-test="flashcard" key={index} index={index} card={card}
                        colour={colour} setColour={setColour}
                        cont={cont} setCont={setCont} text={text} useText={setText}/>)}
                </>
                
            )

            // case 1: <Pergunta />
            //     break
            // case 2: <Resposta />
            break

    }


   

}


