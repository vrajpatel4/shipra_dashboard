export interface OverviewProfile {
  EV: string;
  Employees: number;
  "Market Cap": string;
  "RPE (Revenue per Employee)": number;
  Revenue: string;
  "Share Out": string;
}

export interface OverviewValuationTTM {
  EPS: number;
  "EV/EBITDA": number;
  "EV/Gross Profit": number;
  "EV/Sales": number;
  "P/B": number;
  "P/E": number;
  "P/FCF": number;
}

export interface OverviewValuationNTM {
  "EV/EBITDA": number;
  "EV/Sales": number;
  "P/E": number;
  "P/FCF": number;
  PEG: number;
  "Price Target": number;
}

export interface OverviewFinancialHealth {
  Cash: string;
  "Debt/Equity": number;
  "EBIT/Interest": number;
  "Net Debt": string;
}

export interface OverviewGrowthCAGR {
  "Diluted EPS 10Yr CAGR": number;
  "Diluted EPS 3Yr CAGR": number;
  "Diluted EPS 5Yr CAGR": number;
  "Revenue 10Yr CAGR": number;
  "Revenue 3Yr CAGR": number;
  "Revenue 5Yr CAGR": number;
}

export interface OverviewDividends {
  DPS: number;
  "DPS Growth 10Yr": number | null;
  "DPS Growth 3Yr": number | null;
  "DPS Growth 5Yr": number | null;
  "Payout Ratio": number;
  Yield: number;
}

export interface OverviewResponse {
  Profile: OverviewProfile;
  "Valuation (TTM)": OverviewValuationTTM;
  "Valuation (NTM)": OverviewValuationNTM;
  "Financial Health": OverviewFinancialHealth;
  "Growth (CAGR)": OverviewGrowthCAGR;
  Dividends: OverviewDividends;
}

export type OverviewResponseKey = keyof OverviewResponse;

export interface OverviewApiResponse {
  result?: OverviewResponse;
}
export interface HighLowItem {
  week: string;
  low: string;
  high: string;
  lowPercentage: number;
  highPercentage: number;
  lowDate: string;
  highDate: string;
  lowDaysAgo: number;
  highDaysAgo: number;
}

export interface HighLowApiResponse {
  result?: HighLowItem[];
}
export interface MovingAverageItem {
  day: string;
  dma_price: number;
  date: string;
  upward_percent: number | null;
  downward_percent: number | null;
}

export interface MovingAverageApiResponse {
  result?: MovingAverageItem[];
}

export interface ChartDataPoint {
  time: string;
  value: number;
}

export interface ChartApiResponse {
  result?: ChartDataPoint[];
}

export interface InvestmentReturn {
  label: string;
  value: number;
}

export interface TableRowConfig {
  label: string;
  accessor: keyof MovingAverageItem;
  format?: (value: number | string | null) => string;
  className?: string;
}

export interface CardItem {
  key: string;
  value: string;
}

export interface InfoItem {
  key: string;
  value: string;
}
