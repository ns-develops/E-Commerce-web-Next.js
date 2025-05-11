import Stripe from "stripe";
import Link from "next/link";
import { Card}  from "@/components/ui/card"; 

import Image from "next/image";
import { CardHeader, CardTitle, CardContent } from "./card";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`}>
      <Card>
        {product.images && product.images[0] && (
          <div className="relative h-80 w-full">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              className="object-contain transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardContent>
            {price?.unit_amount && (
              <p className="text-xl text-white">
                {(price.unit_amount / 100).toFixed(2)} SEK 
              </p>
            )}
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};
