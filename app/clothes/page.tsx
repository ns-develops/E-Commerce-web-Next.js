import { stripe } from "@/lib/stripe";
import styles from "./page.module.css";
import Image from "next/image";

export default async function ProductsPage() {
 
    const { data: products } = await stripe.products.list({
        expand: ["data.default_price"],
        limit: 5,
    });

    console.log(products); 

    return <div></div>;
}
