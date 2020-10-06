import React from 'react';
import { Container, BannerElements, BannerSubtitle, BannerTitle, BannerText } from './styles';
import ColectionBTN from '../Buttons/colection';

export interface Props {
    upInfo?: boolean;
    darkFont?: boolean;
    grayFont?: boolean;
}

const BannerWoman: React.FC<Props> = ({
    upInfo,
    darkFont,
    grayFont
}) => {
    return (
        <Container>
            <BannerElements>
                <div>
                    <BannerSubtitle darkFont>Colections</BannerSubtitle>
                    <BannerTitle>Woman</BannerTitle>
                    <BannerText >BE POWERFULL</BannerText>
                    <ColectionBTN isBlack/>
                </div>
            </BannerElements>
            <img src="./IMG/WomanBanner/woman-banner.png" />
        </Container>
    );
}

export default BannerWoman;

