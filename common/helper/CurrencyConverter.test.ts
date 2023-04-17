import { convert } from './CurrencyConverter';
import { Currency } from '../types';

describe('CurrencyConverter', () => {
  const aKey: Currency = {key: "us", symbol: "", usdCoef: 0.5}
  const bKey: Currency = {key: "jy", symbol: "", usdCoef: 2}

  it('given same currency, input equals input', () => {
    const result = convert(1, aKey, aKey);

    expect(result).toBe(1);
  })

  it('convert to weaker currency, amount goes up', () => {
    const result = convert(1, aKey, bKey);

    expect(result).toBe(4);
  })

  it('convert to stronger currency, amount goes down', () => {
    const result = convert(1, bKey, aKey);

    expect(result).toBe(0.25);
  })

  it('invalid original currency, returns 0', () => {
    const result = convert(1, undefined as unknown as Currency, aKey);

    expect(result).toBe(0);
  })

  it('invalid new currency, returns 0', () => {
    const result = convert(1, aKey, undefined as unknown as Currency);

    expect(result).toBe(0);
  })
})