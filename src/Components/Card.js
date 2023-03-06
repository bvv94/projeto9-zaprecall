import styled from "styled-components"
import setaplay from "../assets/seta_play.png"
import setavirar from "../assets/seta_virar.png"
import { useState } from "react"
import red from "../assets/icone_erro.png"
import yellow from "../assets/icone_quase.png"
import green from "../assets/icone_certo.png"

export default function Card({ colour, setColour, index, card, cont, setCont, text, useText }) {

    // const [colour, setColour] = useState("")
    const [status, setStatus] = useState(0);
    const [icon, setIcon] = useState("no")
    const [image, setImage] = useState(setaplay);
    const [cardAnswered, setCardAnswered] = useState(false)
    

    function play() {

        const newstatus = status + 1;
        setStatus(newstatus)
        setImage(setavirar)
        // useText(card.question)
        // console.log(image)
        // console.log(status)
        // Question({ image, text, useText, card, useImage })
        // if (!turned.includes(card.question)) {
        //     let newstatus = status + 1;
        //     useStatus(newstatus)
        //     console.log(status)
        //     
        // }
    }
    function answer() {
        const newstatus = status + 1;
        setStatus(newstatus)
    }

    function answered(props) {
        setCardAnswered(true)
        console.log("Entrou Answererd")
        console.log(props)
        setStatus(0)
        setCont (cont + 1)
        setIcon(props)
    }

    function Icon(){
        switch (icon){
            case "green":
                return (green)
            case "yellow":
                return (yellow)
            case "red":
                return (red)
            default : 
                return setaplay
        }
    }


    switch (status) {
        case 0: // Pergunta X
            // console.log("Pergunta X")
            return (
                <>
                    {!cardAnswered ? 
                    (<CardScreen data-test="flashcard">
                        <p data-test="flashcard-text">{`${text}` + (index + 1)}</p>
                        <img data-test="play-btn" src={Icon()}
                            alt="play"
                            onClick={play}
                        />
                    </CardScreen>) :
                    (<CardScreenEnd icon={icon} data-test="flashcard">
                        <p data-test="flashcard-text">{`${text}` + (index + 1)}</p>
                        <img data-test="no-icon zap-icon partial-icon" src={Icon()}
                        //  zap-icon partial-icon
                            alt="play"
                        />
                    </CardScreenEnd>)
                    }
                </>)
        case 1: // Pergunta da Card
            // console.log("Pergunta da Card")
            return (
                <>
                    <CardScreenQ data-test="flashcard">
                        <p data-test="flashcard-text">{card.question}</p>
                        <img data-test="turn-btn" src={image}
                            alt="Virar Card"
                            onClick={answer}
                        />
                    </CardScreenQ>
                </>)
        case 2: // Resposta da Card
            // console.log("Resposta")
            return (
                <>
                    <CardScreenAns data-test="flashcard">
                        <p data-test="flashcard-text">{card.answer}</p>

                        {/* onClick={() => console.log("respondeu") */}
                        {/* play(card) */}

                        <Answers>
                            <Red data-test="no-btn" c={"red"} onClick={() => answered("red")}>Não lembrei</Red>
                            <Yellow data-test="partial-btn" c={"yellow"} onClick={() => answered("yellow")}>Quase não lembrei</Yellow>
                            <Green data-test="zap-btn" c={"green"} onClick={() => answered("green")}>Zap!</Green>
                        </Answers>
                    </CardScreenAns>
                </>)
    }
}

const Answers = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
        button{
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        padding:5px;
    }
`
const Red = styled.button`
    background-color: #FF3030;
    border-color: #FF3030;
`
const Yellow = styled.button`
    background-color: #FF922E;
    border-color: #FF922E;
`
const Green = styled.button`
    background-color: #2FBE34;
    border-color: #2FBE34;
`
const CardScreen = styled.div`  
    color: #333333;
  
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
const CardScreenEnd = styled.div`
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
    text-decoration:${props => props.icon === "no" ? "none": "line-through"} ;
    color: ${props => {
        switch (props.icon){
            case "green":
                return "#2FBE34"
            case "yellow":
                return "#FF922E"
            case "red":
                return "#FF3030"
            default : 
                return "#333333"
        }}};
`

const CardScreenQ = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`
const CardScreenAns = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`