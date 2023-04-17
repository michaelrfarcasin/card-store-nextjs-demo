import { createContext } from 'react';
import { ItemWithQuantity } from '../types';

interface CartInterface {
  cartItems: ItemWithQuantity[],
  setCartItems: (cartItems: ItemWithQuantity[]) => void,
}

const CartContext = createContext<CartInterface>({
  cartItems: [],
  setCartItems: (cartItems: ItemWithQuantity[]) => {},
});

export default CartContext;