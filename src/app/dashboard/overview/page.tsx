"use client";

import {
  CardInfoWithBar,
  CardInfoWithBar1,
  CardList,
  Filter1,
  InfoCard,
  OverViewWrapper,
  DataLoader,
  CardListLoader,
  ChartLoader,
  ErrorBoundary,
} from "@/components";
import { CustomLineChart } from "@/components/ui";
import { CardListView } from "@/components/ui/CardList/CardListView";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useOverViewChartData,
  useOverViewData,
  useOverViewHighLowData,
  useOverViewMovingAvarageData,
} from "@/features/overview/hooks/useOverViewData";
import {
  CardItem,
  OverviewResponseKey,
  InvestmentReturn,
  TableRowConfig,
  InfoItem,
  MovingAverageItem,
} from "@/types/overview";
import React, { useState } from "react";

const Page = () => {
  const { data, isLoading, isError } = useOverViewData();
  const { data: overviewHighLowData, isLoading: isHighLowLoading, isError: isHighLowError } = useOverViewHighLowData();
  const { data: overviewMovingAvarageData, isLoading: isMovingAverageLoading, isError: isMovingAverageError } = useOverViewMovingAvarageData();
  const { data: overviewChartData, isLoading: isChartLoading, isError: isChartError } = useOverViewChartData();

  const result = data?.result;
  const overViewHighLowResult = overviewHighLowData?.result;
  const overViewMovingAvarageResult = overviewMovingAvarageData?.result;
  const overViewChartResult = overviewChartData?.result;

  const filterList = ["Price", "Drawdown", "P/E", "Worst Phase"];
  const infoList: InfoItem[] = [
    {
      key: "Total Change",
      value: "CA$1.22(4.80%)",
    },
    {
      key: "CAGR",
      value: "29.63%",
    },
  ];

  const generateCardItems = (section: OverviewResponseKey) => {
    return Object.entries(result?.[section] || {}).map(
      ([key, value]) =>
        ({
          key,
          value: String(value),
        } as CardItem)
    );
  };

  const data1: InvestmentReturn[] = [
    { label: "1 Year", value: 2.62 },
    { label: "2 Years", value: 7.51 },
    { label: "3 Years", value: 3.7 },
    { label: "4 Years", value: -1.52 },
    { label: "5 Years", value: -18.85 },
  ];

  const rows: TableRowConfig[] = [
    { label: "DMA Price", accessor: "dma_price", format: (v: number | string | null) => `$${v}` },
    { label: "Date", accessor: "date" },
    {
      label: "Upwards from CP",
      accessor: "upward_percent",
      format: (v: number | string | null) => (v != null ? `${v}%` : "-"),
      className: "text-red-500",
    },
    {
      label: "Downwards CP",
      accessor: "downward_percent",
      format: (v: number | string | null) => (v != null ? `${v}%` : "-"),
      className: "text-green-500",
    },
  ];

  const [selected, setSelected] = useState<string | number>(filterList[0]);

  // Chart configuration removed as it's not being used

  return (
    <ErrorBoundary>
      <OverViewWrapper>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Filter1
              state={selected}
              setState={setSelected}
              listItems={filterList}
            />
            <InfoCard listItems={infoList} />
          </div>
          
          {/* Chart Section */}
          <section>
            <DataLoader
              data={overViewChartResult}
              isLoading={isChartLoading}
              isError={isChartError}
              loadingComponent={<ChartLoader />}
            >
              {(data) => (
                <CardListView>
                  <CustomLineChart data={data || []} />
                </CardListView>
              )}
            </DataLoader>
          </section>

          {/* Card Lists Section */}
          <DataLoader
            data={result}
            isLoading={isLoading}
            isError={isError}
            loadingComponent={<CardListLoader count={6} />}
          >
            {() => (
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                <CardList
                  className="h-[300px]"
                  listItems={generateCardItems("Profile")}
                  title="Profile"
                />
                <CardList
                  className="h-[310px]"
                  listItems={generateCardItems("Valuation (TTM)")}
                  title="Valuation (TTM)"
                />
                <CardList
                  className="h-[310px]"
                  listItems={generateCardItems("Valuation (NTM)")}
                  title="Valuation (NTM)"
                />
                <CardList
                  className="h-[310px]"
                  listItems={generateCardItems("Financial Health")}
                  title="Financial Health"
                />
                <CardList
                  className="h-[310px]"
                  listItems={generateCardItems("Growth (CAGR)")}
                  title="Growth (CAGR)"
                />
                <CardList
                  className="h-[310px]"
                  listItems={generateCardItems("Dividends")}
                  title="Dividends"
                />
              </section>
            )}
          </DataLoader>

          {/* High Low Statistics Section */}
          <DataLoader
            data={overViewHighLowResult}
            isLoading={isHighLowLoading}
            isError={isHighLowError}
          >
            {(data) => (
              <section>
                <CardInfoWithBar
                  listItems={data || []}
                  title="High Low Statistics"
                />
              </section>
            )}
          </DataLoader>

          {/* Investment Returns and Table Section */}
          <section className="flex flex-col lg:flex-row gap-4">
            <div className="w-full lg:w-[60%]">
              <CardInfoWithBar1 listItems={data1} title="Investment Returns" />
            </div>
            <div className="w-full lg:w-[40%]">
              <DataLoader
                data={overViewMovingAvarageResult}
                isLoading={isMovingAverageLoading}
                isError={isMovingAverageError}
              >
                {(data) => (
                  <CardListView title="Profile">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-200">
                          <TableHead className="w-[160px]">Metric</TableHead>
                          {data?.map((item: MovingAverageItem) => (
                            <TableHead key={item.day} className="text-center">
                              {item.day}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rows?.map((row) => (
                          <TableRow key={row.label} className="border-gray-200">
                            <TableCell className="font-medium">{row.label}</TableCell>
                            {data?.map((item: MovingAverageItem) => {
                              const rawValue = item[row.accessor];
                              const displayValue = row.format
                                ? row.format(rawValue)
                                : rawValue;
                              return (
                                <TableCell
                                  key={item.day + row.label}
                                  className={`text-center ${row.className || ""}`}
                                >
                                  {displayValue}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardListView>
                )}
              </DataLoader>
            </div>
          </section>
        </div>
      </OverViewWrapper>
    </ErrorBoundary>
  );
};

export default Page;
