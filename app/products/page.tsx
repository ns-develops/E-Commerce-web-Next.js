import { stripe } from "@/lib/stripe";
import styles from "./page.module.css";
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
            <section className="rounded bg-neautral-100 py-8 sm:py-12">
                <div className="mx-auto grid grid grid-cols-1 items-center justify-items-center gap-8 sm:px-16">
                    <div className="max-w-md space-y-4">
                        <h2 className="text 3xl font-bold tracking-tight md:text 4xl">
                            Welcome to My Ecommerce
                            </h2>
                        <p className="text-neutral-600">
                            See what’s new — thoughtfully made for people and planet
                            </p>
                        <Button asChild variant="default" className="inline-flex items-center justify-center rounded-full px-6 py3 bg-black text-white">
                            <Link href="/products" className="inline-flex items-center justify-center rounded-full px-6 py3">Browse all products</Link>
                        </Button>
                    </div>
                    {products.length > 0 && products[0].images.length > 0 && (
                        <Image 
                            alt="Banner Image" 
                            width={450} 
                            height={450} 
                            src={products[0].images[0]} 
                        />
                    )}
                </div>
            </section>
            <section>
                <Carousel/>
            </section>
        </div>
    );
}
