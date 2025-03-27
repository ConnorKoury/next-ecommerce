"use client";
import "@/styles/globals.css";
import { Button } from "@heroui/button";
import { useState, useEffect } from "react";

interface AddToCartButtonProps {
  productID: number;
}

export default function AddToCartButton({ productID }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState<number>(0);

  // Fetch initial cart quantity when component mounts or product changes
  useEffect(() => {
    async function fetchQuantity() {
      try {
        const res = await fetch(`/api/cart?productId=${productID}`);
        const data = await res.json();
        setQuantity(data.quantity || 0);
      } catch (error) {
        console.error("Error fetching cart quantity:", error);
      }
    }
    fetchQuantity();
  },);

  // Add the product to the cart when quantity is zero
  async function addToCart() {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: productID, quantity: 1 }),
      });
      const data = await res.json();
      setQuantity(data.quantity);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }

  // Update the cart by increasing or decreasing the quantity
  async function handleCart(direction: number) {
    try {
      const res = await fetch("/api/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: productID, direction }),
      });
      const data = await res.json();
      // If the API removes the item when quantity <= 0, we set to 0.
      setQuantity(data.quantity ?? 0);
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  }

  if (quantity === 0) {
    return (
      <Button
        className="font-bold bg-black/20"
        color="default"
        radius="lg"
        size="sm"
        variant="flat"
        onPress={addToCart}
      >
        Add to Cart
      </Button>
    );
  } else {
    return (
      <div className="grid grid-cols-[auto,40px,auto] items-center gap-2">
        <Button
          className="w-10 h-10 font-bold bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
          onPress={() => handleCart(-1)}
        >
          -
        </Button>
        <div className="flex items-center justify-center w-10 h-10">
          <span className="font-bold">{quantity}</span>
        </div>
        <Button
          className="w-10 h-10 font-bold bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
          onPress={() => handleCart(1)}
        >
          +
        </Button>
      </div>
    );
  }
}
