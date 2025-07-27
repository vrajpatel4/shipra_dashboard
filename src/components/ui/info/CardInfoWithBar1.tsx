import clsx from "clsx";
import React, { memo, SetStateAction, useCallback } from "react";
import { ProgressBar } from "../progressbars/ProgressBar";

type TListType = {
  label: string;
  value: number;
};

type TCardInfoWithBar = {
  title?: string;
  listItems: Array<TListType>;
};

export const CardInfoWithBar1: React.FC<TCardInfoWithBar> = memo(
  ({ listItems, title }) => {
    if (listItems.length === 0) return null;

    return (
      <div className="p-4 border-1 border-gray-200 rounded-xl bg-white w-full">
        {title && <div className="font-semibold text-md mb-3">{title}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-x-6 gap-y-6">
          {Array.from({ length: 2 })
            .fill(null)
            .map((_, index) => {
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col gap-2">
                    <span
                      className={clsx(
                        "py-1 rounded-lg text-sm font-semibold cursor-pointer text-black"
                      )}
                    >
                      13 Weeks
                    </span>
                    <div className="h-px w-full" />
                    {listItems.map((res, index) => {
                      return (
                        <>
                          <div key={index} className="flex items-center gap-4">
                            {/* Label */}
                            <div className="w-20 text-sm text-gray-900 whitespace-nowrap">
                              {res.label}
                            </div>

                            {/* Bar */}
                            <div className="flex-1">
                              <ProgressBar value={res.value} />
                            </div>

                            {/* Value */}
                            <div
                              className={`w-16 text-right text-sm font-semibold ${
                                res.value >= 0
                                  ? "text-green-600"
                                  : "text-red-500"
                              }`}
                            >
                              {res.value.toFixed(2)}%
                            </div>
                          </div>
                          {index < listItems.length - 1 && (
                            <div className="bg-gray-200 h-[0.5px] w-full" />
                          )}
                        </>
                      );
                    })}
                  </div>
                  {index < 2 - 1 && (
                    <div className="absolute top-0 right-[-12px] h-full w-[1px] bg-gray-300 hidden xl:block" />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
);
