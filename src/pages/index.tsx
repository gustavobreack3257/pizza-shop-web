import Image from "next/image";
import { styled } from "../styles";

import {HomeContainer, Product} from '../styles/pages/home'
import ShirtProductOne from '../assets/camisetas/t-shirt1.png'
import ShirtProductTwo from '../assets/camisetas/t-shirt2.png'
import ShirtProductThree from '../assets/camisetas/t-shirt3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={ShirtProductOne} height={480} alt="Imagem do Produto" priority/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={ShirtProductTwo} height={480} alt="Imagem do Produto" priority/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
