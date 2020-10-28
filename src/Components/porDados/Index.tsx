import React from 'react';
import { GridContainer, Products } from './styles';
import data from "../../data";

export const Banner: React.FC = () => {
  return(
      <GridContainer>
        <header>Amazona</header>

        <main>
          <div className="contenent">
           <Products>
             {
              data.map(
                <li>
                  <div className="product">
                    <img src={data.image}></img>
                  </div>
                </li>)
              }
            </Products>
          </div>
          
        </main>

        <footer>Thanks</footer>
      </GridContainer>
  );
}

export default Banner;