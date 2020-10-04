import React from 'react';
import { Container, BannerElements, GraySubtitle, BannerTitle, BannerText} from './styles';
import VermaisBTN from '../Buttons/verMais';



export interface Props {
    upInfo?: boolean;
    darkFont?: boolean;
    grayFont?: boolean;
}

const BannerChicago: React.FC<Props> = ({
    upInfo,
    darkFont,
    grayFont
}) => {
    return (
        <Container>
            <BannerElements upInfo>
                <div>
                    <GraySubtitle grayFont>Air Jordan Retrô </GraySubtitle>
                    <BannerTitle darkFont>CHICAGO</BannerTitle>
                    <BannerText>O Off-White x Air Jordan 1 Retro High OG foi uma das colaborações de calçados mais esperadas de 2017. Foi a primeira vez que Virgil Abloh, fundador da marca de moda de Milão e Jordan Brand se uniram.</BannerText>
                    <VermaisBTN isBlack/>
                </div>
            </BannerElements>
            <img src="./IMG/Banner1/Chicago-banner.png" />
        </Container>
    );
}

export default BannerChicago;

