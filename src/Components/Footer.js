import styled from "styled-components"

export default function Footer ({cont, cards}){

    const perguntasrespondidas = cards.length;

    return (
        <Barra data-test="footer">
            <p>{cont}/{perguntasrespondidas} CONCLUÍDOS</p>
        </Barra>
    )
}

const Barra = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`