import React from 'react';
import {Container} from './styles';
import Menu from "../Menu/Index";
import BannerChicago from "../Banner/chicago";
import BannerTravis from "../Banner/travis";
import LegendBanner from "../Banner/Legend";
import BannerWoman from '../Banner/woman';
import CarouselRelease from '../Carousel/Release';
import WomanCarousel from '../Carousel/Woman';
import CarouselMale from '../Carousel/Male';
import BannerMichael from '../Banner/MichaelJordan';

const Layout: React.FC = () => {
  return (
    <Container>
      <Menu/>
      <BannerChicago/>
      <CarouselRelease/>
      <BannerTravis/>
      <WomanCarousel/>
      <BannerWoman/>
      <LegendBanner/>
      <CarouselMale/>
      <BannerMichael/>
    </Container>
  );
}

export default Layout;
