import React from 'react';
import { Container, Info, Products } from './styles';
import data from "../../data";

const CarouselMale: React.FC = () => {
    // Filtro de buscas para genero
    const arrayProducts = data;
    const evens = arrayProducts.filter(data.genre === "Masculino");

    return (
        <Container>
            <Info>
                <h1>Ofertas em alta - Masculino</h1>
                <a>Ver Mais</a>
            </Info>


            <Products itemsToShow={3}>
                {

                    evens.map(

                        <div className="prod_container">
                            <div className="hidden-img">
                                <img src={data.image} className="img-slider" />
                            </div>
                            <h1>{data.name}</h1>
                            <p>{data.genre}</p>
                        </div>
                    )
                }
            </Products>

        </Container>
    );
}

export default CarouselMale;