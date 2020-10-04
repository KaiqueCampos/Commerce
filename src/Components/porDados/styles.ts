import styled from 'styled-components';

export const BannerTitle = styled.h1`
    color: #5B0FB8;
    font-family: "Montserrat"
`;


export const GridContainer = styled.div`
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";
    grid-template-columns: 1fr;
    grid-auto-rows: 5rem 1fr 5rem;

    >header{
        grid-area: header;
        font-family: "Montserrat";
        color: #f00;
        display: flex;
    }

    >main{
        grid-area: main;
    }

    >footer{
        grid-area: footer;
    }

    >content{
        display: flex;
        justify-items: center;
        align-items: center;
        
    }
`;

export const Products = styled.ul`
    display: flex;
    justify-items: center;
    align-items: center;
    color: red;
    background-color:  #5B0FB8;

    >li{
        list-style-type: none;
        padding: 0;
        flex: 0 1 34rem;
        margin: 1rem;
        height: 750px;
    }

    >product{
    }

    >li div img{
        width: 500px;
        height: 500px;
    }
`;

