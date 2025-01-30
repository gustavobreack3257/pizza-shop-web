import Image from "next/image";

import {useKeenSlider} from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import {HomeContainer, Product} from '../styles/pages/home'

import ShirtProductOne from '../assets/camisetas/t-shirt1.png'
import ShirtProductTwo from '../assets/camisetas/t-shirt2.png'
import ShirtProductThree from '../assets/camisetas/t-shirt3.png'
import ShirtProductFour from '../assets/camisetas/t-shirt4.png'

import 'keen-slider/keen-slider.min.css'

import Stripe from "stripe";
import { GetServerSideProps, GetStaticProps } from "next";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}
export default function Home({products}: HomeProps) {
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
      {products.map(product => {
        return (
          <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} height={480} width={500} alt="Imagem do Produto" priority/>

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
        )
      })}



    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

  console.log('rodou')
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ! / 100,
    }
  })

  return {
    props: {
      products
    },
      revalidate: 60 * 60 * 2

  }
}