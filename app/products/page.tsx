import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/ui/product-list";

export default async function ProductsPage() {
  const result = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = result.data;

  console.log(products);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
