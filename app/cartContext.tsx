'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Provide context of the total items in the cart
interface CartContextValue {
  cartCount: number;
  setCartCount: (count: number) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartCount, setCartCount] = useState<number>(0);

    // Fetch all cart items to calculate the total at first load
    useEffect(() => {
        async function fetchCartCount() {
            const res = await fetch("/api/cart", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            if (!res.ok) {
                throw new Error('Failed to fetch cart count');
            }
            const data = await res.json();
            setCartCount(data || 0);
        }
        fetchCartCount();
    }, []);

    return (
        <CartContext.Provider value={{ cartCount, setCartCount }}>
        {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};