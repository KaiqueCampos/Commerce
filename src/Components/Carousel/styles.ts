import styled from 'styled-components'
import { NavigateNext } from '@styled-icons/material-sharp/NavigateNext'
import { NavigateBefore } from '@styled-icons/material-sharp/NavigateBefore'
import Carousel from 'react-elastic-carousel'



export const NextIcon = styled(NavigateNext)`
  position: absolute;
    display: block;
    margin-left: 96%;
    margin-top: -25%;

    height: 50px;
    width: 50px;

    border-radius: 50%;
    border: solid 0px;
    cursor: pointer;

    transition: opacity 0.5s;
    background-color: #000000;
    color: white;

    :hover{
        opacity: 70%;
    }
`;

export const PrevIcon = styled(NavigateBefore)`
  position: absolute;
    display: block;
    margin-left: 1%;
    margin-top: -25%;

    height: 50px;
    width: 50px;

    border-radius: 50%;
    border: solid 0px;
    cursor: pointer;

    transition: opacity 0.5s;
    background-color: #000000;
    color: white;

    :hover{
        opacity: 70%;
    }
`;


export const Container = styled.div`
    width: 91%;
  height: auto;

  margin: 0 auto;
  margin-top: 50px;
  
  position: relative;
`;

export const Info = styled.div`
    height: 50px;

    display: flex;

    margin: 0 auto;

    justify-content: space-between;

    > h1{
        margin: auto 0;
        margin-left: 0.5rem;
        font-family: 'Montserrat';
    }

    > a{
        margin: auto 0;
        margin-right: 0.7rem;
        font-family: 'Montserrat';
        font-size: 20px;
        cursor: pointer;

        transition: all 0.3s;

        :hover{
            color: #666666;
        }
    }
`;

export const Products = styled(Carousel)`
    display: flex;
    justify-items: center;
    align-items: center;
    margin-top: 10px;
    height: 720px;

    position: relative;

   
    .prod_container{
        width: 100%;
        margin: 3.5px;
        position: relative;
        
        h1{
            font-family: 'Montserrat';
            font-size: 23px;
            color: #000000;

            margin: 5px;
        }

        p{
            font-family: 'Montserrat';
            font-size: 18px;
            color: #000000;

            margin: 15px;
        }
    }

    .hidden-img {
        overflow: hidden;
    }

    .img-slider{
        max-width: 100%;
        height: 600px;
        cursor: pointer;

        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;

        :hover{
            -moz-tranform: scale(1.05);
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
        }
    }

    .rec.rec-arrow {
    position: absolute;
    margin-top: -5%;

    border-radius: 50%;
    background-color: #000000;
    color: #ffffff;
    }

    .rec.rec-arrow:hover{
        opacity: 80%;
    }

    .rec.rec-arrow-left{
        z-index: 2;
        margin-left: 1%;

    }

    .rec.rec-arrow-right{
        margin-left: 96%;
    }

    .rec-dot{
        display: none;
    }
`;
