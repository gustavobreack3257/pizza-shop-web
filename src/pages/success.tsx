import { ImageContainer, SuccessContainer } from "../styles/pages/success";

import Image from "next/image";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface SuccessProps {
  costumerName: string;
  product: {
    name: string
    imageUrl: string
  }
}
export default function Success({costumerName, product}: SuccessProps) {
  return (
    <SuccessContainer>
      <h1>Compra realizada</h1>

      <ImageContainer>
        <Image src={product.imageUrl} width={120} height={110} alt="Imagem do produto" />
      </ImageContainer>

      <p>
        Uhuul <strong>{costumerName}</strong>, sua{" "}
        <strong>{product.name}</strong> já está a caminho da sua
        casa.
      </p>

      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log('query', query.session_Id)
  const sessionId = String(query.session_id);

  console.log("ID",sessionId)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  console.log("requisicao",session)
  const costumerName = session.customer_details.name;
  const product = session.line_items.data[0].price.product as Stripe.Product;
  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}