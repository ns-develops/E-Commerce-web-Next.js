"use client";

import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
    products: Stripe.Product[];
}

const Carousel = ({ products }: Props) => {
    const [current, setCurrent] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % products.length); 
        }, 3000);

        return () => clearInterval(interval);  
    }, [products.length]); 

    const currentProduct = products[current];

  
    if (!currentProduct || !currentProduct.images || currentProduct.images.length === 0) {
        return <div>Loading...</div>;  
    }

    const price = currentProduct.default_price as Stripe.Price;

    return (
        <Card className="relative overflow-hidden rounded-lg shadow-md border-gray-300">
            <div className="relative h-80 w-full" style={{ position: 'relative', width: '100%', height: '300px' }}>
                <Image
                    alt={currentProduct.name}
                    src={currentProduct.images[0]}
                    fill
                    style={{ objectFit: 'contain'
                     }} 
                />
            </div>
        <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg">
            <CardTitle className="text-3xl font-bold text-white mb-2">{currentProduct.name}</CardTitle>
            {price && price.unit_amount && <p >{price.unit_amount / 100} SEK</p>}
            <p className="text-xl text-white"></p>
        </CardContent>
        </Card>
    );
};


export default Carousel;
