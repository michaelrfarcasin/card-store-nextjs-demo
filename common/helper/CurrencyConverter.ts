import { Currency } from '../types';

export const convert = (amount: number, originalCurrency: Currency, newCurrency: Currency) => {
  if (originalCurrency == undefined || newCurrency == undefined) {
    return 0;
  }

  const factor = newCurrency.usdCoef / originalCurrency.usdCoef;
  return amount * factor;
}