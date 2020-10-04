import React from 'react';
import { Container, BannerElements, BannerSubtitle, BannerTitle, BannerText } from './styles';
import ColectionBTN from '../Buttons/colection';

export interface Props {
    upInfo?: boolean;
    darkFont?: boolean;
    grayFont?: boolean;
}

const LegendBanner: React.FC<Props> = ({
    upInfo,
    darkFont,
    grayFont
}) => {
    return (
        <Container>
            <BannerElements>
                <div>
                    <BannerSubtitle>Colection</BannerSubtitle>
                    <BannerTitle>Legend</BannerTitle>
                    <BannerText>BECOME A LEGEND, MAKE YOUR HISTORY</BannerText>
                    <ColectionBTN />
                </div>
            </BannerElements>
            <img src="./IMG/Football Colection/Banner.png" />
        </Container>
    );
}

export default LegendBanner;

