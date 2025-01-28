import Image from "next/image";

import {useKeenSlider} from 'keen-slider/react'

import {HomeContainer, Product} from '../styles/pages/home'
import ShirtProductOne from '../assets/camisetas/t-shirt1.png'
import ShirtProductTwo from '../assets/camisetas/t-shirt2.png'
import ShirtProductThree from '../assets/camisetas/t-shirt3.png'
import ShirtProductFour from '../assets/camisetas/t-shirt4.png'

import 'keen-slider/keen-slider.min.css'


export default function Home(props: { list: any; }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    },
    loop: false,
    mode: 'free',
    rubberband: false,
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>
      <Product className="keen-slider__slide">
        <Image src={ShirtProductOne} height={480} alt="Imagem do Produto" priority/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={ShirtProductTwo} height={480} alt="Imagem do Produto" priority/>

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={ShirtProductThree} height={480} alt="Imagem do Produto" priority/>

        <footer>
          <strong>Camiseta W</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={ShirtProductFour} height={480} alt="Imagem do Produto" priority/>

        <footer>
          <strong>Camiseta J</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log('rodou')

  return {
    props: {
      list: [1, 2, 3]
    }
  }
}