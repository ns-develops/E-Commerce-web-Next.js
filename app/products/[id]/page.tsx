import { stripe } from "@/lib/stripe";
import { ProductDetail } from "@/components/product-detail";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>; // ändra typ till Promise
}) {
  const { id } = await params; // await params

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  return <ProductDetail product={product} />;
}
