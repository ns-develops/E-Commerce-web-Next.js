"use client";

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import Stripe from "stripe";
import { useState } from "react";
import { ProductCard } from "./product-card";
import "@/components/ui/product-list.css"; 

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="search-container">
         
          {isSearchVisible && (
            <input
              type="text"
              placeholder=""
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
              autoFocus
            />
          )}

          <div onClick={toggleSearch} className="search-icon">
            <Icon
              path={mdiMagnify}
              size={1}
              className="search-icon"
            />
          </div>
        </div>
      </div>

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
