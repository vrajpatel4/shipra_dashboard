"use client";

import React from "react";

export type CardData = {
  date: string;
  month: string;
  amount: string;
  price: string;
};

export const GridCard: React.FC<{ item: CardData; index: number }> = ({ item }) => {
  return (
    <div className="bg-green-50 rounded-lg py-4 px-2 flex flex-col">
      <div className="text-gray-700 font-semibold">{item.date}</div>
      <div className="text-sm text-gray-500">{item.month}</div>
      <div className="text-lg text-green-700 font-bold">{item.amount}</div>
      <div className="text-sm text-gray-700">{item.price}</div>
    </div>
  );
};

export const ListCard: React.FC<{ item: CardData; index: number }> = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-900">{item.date}</span>
        <span className="text-sm text-gray-700">{item.price}</span>
      </div>
      <div className="text-sm text-gray-500">{item.month}</div>
      <div className="text-green-600 font-semibold">{item.amount}</div>
    </div>
  );
};

export const GridCard1: React.FC<{ item: CardData; index: number }> = ({ item }) => {
  return (
    <div className="bg-green-50 rounded-lg py-4 px-2 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="text-gray-700 font-semibold">{item.date}</div>
        <div className="text-gray-700 font-semibold">{item.price}</div>
      </div>
      <div className="text-sm text-gray-500">{item.month}</div>
      <div className="text-lg text-green-700 font-bold">{item.amount}</div>
      <div className="text-sm text-gray-700">{item.price}</div>
    </div>
  );
};

export const ListCard1: React.FC<{ item: CardData; index: number }> = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-900">{item.date}</span>
        <span className="text-sm text-gray-700">{item.price}</span>
      </div>
      <div className="text-sm text-gray-500">{item.month}</div>
      <div className="text-green-600 font-semibold">{item.amount}</div>
    </div>
  );
};
