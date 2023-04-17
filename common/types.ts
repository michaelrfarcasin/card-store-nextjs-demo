export type CurrencyKey = "us" | "eu" | "bp" | "ir" | "jy" | "cy";

export type Currency = {
  key: CurrencyKey;
  symbol: string;
  usdCoef: number;
};

export type Item = {
  productId: string;
  productName: string;
  setName: string;
  priceWithShipping: number;
  priceCurrency: string;
};

export type ItemWithKey = Item & {
  key: number;
};

export type ApiCurrenciesRequest = {};
export type ApiCurrenciesResponse = Currency[];

export type ApiItemsRequest = {
  limit?: number;
  offset?: number;
  query?: string;
};

export type ApiItemsResponse = {
  total: number;
  perPage: number;
  items: Item[];
};
