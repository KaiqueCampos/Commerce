import React from 'react';
import { Container, Info, Products } from './styles';
import data from "../../data";

const CarouselMale: React.FC = () => {

    // Filtro de buscas para genero
    const arrayProducts = data.Products;
    const evens = arrayProducts.filter(product => product.genre === "Masculino");

    return (
        <Container>
            <Info>
                <h1>Ofertas em alta - Masculino</h1>
                <a>Ver Mais</a>
            </Info>


            <Products itemsToShow={3}>
                {

                    evens.map(product =>

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

export default CarouselMale;