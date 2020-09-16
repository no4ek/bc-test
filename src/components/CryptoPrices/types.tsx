export type CryptoPricesProps = {};

export type Market = {
  baseSymbol: string;
  ticker: {
    lastPrice: string;
  };
}

export type MarketsData = {
  markets: Market[];
}

export type MarketsVars = {
  cryptoCurrencyCode: string;
  currency: string;
}

export type CryptoCurrency = {
  code: string;
  value: number;
}
