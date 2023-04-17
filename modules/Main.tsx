import { useState, useEffect, useMemo } from 'react';
import ContentSection from './home/ContentSection';
import CartSidebar from './home/CartSidebar';
import FooterBar from './home/FooterBar';
import { useCurrencyDispatch } from '../common/context/CurrencyContext';
import CartContext from '../common/context/CartContext';
import styles from '../styles/Home.module.css';
import { apiGet } from '../common/apiGet';
import { Item } from '../common/types';

const Main = () => {
  const dispatch = useCurrencyDispatch();
  const { data } = apiGet('/api/currencies');
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const cartItemsMemo = useMemo(() => ({ cartItems, setCartItems }), [cartItems, setCartItems]);

  useEffect(() => {
    if (data === undefined) {
      return;
    }
    dispatch({
      type: 'update',
      currencies: data,
    });
  }, [data]);

  return (
  <>
    <CartContext.Provider value={cartItemsMemo}>
      <div className={styles.columns}>
        <ContentSection />
        <CartSidebar />
      </div>
      <FooterBar />
    </CartContext.Provider>
  </>
  );
};

export default Main;