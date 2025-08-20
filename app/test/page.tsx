"use client";
import React, { useState } from "react";
import data from "@/app/assets/data.json";
import { SidebarComponent } from "@/components/Upload/Sidebar";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const Page = () => {
  const [filterData,setFilterData] = useState(data)
  const searchHandler = (e: any) => {
    const value = e.target.value
    const filter = data.symbols.filter((symbol) => {
      return symbol.symbol.toLowerCase().includes(value.toLowerCase())
    })
    setFilterData({symbols_remaining: filter.length, symbols: filter})
   }
  return (
    <SidebarComponent>
      <div className="flex flex-1 min-h-[100vh] bg-slate-200 w-full">
        <div className="p-2 md:p-10 rounded-tl-2xl  dark:border-neutral-700  dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className=" flex justify-between">
            <div className=" text-xl font-mono">Stock Market</div>
          </div>
          <div>
            <Input
              placeholder="Search for a stock symbol"
              className="w-full"
              onChange={searchHandler}
            />
          </div>
          <div>
            {filterData.symbols.map((symbol, index) => (
              <Card
                key={index}
                index={index}
                symbol={symbol.symbol}
                description={symbol.description}
                type={symbol.type}
                exchange={symbol.exchange}
              />
            ))}
          </div>
        </div>
      </div>
    </SidebarComponent>
  );
};

export default Page;

const Card = ({
  symbol,
  description,
  type,
  exchange,
  index,
}: {
  symbol: string;
  description: string;
  type: string;
  exchange: string;
  index: number;
}) => {
  return (
    <Link href={`/stock/${exchange}:${symbol}`}>
      <div className="flex items-center justify-between p-2 ">
      <div className="flex items-center space-x-4">
        <div className=" flex justify-center items-center gap-5">
          <div className="text-xl font-semibold">{index + 1}</div>
          <div>
            <div className="text-black font-semibold">{description}</div>
            <div className="text-gray-400">{symbol}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">{type}</span>
        <span className="text-sm text-white bg-green-600 px-2 py-1 rounded">
          {exchange}
        </span>
      </div>
    </div>
      </Link>
  );
};
