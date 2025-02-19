import * as Dialog from "@radix-ui/react-dialog";
import * as S from "./styles";

import { CartButton } from "../CartButton";
import { X } from "@phosphor-icons/react";

import ShirtSVG from '../../assets/camisetas/t-shirt1.png'
import Image from "next/image";
export function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <S.CartContent>
          <S.CartClose>
            <X size={24} weight="bold" />
          </S.CartClose>
          <h2>Sacola de compra</h2>

          <section>
            <S.CartProduct>
              <S.CartProductImage>
                <Image width={100} height={93} src={ShirtSVG} alt="Imagem do produto"/>
              </S.CartProductImage>
              <S.CartProductDetails>
                <p>Camiseta rocket</p>
                <strong>R$ 69,90</strong>
                <button>
                    Remover
                </button>
              </S.CartProductDetails>
            </S.CartProduct>
          </section>

            <S.CartFinalization>
                <S.FinalizationDetails>
                    <div>
                        <span>Quantidade</span>
                        <p>
                            1 item
                        </p>
                    </div>
                    <div>
                        <span>Valor total</span>
                        <p>R$ 69,90</p>
                    </div>
                </S.FinalizationDetails>
                <button>
                    Finalizar Compra
                </button>
            </S.CartFinalization>
        </S.CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
