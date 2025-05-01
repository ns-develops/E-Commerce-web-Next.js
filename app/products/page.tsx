import { stripe } from "@/lib/stripe";

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
