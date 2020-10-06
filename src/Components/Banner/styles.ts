import styled from 'styled-components';
import { Props } from "./chicago"

export const Container = styled.div`  
  width: 90%;
  height: 900px;

  margin: 0 auto;
  margin-top: 50px;
  
  position: relative;

  > img {
    width: 100%;
    height: 100%;
  }
  
`;

export const BannerElements = styled.div<Props>`
  position: Absolute;

  line-height : 0px;

  height: auto;

  margin-left: 5%;
  margin-top: ${(Props) =>
        Props.upInfo ? '3%' : '30%'};

  >div{
    height: 100%;
    width: 480px;
    padding: 10px;
    justify-content: center;
  }
`;

export const BannerSubtitle = styled.h2<Props>`
    font-family: "Bangers";
    font-size: 20px;
    letter-spacing: 3px;
    margin-left: 10px;
    text-shadow: 0.5vw 0.7vw 0.8vw rgba(0, 0, 0, 0.5);

    color:${(Props) =>
        Props.darkFont ? '#000000' : '#ffffff'};
`;

export const GraySubtitle = styled.h2<Props>`
    font-family: "Bangers";
    font-size: 20px;
    letter-spacing: 3px;
    margin-left: 10px;
    text-shadow: 0.5vw 0.7vw 0.8vw rgba(0, 0, 0, 0.5);

    color:${(Props) =>
        Props.grayFont ? '#666666' : '#ffffff'};
`;

export const BannerTitle = styled.h1<Props>`
    font-family: "Bangers";
    font-size: 160px;
    text-shadow: 0.5vw 0.7vw 0.8vw rgba(0, 0, 0, 0.5);

    color:${(Props) =>
        Props.darkFont ? '#000000' : '#ffffff'};
`;

export const BannerText = styled.p<Props>`
   font-family: "Montserrat";
    font-size: 15px;

    line-height : 20px;
    text-align: justify;

    padding: 10px;
    margin-top: -1.5vw;

    text-shadow: 0.5vw 0.7vw 0.8vw rgba(0, 0, 0, 0.5);
    color:${(Props) =>
        Props.darkFont ? '#000000' : '#ffffff'};
`;

