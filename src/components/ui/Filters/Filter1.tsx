import clsx from "clsx";
import React, { memo, useCallback } from "react";

type TFilter1 = {
  state: string | number;
  setState: React.Dispatch<React.SetStateAction<string | number>>;
  listItems: Array<string>;
};

export const Filter1: React.FC<TFilter1> = memo(
  ({ listItems, state, setState }) => {
    const handleClick = useCallback(
      (item: string) => () => {
        if (item !== state) setState(item);
      },
      [setState, state]
    );

    if (listItems.length === 0) return null;

    return (
      <div className="px-1.5 py-1.5 border-1 border-gray-200 rounded-xl bg-white w-fit">
        <div className="flex flex-wrap gap-3">
          {listItems.map((res, index) => {
            const isSelected = res === state;
            console.log({ isSelected, res, state });
            return (
              <span
                className={clsx(
                  "px-1 py-0.5 rounded-lg text-sm font-[450] cursor-pointer",
                  {
                    "bg-blue-50 text-blue-500": isSelected,
                    "text-gray-500 hover:bg-blue-50 hover:text-blue-500":
                      !isSelected,
                  }
                )}
                key={index}
                onClick={handleClick(res)}
              >
                {res}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
);

Filter1.displayName = "Filter1";
