import { useRouter } from "next/router";
import { HeaderContainer } from "./styles";

import Link from "next/link";
import Image from "next/image";
import LogoSVG from "../../assets/Logo.svg";
import { Cart } from "../Cart";
export function Header() {
  const { pathname } = useRouter();

  const showCartButton = pathname !== "/success";

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={LogoSVG} alt="Logo do cabeçalho" />
      </Link>
      {showCartButton && <Cart />}
    </HeaderContainer>
  );
}
