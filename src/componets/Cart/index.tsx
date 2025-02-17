import * as Dialog  from '@radix-ui/react-dialog'
import * as S from './styles'
import { CartButton } from '../CartButton'
import { X } from '@phosphor-icons/react'
export function Cart() {
    return(
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton/>
            </Dialog.Trigger>

            <Dialog.Portal>
                <S.CartContent>
                    <S.CartClose>
                        <X size={24} weight='bold'/>
                    </S.CartClose>
                </S.CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}