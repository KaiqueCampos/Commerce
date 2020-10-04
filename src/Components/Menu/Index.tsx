import React from 'react';
import { Container, Logo, Nav, SearchIcon, CartIcon } from './styles';


const Menu: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src="./IMG/teste.jpg"></img>
      </Logo>
      <Nav>
        <ul>
          <li><a href="">Produtos</a></li>
          <li><a href="">Lançamentos</a></li>
          <li><a href="">Contato</a></li>
          <li><a href="">Sobre Nós</a></li>
          <li><a href="">Etc</a></li>
          <li><SearchIcon/></li>
          <li><CartIcon/></li>
        </ul>
      </Nav>
    </Container>
  );
}

export default Menu;