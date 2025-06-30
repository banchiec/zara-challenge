import type { CartItemTypes } from '../types';

const CART_KEY = 'cart';

export const loadCart = (): CartItemTypes[] => {
  try {
    const data = localStorage.getItem(CART_KEY);
    if (!data) return [];
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Invalid cart data in localStorage', err);
    return [];
  }
};

export const saveCart = (cart: CartItemTypes[]) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    // Optional: Add error reporting/logging here
  }
};

export const clearCartStorage = () => {
  localStorage.removeItem(CART_KEY);
};
