import { useContext } from 'react';
import Image from 'next/image';
import styles from '../../../../styles/Cart.module.css';
import { convert } from '../../../../common/helper/CurrencyConverter';
import { useCurrency } from '../../../../common/context/CurrencyContext';
import CartContext from '../../../../common/context/CartContext';
import { ItemWithKey } from '../../../../common/types';

interface Props {
  item: ItemWithKey;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const currencyStore = useCurrency();
  const currencySymbol = currencyStore.current.symbol;
  const originalCurrency = currencyStore.currencies.filter((currency) =>
    currency.key === item.priceCurrency
   )[0];
  const price = Math.round(convert(item.priceWithShipping, originalCurrency, currencyStore.current) * 100) / 100;
  const { cartItems, setCartItems } = useContext(CartContext);
  const imageSrc = 'https://product-images.tcgplayer.com/fit-in/200x279/' + item.productId + '.jpg';

  const removeFromCart = () => {
    const newItems = cartItems.filter((cartItem) => cartItem.key !== item.key);
    setCartItems(newItems);
  }

  return (
    <div className={styles.cartCard}>
      <div>
        <Image src={imageSrc} width='200' height='279' alt='' aria-hidden='true' />
      </div>
      <div className={styles.container}>
        <h2 className={styles.description}>{item.productName}</h2>
        <p>{item.setName}</p>
        <p>{currencySymbol}{price}</p>
      </div>
      <a href='#' onClick={removeFromCart}>X</a>
    </div>
  );
};

export default CartItem;