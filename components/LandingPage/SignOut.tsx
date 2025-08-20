"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const SignOut = ({ question = false }: { question: boolean }) => {
  const { data } = useSession();
  return (
    <div className="flex gap-10">
      {question && (
        <div>
          <Button variant={"link"}>
            <Link className=" text-lg" href={"/dashboard"}>
              Dashboard
            </Link>
          </Button>
        </div>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage fetchPriority="high" src={data?.user?.image || ""} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="px-3 py-2">
          <DropdownMenuLabel>{data?.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Button
            className=" bg-slate-100 text-slate-600 hover:text-slate-100 font-bold text-md"
            size={"lg"}
            onClick={() => signOut()}
          >
            LogOut
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SignOut;
