import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import LogoIgniteHeaderSVG from "../assets/Logo.svg";
import { Container } from "../styles/pages/app";
import { Header } from "../componets/Header/index";

import Image from "next/image";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
