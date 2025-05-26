import Stripe from "stripe";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "@/components/product-detail.css";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        {product.images && product.images[0] && (
          <div className="product-image-wrapper">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              className="product-image"
            />
          </div>
        )}

        <div className="product-detail-content">
          <h1>{product.name}</h1>
          {product.description && <p>{product.description}</p>}
          {price?.unit_amount && (
            <p className="product-price">
              {(price.unit_amount / 100).toFixed(2)} SEK
            </p>
          )}
          <div className="product-quantity-controls">
            <Button variant="outline">-</Button>
            <span>0</span>
            <Button variant="outline">+</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
