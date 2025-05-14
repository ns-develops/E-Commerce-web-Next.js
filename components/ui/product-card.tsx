import Stripe from "stripe";
import Link from "next/link";
import { Card } from "@/components/ui/card"; 
import Image from "next/image";
import { CardHeader, CardTitle, CardContent } from "./card";
import { Button } from "./button";

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">

        {product.images && product.images[0] && (
          <div className="relative h-48 w-full mb-4">
            <Image
              alt={product.name}
              src={product.images[0]}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}

        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardContent>
            {/* Visa priset */}
            {price?.unit_amount && (
              <p className="text-xl">
                {(price.unit_amount / 100).toFixed(2)} SEK 
              </p>
            )}
            <Button>View Details</Button>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
};
