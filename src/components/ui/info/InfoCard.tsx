import clsx from "clsx";
import React, { memo } from "react";

type TListType = {
  key: string;
  value: string;
};

type TInfoCard = {
  listItems: Array<TListType>;
};

export const InfoCard: React.FC<TInfoCard> = memo(({ listItems }) => {
  if (listItems.length === 0) return null;

  return (
    <div className="px-1.5 py-1.5 border-1 border-gray-200 rounded-xl bg-white w-fit">
      <div className="flex flex-wrap items-center gap-3">
        {listItems.map((res, index) => {
          return (
            <>
              <div className="flex items-center gap-1">
                <span
                  className={clsx("py-0.5 text-sm font-semibold text-black")}
                  key={index}
                >
                  {res.key}:
                </span>
                <span
                  className={clsx(
                    "py-0.5 rounded-lg text-sm font-[450] cursor-pointer text-gray-500"
                  )}
                  key={index}
                >
                  {res.value}
                </span>
              </div>
              {index < listItems.length - 1 && (
                <span className="text-gray-200 font-semibold">|</span>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
});
