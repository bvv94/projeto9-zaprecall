import styled from "styled-components"
import img from "../assets/logo.png"


export default function NavBar() {
    return (
        <Logo>
            <img src={img} alt="logo"/><p>ZapRecall</p>
        </Logo>
    )
}

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    p {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`