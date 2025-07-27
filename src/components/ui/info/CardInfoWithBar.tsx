import clsx from "clsx";
import React, { memo, SetStateAction, useCallback } from "react";
import { ProgressBar } from "../progressbars/ProgressBar";

type TListType = {
  key: string;
  value: string;
};

type TCardInfoWithBar = {
  title?: string;
  listItems: Array<TListType>;
};

export const CardInfoWithBar: React.FC<TCardInfoWithBar> = memo(
  ({ listItems, title = "hello" }) => {
    if (listItems?.length === 0) return null;

    return (
      <div className="p-4 border-1 border-gray-200 rounded-xl bg-white w-full">
        {title && <div className="font-semibold text-md mb-3">{title}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 gap-y-6">
          {listItems?.map((res, index) => {
            return (
              <div className="relative">
                <div className="flex flex-col gap-2">
                  <span
                    className={clsx(
                      "py-1 rounded-lg text-sm font-[500] cursor-pointer text-black"
                    )}
                  >
                    {res?.week}
                  </span>
                  <div className="bg-gray-200 h-px w-full" />
                  {/* {listItems?.map((res, index) => {
                      return (
                        <> */}
                  <div
                    key={index}
                    className="flex items-center justify-between flex-col w-full"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={clsx("text-sm font-[400] text-black")}
                        key={index}
                      >
                        {res.low}
                      </span>
                      <span
                        className={clsx(
                          "rounded-lg text-sm font-[500] cursor-pointer text-black"
                        )}
                      >
                        {res.high}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={clsx("text-sm font-[400] text-red-500")}
                        key={index}
                      >
                        {res.lowPercentage}% downside
                      </span>
                      <span
                        className={clsx(
                          "rounded-lg text-sm font-[500] cursor-pointer text-green-500"
                        )}
                      >
                        {res.highPercentage}% upside
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-full my-2">
                      <ProgressBar key={index} value={res.lowPercentage} />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={clsx("text-sm font-[400] text-black")}
                        key={index}
                      >
                        {res.lowDate}
                      </span>
                      <span
                        className={clsx(
                          "rounded-lg text-sm font-[500] cursor-pointer text-black"
                        )}
                      >
                        {res.highDate}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={clsx("text-sm font-[400] text-gray-500")}
                        key={index}
                      >
                        {res.lowDaysAgo} days ago
                      </span>
                      <span
                        className={clsx(
                          "rounded-lg text-sm font-[400] cursor-pointer text-gray-500"
                        )}
                      >
                        {res.highDaysAgo} days ago
                      </span>
                    </div>
                  </div>
                  {/* </> */}
                  {/* ); */}
                  {/* })} */}
                </div>
                {index < 4 - 1 && (
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
