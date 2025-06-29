import { stripe } from "@/lib/stripe";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FloatingQuestionForm from "./components/FloatingQuestionForm"; 
import "./page.css"; 


export default async function Home() {
  const result = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  const products = result.data;

  return (
    <div>
      {/* Text scrolling 
      <section className="scrolling-text-container">
        <p className="scrolling-text">
          This text will move
        </p>
      </section> 
      */}

      <section className="bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto flex items-center justify-center gap-8 sm:px-16">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to My Ecommerce
            </h2>
            <p className="text-neutral-600">
              See what’s new — thoughtfully made for people and planet
            </p>
            <Button asChild variant="default">
  <Link
    href="/products"
    className="browse-button"
  >
    Browse all products
  </Link>
</Button>
      
          </div>
          {products.length > 0 && products[0].images.length > 0 && (
            <div className="flex-shrink-0">
              <Image
                alt="Banner Image"
                width={450}
                height={450}
                src={products[0].images[0]}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      </section>


      <FloatingQuestionForm />
    </div>
  );
}
