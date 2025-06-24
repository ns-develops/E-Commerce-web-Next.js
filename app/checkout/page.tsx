"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/public/store/cart-store";
import { checkoutAction } from "../checkout/checkout-action";
import "./page.css";

export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl checkout-container">
      <h1 className="text-3xl font-bold mb-10 text-center">Shopping cart</h1>
      <Card className="mx-auto mb-10 order-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6 order-list">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-3 border-b border-gray-300 pb-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg">{item.name}</span>
                  <span className="font-semibold text-lg">
                    ${(item.price * item.quantity / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="min-w-[36px] text-xl font-bold"
                    onClick={() => removeItem(item.id)}
                  >
                    –
                  </Button>
                  <span className="text-xl font-semibold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="min-w-[36px] text-xl font-bold"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-gray-300 pt-4 text-2xl font-semibold text-right total-price">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>

      <form action={checkoutAction} className="mx-auto text-center max-w-sm checkout-form">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button
          type="submit"
          variant="default"
          className="inline-block py-3 px-10 text-base rounded-md checkout-button"
        >
          Proceed to Payment
        </Button>
      </form>
    </div>
  );
}