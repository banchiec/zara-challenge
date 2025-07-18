import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { CartItemTypes } from './types';
import { clearCartStorage, loadCart, saveCart } from './utils';

interface CartContextType {
  cart: CartItemTypes[];
  // eslint-disable-next-line no-unused-vars
  addToCart: (item: CartItemTypes) => void;
  clearCart: () => void;
  // eslint-disable-next-line no-unused-vars
  deleteItemCart: (itemId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemTypes[]>([]);

  useEffect(() => {
    setCart(loadCart());
  }, []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToCart = useCallback((item: CartItemTypes) => {
    setCart((prev) => [...prev, item]);
  }, []);

  const deleteItemCart = useCallback((itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    clearCartStorage();
  }, []);

  const value = useMemo(
    () => ({ cart, addToCart, clearCart, deleteItemCart }),
    [cart, addToCart, clearCart, deleteItemCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
