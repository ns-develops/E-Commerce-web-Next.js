import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/product-detail";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  return <ProductDetail product={product} />;
}

/*test deploy, removing mp4 large file*/