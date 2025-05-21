import Stripe from "stripe";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center">
      {product.images && product.images[0] && (
        <div className="w-[400px] h-[250px] relative">
          <Image
            alt={product.name}
            src={product.images[0]}
            width={400}
            height={250}
            className="object-contain rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="text-center md:text-left space-y-4 md:ml-8">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        {product.description && <p className="text-gray-700">{product.description}</p>}
        {price?.unit_amount && (
          <p className="text-xl font-semibold">
            {(price.unit_amount / 100).toFixed(2)} SEK
          </p>
        )}
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline">−</Button>
          <span className="text-lg">0</span>
          <Button variant="outline">+</Button>
        </div>
      </div>
    </div>
  );
};
