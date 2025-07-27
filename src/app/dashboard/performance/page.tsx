"use client";

import { CardListGridView } from "@/components";
import { GridCard, ListCard } from "@/features";
import { CardData, GridCard1, ListCard1 } from "@/features/performance/components/CardInfo1";
import React from "react";

const dummyData: CardData[] = Array.from({ length: 12 }, (_, i) => ({
  date: `2025-07-${(i + 1).toString().padStart(2, "0")}`,
  month: "July",
  amount: `${(i + 1) * 100}`,
  price: `$${(i + 1) * 10}`,
}));

const Page = () => {
  return (
    <main className="grid grid-cols-2 gap-4">
      <CardListGridView
        title="Trends"
        noOfColumns={4}
        data={dummyData}
        GridCardComponent={GridCard}
        ListCardComponent={ListCard}
      />
       <CardListGridView
        title="Trends"
        noOfColumns={3}
        data={dummyData}
        GridCardComponent={GridCard1}
        ListCardComponent={ListCard1}
      />
    </main>
  );
};

export default Page;
