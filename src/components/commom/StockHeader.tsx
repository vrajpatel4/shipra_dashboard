"use client";
import { FaGoogle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavbarData } from "@/hooks";
import { parseDateString } from "@/lib/utils";

const StockHeader = () => {
  const { data, isLoading, isError } = useNavbarData();

  const result = data?.result
  const currencies = result?.hedgedCurrency?.map((res:any) => res?.currency).join(" ") || "";
  const currencies1 = result?.hedgedCurrency?.map((res:any) => res?.currency);
  const display = currencies.length > 3 ? `${currencies?.slice(0,15)}+${currencies1.length - 4}` : currencies;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className="bg-gray-100 pb-3">
      <div className="flex items-center justify-between p-3 w-full overflow-auto">
        {/* Left Side */}
        <div className="flex items-center gap-3 min-w-max">
          <img src={result?.logo} width={30} height={30}/>
          <div className="flex items-center gap-x-0.5">
            <div className="font-semibold text-sm">{result?.nm}</div>
            <div className="text-xs text-gray-500">NEO-GOOG:NE</div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-2 h-2 bg-green-500 rounded-full" />
            ))}
          </div>
        </div>
        {/* Icons and Actions */}
        <div className="flex items-center gap-2 min-w-max">
          {/* Trend Arrows */}
          <div className="flex items-center gap-1 text-red-500 text-sm">
            <span>⬇</span>
            <span>⬇</span>
            <span className="text-yellow-500">➡</span>
            <span className="text-yellow-500">➡</span>
          </div>

          {/* Actions */}
          <button className="text-gray-500 hover:text-black">
            <BsThreeDotsVertical size={18} />
          </button>
        </div>
      </div>
      {/* Middle Stats */}
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
        <Stat label="RSI" value={`> ${result?.crossover?.rsiAtCross}`} valueClass="text-pink-500" />
        <Stat
          label="200 Day DMA"
          value="6.76%"
          subValue="($123.43)"
          subClass="text-red-500"
        />
        <Stat label="SRT (124 DMA)" value={result?.SRT_124} />
        <Stat label="Earnings" value={parseDateString(result?.nextEarningsDate)} />
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
