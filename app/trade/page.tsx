import { TableDemo } from "@/components/Upload/data-table";
import { SidebarComponent } from "@/components/Upload/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTickers} from "@/hooks/getTicker";
import { NEXT_AUTH } from "@/lib/auth";
import { Ticker } from "@/lib/types";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { it } from "node:test";
import React, { useEffect, useState } from "react";

const Page = async() => {
  const { user } = await getServerSession(NEXT_AUTH);
  let ticker = await getTickers();
  ticker = ticker.sort((a, b) => (b.trades as unknown as number) - (a.trades as unknown as number));
  const columns = [
    {
      header: "Symbol",
      accessorKey: "symbol",
    },
    {
      header: "Last Price",
      accessorKey: "lastPrice",
    },
    {
      header: "Price Change",
      accessorKey: "priceChange",
    },
    {
      header: "Price Change Percent",
      accessorKey: "priceChangePercent",
    },
    {
      header: "High",
      accessorKey: "high",
    },
    {
      header: "Low",
      accessorKey: "low",
    },
    {
      header: "Volume",
      accessorKey: "volume",
    },
    {
      header: "Quote Volume",
      accessorKey: "quoteVolume",
    },
    {
      header: "Trades",
      accessorKey: "trades",
    },
  ];

  return (
    <SidebarComponent>
        <div className="flex flex-1 min-h-[100vh] bg-slate-200 w-full">
        <div className="p-2 md:p-10 rounded-tl-2xl  dark:border-neutral-700  dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className=" flex justify-between">
            <div className=" text-xl font-mono">
              Welcome back,{" "}
              <span className="text-2xl">{user?.name}!</span>
            </div>
          </div>
          <div className=" w-full border-b-[2px] p-1"></div>
          <div className="w-full h-full">
            <div className="text-2xl mt-4 font-medium">Trades</div>
            <div className="pt-5 font-medium">Previous Trades</div>
            <div className="py-5  flex-1">
              <Table >
                <TableHeader>
                  <TableRow>
                    {columns.map((column) => (
                      <TableHead key={column.header}>{column.header}</TableHead>
                    ))}
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ticker.map((data) => (
                    <TableRow key={data.symbol}>
                      <TableCell>{data.symbol}</TableCell>
                      <TableCell>{data.lastPrice}</TableCell>
                      <TableCell>{data.priceChange}</TableCell>
                      <TableCell>{data.priceChangePercent}</TableCell>
                      <TableCell>{data.high}</TableCell>
                      <TableCell>{data.low}</TableCell>
                      <TableCell>{data.volume}</TableCell>
                      <TableCell>{data.quoteVolume}</TableCell>
                      <TableCell>{data.trades}</TableCell>
                      <TableCell>
                        <Link href={`/trade/${data.symbol}`}>
                          <Button className="px-6 py-4">View</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </SidebarComponent>
  );
};

export default Page;
