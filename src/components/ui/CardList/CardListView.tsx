import React, {
  memo,
  PropsWithChildren
} from "react";

type TListType = {
  key: string;
  value: string;
};

type TCardList = {
  title?: string;
  className?: string;
} & PropsWithChildren;

export const CardListView: React.FC<TCardList> = memo(
  ({ title, className, children }) => {
    return (
      <div
        className={`p-4 border-1 border-gray-200 rounded-xl bg-white w-auto ${className}`}
      >
        {title && <div className="font-semibold text-md mb-3">{title}</div>}
        <div className="flex w-full">{children}</div>
      </div>
    );
  }
);
