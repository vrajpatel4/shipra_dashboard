"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "skeleton";
  className?: string;
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = "md",
  variant = "spinner",
  className,
  text,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  if (variant === "skeleton") {
    return (
      <div className={cn("animate-pulse", className)}>
        <div className="bg-gray-200 rounded h-4 w-full"></div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center gap-1", className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "bg-gray-400 rounded-full animate-bounce",
              sizeClasses[size]
            )}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
        {text && (
          <span className={cn("ml-2 text-gray-600", textSizes[size])}>
            {text}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-gray-300 border-t-blue-600",
          sizeClasses[size]
        )}
      />
      {text && (
        <span className={cn("ml-2 text-gray-600", textSizes[size])}>
          {text}
        </span>
      )}
    </div>
  );
};

export const SkeletonLoader: React.FC<{
  className?: string;
  lines?: number;
  height?: string;
}> = ({ className, lines = 3, height = "h-4" }) => {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn("bg-gray-200 rounded animate-pulse", height)}
        />
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC<{
  className?: string;
  showTitle?: boolean;
}> = ({ className, showTitle = true }) => {
  return (
    <div
      className={cn(
        "p-4 border border-gray-200 rounded-xl bg-white",
        className
      )}
    >
      {showTitle && (
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-3 animate-pulse" />
      )}
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
            <div className="h-3 bg-gray-200 rounded w-1/4 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};
