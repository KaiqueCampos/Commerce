import React from 'react';
import {Container} from './styles';
import Menu from "../Menu/Index";
import BannerChicago from "../Banner/chicago"
import BannerTravis from "../Banner/travis"
import LegendBanner from "../Banner/Legend"
import CarouselProducts from '../Carousel';

const Layout: React.FC = () => {
  return (
    <Container>
      <Menu/>
      <BannerChicago/>
      <CarouselProducts/>
      <BannerTravis/>
      <LegendBanner/>
    </Container>
  );
}

export default Layout;
