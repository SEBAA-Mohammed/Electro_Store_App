import { createContext, useContext } from "react";

import useLocalStorage from "@/Hooks/local-storage";

const CartContext = createContext(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export function CartProvider({ children }) {
    const [items, setItems] = useLocalStorage("cart-items", []);

    const addItem = (data) => {
        const existingItem = items.find((item) => item.id === data.id);

        if (existingItem) {
            alert("Info: Item already in cart.");

            return;
        }

        setItems([...items, data]);

        alert("Success: Item added to cart.");
    };

    const removeItem = (id) => {
        setItems(items.filter((item) => item.id !== id));

        alert("Success: Item removed from cart.");
    };

    const removeAll = () => {
        setItems([]);
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, removeAll }}>
            {children}
        </CartContext.Provider>
    );
}
