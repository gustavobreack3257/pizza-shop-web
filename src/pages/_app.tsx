import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import LogoIgniteHeaderSVG from '../assets/Logo.svg'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <header>
        <img src={LogoIgniteHeaderSVG.src} alt="Logo do cabeçalho da aplicação" />
      </header>

      <Component {...pageProps} />
    </div>
  )
}
