import { Style } from "node:util";
import React, { CSSProperties, PropsWithChildren } from "react";

type TDashboardWrapper = {
  className?: string;
  style?: CSSProperties;
} & PropsWithChildren;

export const DashboardWrapper: React.FC<TDashboardWrapper> = ({
  className,
  style,
  children,
}) => {
  return (
    <div
      className={`w-full min-h-screen bg-gray-100 p-2 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
