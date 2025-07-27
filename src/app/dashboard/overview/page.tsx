"use client";

import {
  CardInfoWithBar,
  CardInfoWithBar1,
  CardList,
  Filter1,
  InfoCard,
  OverViewWrapper,
  ProgressBar,
} from "@/components";
import { CustomLineChart } from "@/components/ui";
import { CardListView } from "@/components/ui/CardList/CardListView";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCaption,
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
import { TgenerateCardItems } from "@/features/overview/type";
import React, { useState } from "react";

const page = () => {
  const { data, isLoading, isError } = useOverViewData();
  const { data: overviewHighLowData } = useOverViewHighLowData();
  const { data: overviewMovingAvarageData } = useOverViewMovingAvarageData();
  const { data: overviewChartData } = useOverViewChartData();

  const result = data?.result;
  const overViewHighLowResult = overviewHighLowData?.result;
  const overViewMovingAvarageResult = overviewMovingAvarageData?.result;
  const overViewChartResult = overviewChartData?.result;

  const filterList = ["Price", "Drawdown", "P/E", "Worst Phase"];
  const infoList = [
    {
      key: "Total Change",
      value: "CA$1.22(4.80%)",
    },
    {
      key: "CAGR",
      value: "29.63%",
    },
  ];

  const generateCardItems = (section: string) => {
    return Object.entries(result?.[section] || {}).map(
      ([key, value]) =>
        ({
          key,
          value,
        } as TgenerateCardItems)
    );
  };

  const data1 = [
    { label: "1 Year", value: 2.62 },
    { label: "2 Years", value: 7.51 },
    { label: "3 Years", value: 3.7 },
    { label: "4 Years", value: -1.52 },
    { label: "5 Years", value: -18.85 },
  ];

  const rows = [
    { label: "DMA Price", accessor: "dma_price", format: (v: any) => `$${v}` },
    { label: "Date", accessor: "date" },
    {
      label: "Upwards from CP",
      accessor: "upward_percent",
      format: (v: any) => (v != null ? `${v}%` : "-"),
      className: "text-red-500",
    },
    {
      label: "Downwards CP",
      accessor: "downward_percent",
      format: (v: any) => (v != null ? `${v}%` : "-"),
      className: "text-green-500",
    },
  ];

  const [selected, setSelected] = useState<string | number>(filterList[0]);

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
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
        <section>
          <CardListView>
            <CustomLineChart data={overViewChartResult} />
          </CardListView>
        </section>
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
        <section>
          <CardInfoWithBar
            listItems={overViewHighLowResult}
            title="High Low Statistics"
          />
        </section>
        <section className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-[60%]">
            <CardInfoWithBar1 listItems={data1} title="Investment Returns" />
          </div>
          <div className="w-full lg:w-[40%]">
            <CardListView title="Profile">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-200">
                    <TableHead className="w-[160px]">Metric</TableHead>
                    {overViewMovingAvarageResult?.map((item: any) => (
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
                      {overViewMovingAvarageResult?.map((item: any) => {
                        const rawValue =
                          item[row.accessor as keyof typeof item];
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
          </div>
        </section>
      </div>
    </OverViewWrapper>
  );
};

export default page;
