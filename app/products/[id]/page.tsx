import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/product-detail";
import Stripe from "stripe";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  return <ProductDetail product={product as Stripe.Product} />;
}

