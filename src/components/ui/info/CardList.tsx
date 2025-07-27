import clsx from "clsx";
import React, { memo, SetStateAction, useCallback } from "react";

type TListType = {
  key: string;
  value: string;
};

type TCardList = {
  title?: string;
  listItems: Array<TListType>;
  className?: string;
};

export const CardList: React.FC<TCardList> = memo(
  ({ listItems, title, className }) => {
    if (listItems.length === 0) return null;

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
  }
);
