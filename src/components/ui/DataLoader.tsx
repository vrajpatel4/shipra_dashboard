"use client";

import React from "react";
import { Loader, CardSkeleton } from "./Loader";
import { ErrorDisplay } from "./ErrorBoundary";

interface DataLoaderProps<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error?: Error | string;
  children: (data: T) => React.ReactNode;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
  emptyComponent?: React.ReactNode;
  onRetry?: () => void;
  className?: string;
  loadingText?: string;
  errorTitle?: string;
}

export function DataLoader<T>({
  data,
  isLoading,
  isError,
  error,
  children,
  loadingComponent,
  errorComponent,
  emptyComponent,
  onRetry,
  className,
  loadingText = "Loading...",
  errorTitle = "Failed to load data",
}: DataLoaderProps<T>) {
  if (isLoading) {
    if (loadingComponent) {
      return <>{loadingComponent}</>;
    }
    return (
      <div className={className}>
        <Loader text={loadingText} />
      </div>
    );
  }

  if (isError) {
    if (errorComponent) {
      return <>{errorComponent}</>;
    }
    return (
      <ErrorDisplay
        error={error}
        title={errorTitle}
        onRetry={onRetry}
        className={className}
      />
    );
  }

  if (!data) {
    if (emptyComponent) {
      return <>{emptyComponent}</>;
    }
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
          <svg
            className="w-6 h-6 text-gray-400"
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
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No data available
        </h3>
        <p className="text-sm text-gray-600">
          There&apos;s nothing to display at the moment.
        </p>
      </div>
    );
  }

  return <>{children(data)}</>;
}

export const CardListLoader: React.FC<{
  count?: number;
  className?: string;
}> = ({ count = 6, className }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} className="h-[310px]" />
      ))}
    </div>
  );
};

export const TableLoader: React.FC<{
  rows?: number;
  columns?: number;
  className?: string;
}> = ({ rows = 5, columns = 4, className }) => {
  return (
    <div className={className}>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-4">
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
        </div>
        <div className="p-4">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-4 mb-3">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="h-3 bg-gray-200 rounded animate-pulse flex-1"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ChartLoader: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <div
      className={`w-full h-[300px] bg-white rounded-xl p-4 shadow-md ${className}`}
    >
      <div className="h-full flex items-center justify-center">
        <Loader text="Loading chart data..." />
      </div>
    </div>
  );
};
