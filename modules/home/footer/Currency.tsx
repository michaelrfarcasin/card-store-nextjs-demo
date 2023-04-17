import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from '../../../styles/Home.module.css';
import { useCurrency, useCurrencyDispatch } from '../../../common/context/CurrencyContext';

const Currency = () => {
  const currencyStore = useCurrency();
  const dispatch = useCurrencyDispatch();

  const options = currencyStore.currencies.map((currency) => {
    return {
      value: currency.key,
      label: currency.key.toUpperCase()
    }
  });

  const onSelect = (option: any) => {
    dispatch({
      type: 'changeCurrency',
      currency: option.value,
    });
  }

  return (
    <Dropdown
      className={styles.dropdown}
      options={options}
      onChange={onSelect}
      value={currencyStore.current.key}
      placeholder="Select an option"
    />
  );
};

export default Currency;