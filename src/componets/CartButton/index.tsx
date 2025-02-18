import { ComponentProps } from 'react'
import {CartButtonContainer} from './styles'
import { Handbag } from '@phosphor-icons/react'
import { Span } from 'next/dist/trace'

type CartButtonProps = ComponentProps<typeof CartButtonContainer> & {
    quantity?: number
}
export function CartButton({quantity = 0,...rest}: CartButtonProps){
    return(
        <CartButtonContainer {...rest}>
            {quantity > 0 && <span>{quantity}</span>}
            <Handbag weight='bold'/>
        </CartButtonContainer>
    )
}