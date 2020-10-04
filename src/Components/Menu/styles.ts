import styled from "styled-components";
import { Search } from '@styled-icons/boxicons-regular/Search';
import {Cart} from '@styled-icons/boxicons-regular/Cart';

export const Container = styled.div`
  /*position: fixed;
  z-index: 2;*/

  display: flex;
  flex-direction: row;
  

  height: 50px;
  width: 100%;
  max-width: 1500px;

  margin: 0 auto;
  padding: 0;

  align-items: center;

  border-bottom: solid 2px;
  border-color:  #838383;
`;

export const Logo = styled.div`
  height: 100%;
  width: 100px;
  > img{
    height: 100%;
    width: 100px
  }
`;

export const Nav = styled.nav`
  flex: 1;
  text-align: right;
  height: 100%;

  > ul {
    display: inline-block;
    list-style-type: none;
  }

  >ul li {
    display: inline-block;
    margin-right: 2vw;
  }

  >ul li a {
    position: relative;
    text-decoration: none;

    color: #838383;
    font-family: "Montserrat";
    font-style: bold;
    transition: -5s;
    font-size: 1em;
    margin-top: 2vw;
  }

  >ul li a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    top: 100%;
    left: 0;
    background:#000;
    transition: transform 0.5s;
    transform: scaleX(0);
  }

  >ul li a:hover {
    color: #000}

  >ul li a:hover::after {
    transform: scale(1);
    transform-origin: left;
  }
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  color: #666666;
  cursor: pointer;

  :hover{
    color: #000000;
  }
`;

export const CartIcon = styled(Cart)`
  width: 20px;
  height: 20px;
  color: #666666;
  cursor: pointer;

  :hover{
    color: #000000;
  }
`;


