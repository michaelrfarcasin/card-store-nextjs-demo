import { useContext } from 'react';
import styles from '../../../styles/Home.module.css';
import CartContext from '../../../common/context/CartContext';
import CartItem from './item/CartItem';

const CartItemSection = () => {
  const { cartItems } = useContext(CartContext);
  const items = cartItems.map((item) => <CartItem key={item.key} item={item} />);

  return <div className={styles.main}>{items}</div>;
};

export default CartItemSection;