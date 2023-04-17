import { useContext } from 'react';
import Image from 'next/image';
import styles from '../../../../styles/Home.module.css';
import { convert } from '../../../../common/helper/CurrencyConverter';
import { useCurrency } from '../../../../common/context/CurrencyContext';
import CartContext from '../../../../common/context/CartContext';
import { Item, ItemWithKey } from '../../../../common/types';

interface Props {
  item: Item;
}

const InventoryItem: React.FC<Props> = ({ item }) => {
  const currencyStore = useCurrency();
  const currencySymbol = currencyStore.current.symbol;
  const originalCurrency = currencyStore.currencies.filter((currency) =>
    currency.key === item.priceCurrency
  )[0];
  const price = Math.round(convert(item.priceWithShipping, originalCurrency, currencyStore.current) * 100) / 100;
  const { cartItems, setCartItems } = useContext(CartContext);
  const imageSrc = 'https://product-images.tcgplayer.com/fit-in/200x279/' + item.productId + '.jpg';

  const addToCart = () => {
    const newCartItem: ItemWithKey = {
      productId: item.productId,
      productName: item.productName,
      setName: item.setName,
      priceWithShipping: item.priceWithShipping,
      priceCurrency: item.priceCurrency,
      key: Math.random(),
    }
    setCartItems([...cartItems, newCartItem]);
  }

  return (
    <div className={styles.card}>
      <div>
        <Image src={imageSrc} className={styles.cardImage} width='200' height='279' alt='' aria-hidden='true' />
      </div>
      <div>
        <h2 className={styles.description}>{item.productName}</h2>
        <p>{item.setName}</p>
        <p>{currencySymbol}{price}</p>
      </div>
      <button key={item.productId} onClick={addToCart}><Image src='/cart.png' width='16' height='16' alt='cart' /> Add</button>
    </div>
  );
};

export default InventoryItem;