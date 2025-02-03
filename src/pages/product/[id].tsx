import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product(){
    const {query} = useRouter()

    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta Igniter</h1>
                <span>R$ 54,90</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem praesentium voluptatum omnis deserunt at, dolores minima provident assumenda voluptatem culpa neque aspernatur nemo vitae! Cum cupiditate incidunt quae nisi nemo?</p>

                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}