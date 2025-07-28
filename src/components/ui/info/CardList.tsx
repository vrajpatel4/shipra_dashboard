import clsx from "clsx";
import React, { memo } from "react";

type TListType = {
  key: string;
  value: string;
};

type TCardList = {
  title?: string;
  listItems: Array<TListType>;
  className?: string;
};

const CardListComponent: React.FC<TCardList> = ({
  listItems,
  title,
  className,
}) => {
  if (listItems.length === 0) {
    return (
      <div
        className={`p-4 border-1 border-gray-200 rounded-xl bg-white w-auto ${className}`}
      >
        {title && <div className="font-semibold text-md mb-3">{title}</div>}
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-500">No data available</p>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`p-4 border-1 border-gray-200 rounded-xl bg-white w-auto ${className}`}
    >
      {title && <div className="font-semibold text-md mb-3">{title}</div>}
      <div className="flex flex-col gap-1">
        {listItems.map((res, index) => {
          return (
            <>
              <div
                key={index}
                className="flex items-center justify-between w-full"
              >
                <span
                  className={clsx("py-1 text-sm font-[400] text-black")}
                  key={index}
                >
                  {res.key}:
                </span>
                <span
                  className={clsx(
                    "py-1 rounded-lg text-sm font-[500] cursor-pointer text-black"
                  )}
                >
                  {res.value}
                </span>
              </div>
              {index < listItems.length - 1 && (
                <div className="bg-gray-200 h-[0.5px] w-full" />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export const CardList = memo(CardListComponent);
CardList.displayName = "CardList";
