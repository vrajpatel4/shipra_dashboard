"use client";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavbarData } from "@/hooks";
import { parseDateString } from "@/lib/utils";

const StockHeader = () => {
  const { data, isLoading, isError } = useNavbarData();

  const result = data?.result;
  const currencies =
    result?.hedgedCurrency?.map((res) => res.currency).join(" ") || "";
  const currencies1 = result?.hedgedCurrency?.map((res) => res.currency) || [];
  const display =
    currencies.length > 3
      ? `${currencies?.slice(0, 15)}+${currencies1.length - 4}`
      : currencies;

  if (isLoading) return (
    <div className="bg-gray-100 pb-3">
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600">Loading stock data...</span>
      </div>
    </div>
  );
  
  if (isError) return (
    <div className="bg-gray-100 pb-3">
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Failed to load stock data</h3>
        <p className="text-sm text-gray-600">Please try refreshing the page.</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 pb-3">
      <div className="flex items-center justify-between p-3 w-full overflow-auto">
        <div className="flex items-center gap-3 min-w-max">
          <img src={result?.logo} width={30} height={30} alt="Company logo" />
          <div className="flex items-center gap-x-0.5">
            <div className="font-semibold text-sm">{result?.nm}</div>
            <div className="text-xs text-gray-500">NEO-GOOG:NE</div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-2 h-2 bg-green-500 rounded-full" />
            ))}
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="w-2 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
        <div className="flex items-center gap-2 min-w-max">
          <div className="flex items-center gap-1 text-red-500 text-sm">
            <span>⬇</span>
            <span>⬇</span>
            <span className="text-yellow-500">➡</span>
            <span className="text-yellow-500">➡</span>
          </div>
          <button className="text-gray-500 hover:text-black">
            <BsThreeDotsVertical size={18} />
          </button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-4 md:grid-cols-8 gap-4 text-xs text-gray-700 px-4">
        <Stat
          label="Price"
          value={`${result?.crossover?.priceAtCross}`}
          subValue={`${result?.crossover?.priceChange} (${result?.crossover?.priceChangePercent}%)`}
          subClass="text-green-600"
        />
        <Stat label="Opportunity Buy" value="29.42%" />
        <Stat
          label="Leveraged"
          value={
            <>
              <span className="text-red-500">1x</span>{" "}
              <span className="text-purple-600">2x</span>
            </>
          }
        />
        <Stat label="Currency Hedged" value={display} />
        <Stat
          label="RSI"
          value={`> ${result?.crossover?.rsiAtCross}`}
          valueClass="text-pink-500"
        />
        <Stat
          label="200 Day DMA"
          value="6.76%"
          subValue="($123.43)"
          subClass="text-red-500"
        />
        <Stat label="SRT (124 DMA)" value={result?.SRT_124} />
        <Stat
          label="Earnings"
          value={parseDateString(result?.nextEarningsDate || "")}
        />
      </div>
    </div>
  );
};

const Stat = ({
  label,
  value,
  subValue,
  subClass,
  valueClass = "font-medium text-sm",
}: {
  label: string;
  value: React.ReactNode;
  subValue?: string;
  subClass?: string;
  valueClass?: string;
}) => (
  <div>
    <div className="text-[11px] text-gray-500">{label}</div>
    <div className={valueClass}>{value}</div>
    {subValue && <div className={`text-[11px] ${subClass}`}>{subValue}</div>}
  </div>
);

export default StockHeader;
