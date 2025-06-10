"use client";

import Link from "next/link";
import { useCartStore } from "@/public/store/cart-store";
import { useEffect } from "react";
import "./navbar.css"; 

export const Navbar = () => {
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      // responsive, mobile logic coming
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-black no-underline hover:text-black">
          Your E-commerce
        </Link>

        <div className="flex ml-auto space-x-6">
          <Link href="/new-in" className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 transition">
            New in
          </Link>
          <Link href="/products" className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 transition">
            Products
          </Link>
          <Link href="/checkout" className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-200 transition">
           {/* <ShoppingCartIcon className="h-6 w-6 text-black" /> with icon */}
           Shopping cart
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </Link>
      
        </div>
      </div>
    </nav>
  );
};
