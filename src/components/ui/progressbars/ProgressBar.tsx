import React from "react";

type TProgressBar = {
  value: number;
};

export const ProgressBar: React.FC<TProgressBar> = ({ value = -10 }) => {
  const percent = Math.min(Math.abs(value), 100) / 2;
  const isPositive = value > 0;

  return (
    <div className="h-2 w-full bg-gray-100 relative overflow-hidden">
      {!isPositive && value !== 0 && (
        <div
          className="absolute h-full top-0 right-1/2 bg-red-500 origin-right z-0"
          style={{
            width: `${percent}%`,
          }}
        />
      )}

      {isPositive && (
        <div
        // absolute left-1/2 top-0 h-full bg-green-500 origin-left z-0
          className="absolute h-full top-0 left-1/2 bg-green-500 origin-left z-0"
          style={{
            width: `${percent}%`,
          }}
        />
      )}
    </div>
  );
};
