"use client"; 


import Stripe from "stripe";
import { useState } from "react";
import { ProductCard } from "./product-card";
import "@/components/ui/product-list.css"; 
 


interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filtrera produkter baserat på sökord
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Sökfält */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Grid med produkter */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card-container">
            <div className="product-card">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
