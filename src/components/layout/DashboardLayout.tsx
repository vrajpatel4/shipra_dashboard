import React, { PropsWithChildren } from "react";
import Navbar from "../common/Navbar";
import { StockHeader } from "../common";
import { ErrorBoundary } from "../ui/ErrorBoundary";

type TDashboardLayout = PropsWithChildren;

const DashboardLayout: React.FC<TDashboardLayout> = ({ children }) => {
  return (
    <ErrorBoundary>
      <main>
        <StockHeader />
        <Navbar />
        <div>{children}</div>
      </main>
    </ErrorBoundary>
  );
};

export default DashboardLayout;
