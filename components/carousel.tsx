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
        <Card>
            <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                <Image
                    alt={currentProduct.name}
                    src={currentProduct.images[0]}
                    fill
                    style={{ objectFit: 'cover' }} 
                />
            </div>
        <CardContent>
            <CardTitle>{currentProduct.name}</CardTitle>
            {price && price.unit_amount && <p>{price.unit_amount / 100} SEK</p>}
        </CardContent>
        </Card>
    );
};


export default Carousel;
