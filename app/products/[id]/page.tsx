import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/product-detail";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await stripe.products.retrieve(params.id, {
    expand: ["default_price"],
  });

  return <ProductDetail product={product} />;
}
