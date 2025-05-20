import Stripe from "stripe";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div>
      {product.images && product.images[0] && (
        <div className="product-card-image">
          <Image
            alt={product.name}
            src={product.images[0]}
            width={400}
            height={200}
            className="transition-opacity duration-500 ease-in-out object-cover"
          />
        </div>
      )}
      <div>
        <h1>{product.name}</h1>
        {product.description && <p>{product.description}</p>}
        {price?.unit_amount && (
          <p className="text-xl">
            {(price.unit_amount / 100).toFixed(2)} SEK
          </p>
        )}
        <div>
            <Button variant="outline"> -</Button>
            <span>0</span>
            <Button variant="outline"> +</Button>
        </div>
      </div>
    </div>
  );
};
