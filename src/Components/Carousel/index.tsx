import React from 'react';
import { Container, Info, Products, NextIcon, PrevIcon } from './styles';
import data from "../../data";

const CarouselProducts: React.FC = () => {
    return (
        <Container>
            <Info>
                <h1>Lançamentos</h1>
                <a>Ver Mais</a>
            </Info>

            <Products itemsToShow={3}
            >
                {
                    data.Products.map(product =>

                        <div className="prod_container">
                            <div className="hidden-img">
                                <img src={product.image} className="img-slider" />
                            </div>
                            <h1>{product.name}</h1>
                            <p>{product.genre}</p>
                        </div>
                    )
                }
            </Products>

        </Container>
    );
}

export default CarouselProducts;