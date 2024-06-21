import { createContext, useState, ReactNode, useContext } from "react";

export interface CartItem {
    id: number;
    image:string
    name:string
    quantity: number;
}

interface CartContextProps {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
    totalCoffees: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function totalCoffees() {
        return cartItems.reduce((total, item) => total + item.quantity * 9.90, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems, setCartItems,totalCoffees }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};