"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { MdFormatListBulleted } from "react-icons/md";

type TCardListGridViewProps<T> = {
  title?: string;
  noOfColumns?: number;
  data: T[];
  initialView?: "grid" | "list";
  GridCardComponent: React.FC<{ item: T; index: number }>;
  ListCardComponent: React.FC<{ item: T; index: number }>;
};

export const CardListGridView = <T,>({
  title,
  noOfColumns = 4,
  data,
  initialView = "grid",
  GridCardComponent,
  ListCardComponent,
}: TCardListGridViewProps<T>) => {
  const [view, setView] = useState<"grid" | "list">(initialView);

  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {title && <h2 className="text-lg font-semibold">{title}</h2>}
        <div className="flex gap-2">
          <button onClick={() => setView("grid")} title="Grid View">
            <LuLayoutGrid
              className={clsx(
                "text-xl",
                view === "grid" ? "text-blue-600" : "text-gray-400"
              )}
            />
          </button>
          <button onClick={() => setView("list")} title="List View">
            <MdFormatListBulleted
              className={clsx(
                "text-2xl",
                view === "list" ? "text-blue-600" : "text-gray-400"
              )}
            />
          </button>
        </div>
      </div>

      {/* Card Container */}
      <div
        className={clsx(
          view === "grid" && "grid gap-4",
          view === "list" && "flex flex-col gap-4"
        )}
        style={
          view === "grid"
            ? {
                gridTemplateColumns: `repeat(${noOfColumns}, minmax(0, 1fr))`,
              }
            : undefined
        }
      >
        {data.map((item, index) => {
          const Component =
            view === "grid" ? GridCardComponent : ListCardComponent;
          return <Component key={index} item={item} index={index} />;
        })}
      </div>
    </div>
  );
};
