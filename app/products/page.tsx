import { stripe } from "@/lib/stripe";
import styles from "./page.module.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default async function ProductsPage() {
 
    const { data: products } = await stripe.products.list({
        expand: ["data.default_price"],
        limit: 5,
    });

    console.log(products); 

    return <div>
        <section>
<div>
<div>
<h2>Clothes</h2>
<p>See what’s new — thoughtfully made for people and planet</p>
<Button asChild variant="default">
    <Link href="/products">Browse all products</Link>
</Button>

</div>
</div>
        </section>


    </div>;
}
