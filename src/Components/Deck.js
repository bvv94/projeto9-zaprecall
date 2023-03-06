import { useState } from "react"
import Card from "./Card";

export default function Deck({ cards, cont, setCont }) {

    const [text, setText] = useState("Pergunta ");
    const [colour, setColour] = useState("")


    // console.log(cards[0].question);
    // console.log (text)
    // console.log(cards)

    return (
        <>
            {cards.map((card, index) =>
                <Card data-test="flashcard" key={index} index={index} card={card}
                    colour={colour} setColour={setColour}
                    cont={cont} setCont={setCont} text={text} useText={setText} />)}
        </>
    )





}


