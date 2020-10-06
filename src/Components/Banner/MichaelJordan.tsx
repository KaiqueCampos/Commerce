import React from 'react';
import { Container, BannerElements, BannerSubtitle, BannerTitle, BannerText } from './styles';
import ColectionBTN from '../Buttons/colection';

export interface Props {
    upInfo?: boolean;
    darkFont?: boolean;
    grayFont?: boolean;
}

const BannerMichael: React.FC<Props> = ({
    upInfo,
    darkFont,
    grayFont
}) => {
    return (
        <Container>
            <BannerElements>
                <div>
                    <BannerSubtitle>Travis Scott</BannerSubtitle>
                    <BannerTitle>Colection</BannerTitle>
                    <BannerText>BE AN ASTROWOLRD, A PHENOMENAL <br/> BECOME LA FLAME</BannerText>
                    <ColectionBTN />
                </div>
            </BannerElements>
            <img src="./IMG/Michaeljordan/Banner.jpg" />
        </Container>
    );
}

export default BannerMichael;

