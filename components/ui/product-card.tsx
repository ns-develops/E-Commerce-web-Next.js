import Stripe from "stripe";
import Link from "next/link";
import { Card } from "@/components/ui/card"; 
import Image from "next/image";
import { CardHeader, CardTitle, CardContent } from "./card";
import { Button } from "./button";  
import "@/components/ui/product-card"; 

interface Props {
  product: Stripe.Product;
}

export const ProductCard = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="product-card">
       
        {product.images && product.images[0] && (
          <div className="product-card-image">
            <Image
              alt={product.name}
              src={product.images[0]}
              width={400}  
              height={200} 
              objectFit="cover"
              className="transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}

 
        <CardHeader className="product-card-title">
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        
        <CardContent className="product-card-footer">
          {price?.unit_amount && (
            <p className="text-xl">
              {(price.unit_amount / 100).toFixed(2)} SEK
            </p>
          )}
  
          <Button variant="viewDetails" className="card-button">
           XS  S  M  L / View details
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

