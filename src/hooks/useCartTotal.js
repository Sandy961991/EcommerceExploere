import { useMemo } from "react";
import { useCart } from "../context/CartContext";

export const useCartTotal = () => {
  const { cart } = useCart();

  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  return total.toFixed(2);
};