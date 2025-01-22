import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import LogoIgniteHeaderSVG from '../assets/Logo.svg'
import {Container, Header} from '../styles/pages/app'

import Image from 'next/image'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoIgniteHeaderSVG} alt="Logo do cabeçalho da aplicação" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
