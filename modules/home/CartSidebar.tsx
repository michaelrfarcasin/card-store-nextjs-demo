import { useContext } from 'react';
import { useCurrency } from '../../common/context/CurrencyContext';
import CartContext from '../../common/context/CartContext';
import CartItemSection from './cart/CartItemSection';
import { convert } from '../../common/helper/CurrencyConverter';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

const CartSidebar = () => {
  const currencyStore = useCurrency();
  const { cartItems } = useContext(CartContext);
  const currencySymbol = currencyStore.current.symbol;
  const total = cartItems.reduce((partialSum, item) => {
    const originalCurrency = currencyStore.currencies.filter((currency) =>
      currency.key === item.priceCurrency
   )[0];
    const price = Math.round(convert(item.priceWithShipping, originalCurrency, currencyStore.current) * 100) / 100;
    return partialSum + price;
  }, 0);

  return (
  <div className={[styles.container, styles.fillWidth, styles.flexDownward, styles.cartSection].join(' ')}>
    <div>
      <h1><Image src='/cart.png' width='24' height='24' alt='cart' /> Cart</h1>
    </div>
    <CartItemSection />
    <h2 className={styles.alignRight}>Total</h2>
    <h1 className={styles.alignRight}>{currencySymbol}{total}</h1>
  </div>
  );
};

export default CartSidebar;