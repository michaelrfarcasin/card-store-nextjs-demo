import { createContext, useContext, useReducer, ReactNode } from 'react';
import { Currency } from '../types';

interface CurrencyStore {
  current: Currency,
  currencies: Currency[],
}

const initialCurrencyStore: CurrencyStore = {
  current: {key: 'us', symbol: '$', usdCoef: 1},
  currencies: [{key: 'us', symbol: '$', usdCoef: 1}],
}

const CurrencyContext = createContext(initialCurrencyStore);

const CurrencyDispatchContext = createContext(undefined as any);

interface ProviderProps {
  children?: ReactNode
}

export const CurrencyProvider = ({ children }: ProviderProps) => {
  const [currencyStore, dispatch] = useReducer(
    currencyReducer,
    initialCurrencyStore
  );

  return (
    <CurrencyContext.Provider value={currencyStore}>
      <CurrencyDispatchContext.Provider value={dispatch}>
        {children}
      </CurrencyDispatchContext.Provider>
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  return useContext(CurrencyContext);
}

export const useCurrencyDispatch = () => {
  return useContext(CurrencyDispatchContext);
}

const currencyReducer = (currencyStore: CurrencyStore, action: any) => {
  switch (action.type) {
    case 'update': {
      return {
        current: currencyStore.current,
        currencies: action.currencies,
      }
    }
    case 'changeCurrency': {
      const selectedCurrencies = currencyStore.currencies.filter((currency) => currency.key == action.currency);
      return {
        current: selectedCurrencies[0],
        currencies: currencyStore.currencies,
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default CurrencyContext;