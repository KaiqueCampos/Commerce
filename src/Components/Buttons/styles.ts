import styled from 'styled-components';
import { Props } from "./colection";

export const Button = styled.button<Props>`
    width: 170px;
    height: 45px;

    font-family: 'Montserrat';
    font-size: 17px;
    color: ${(Props) =>
        Props.isBlack ? '#ffffff' : '#000000'};

    background-color: ${(Props) =>
        Props.isBlack ? '#000000' : '#ffffff'};

    box-shadow: 0.5vw 0.7vw 0.8vw rgba(0, 0, 0, 0.5);
    border-radius: 0.9vw;
    border: 0;

    justify-content: center;
    text-align: center;

    cursor: pointer;

    transition: all .1s ease-in-out;

   :hover{
       opacity: 75%;
    }
`;

