import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MONTHS: Record<number, string> = {
  1: "JAN",
  2: "FEB",
  3: "MAR",
  4: "APR",
  5: "MAY",
  6: "JUN",
  7: "JUL",
  8: "AUG",
  9: "SEP",
  10: "OCT",
  11: "NOV",
  12: "DEC",
};

export function parseDateString(dateStr: string): string {
  const parsedDate = new Date(dateStr);

  const month = parsedDate.getMonth();
  const finalMonth = MONTHS[month];

  const date = parsedDate.getDate();
  const year = parsedDate.getFullYear();

  return `${finalMonth} ${date}, ${year}`;
}
