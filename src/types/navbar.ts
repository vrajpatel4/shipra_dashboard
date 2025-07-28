export interface HedgedCurrency {
  currency: string;
}

export interface Crossover {
  priceAtCross: number;
  priceChange: number;
  priceChangePercent: number;
  rsiAtCross: number;
}

export interface NavbarDataItem {
  id: string;
  name: string;
  value: string | number;
  logo: string;
  nm: string;
  hedgedCurrency: HedgedCurrency[];
  crossover: Crossover;
  SRT_124: string;
  nextEarningsDate: string;
  [key: string]: unknown;
}

export interface NavbarDataResponse {
  result?: NavbarDataItem;
}
