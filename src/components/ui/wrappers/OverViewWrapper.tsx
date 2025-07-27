import { Style } from "node:util";
import React, { CSSProperties, PropsWithChildren } from "react";

type TDashboardWrapper = {
  className?: string;
  style?: CSSProperties;
} & PropsWithChildren;

export const OverViewWrapper: React.FC<TDashboardWrapper> = ({
  className,
  style,
  children,
}) => {
  return (
    <div
      className={`w-full h-full p-4 bg-white rounded-lg shadow-sm ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
