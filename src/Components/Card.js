import styled from "styled-components"
import setaplay from "../assets/seta_play.png"
import setavirar from "../assets/seta_virar.png"
import { useState } from "react"

export default function Card({ index, card, cont, useCont, text, useText }) {

    const [status, setStatus] = useState(0);
    const [turned, setTurned] = useState([])
    const [image, setImage] = useState(setaplay);

    function play() {

       const newstatus = status +1; 
       setStatus(newstatus)
       setImage(setavirar)
        // useText(card.question)
        console.log(image)
        console.log(status)
        // Question({ image, text, useText, card, useImage })
        // if (!turned.includes(card.question)) {
        //     let newstatus = status + 1;
        //     useStatus(newstatus)
        //     console.log(status)
        //     
        // }
    }


    switch (status) {
        case 0: // Pergunta X
            // console.log("Pergunta X")
            return (
                <>
                    <CardScreen>
                        <p>{`${text}` + (index + 1)}</p>
                        <img src={image}
                            alt="play"
                            onClick={play}
                        />
                    </CardScreen>
                </>)
        case 1: // Pergunta da Card
            console.log("Pergunta da Card")
            return (
                <>
                    <CardScreenQ>
                        <p>{card.question}</p>
                        <img src={image}
                            alt="Virar Card"
                            // onClick={() => play(image)}
                        />
                    </CardScreenQ>
                </>)
        case 2: // Resposta da Card
            console.log("Resposta")
            return (
                <>
                    <CardScreenAns>
                        <p>{card.answer}</p>

                        {/* onClick={() => console.log("respondeu") */}
                        {/* play(card) */}

                        <Answers>
                            <Red>Não lembrei</Red>
                            <Yellow>Quase não lembrei</Yellow>
                            <Green>Zap!</Green>
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