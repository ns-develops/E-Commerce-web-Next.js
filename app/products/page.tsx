import { stripe } from "@/lib/stripe";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Carousel from "@/components/carousel";

export default async function ProductsPage() {
    const result = await stripe.products.list({
        expand: ["data.default_price"],
        limit: 5,
    });

    const products = result.data;

    console.log(products);

    return (
        <div>
        Products
        </div>
    );
}
