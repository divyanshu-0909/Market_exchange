
import { ColumnDef } from "@tanstack/react-table";
import { useSession } from "next-auth/react";
import UploadingFile from "../LandingPage/UploadingFile";
import DashboardHome from "./dashboard-home";
import {  SidebarComponent } from "./Sidebar";
import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "@/lib/auth";


export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

export const Upload = async () => {
  const data = await getServerSession(NEXT_AUTH);

  return (
    <SidebarComponent>
        <div className="flex flex-1 min-h-[100vh] bg-slate-200 w-full">
        <div className="p-2 md:p-10 rounded-tl-2xl  dark:border-neutral-700  dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className=" flex justify-between">
          <div className=" text-xl font-mono">
            Welcome back, <span className="text-2xl">{data?.user?.name}!</span>
          </div>
          <UploadingFile show={false} />
        </div>
        <div className=" w-full  border-b-[2px] p-1"></div>
        <div className="w-full">
          <div className="text-2xl mt-4 font-medium">Uploads</div>
          <div className="pt-5 font-medium">Previous Uploads</div>
          <DashboardHome />
        </div>
      </div>
    </div>
    </SidebarComponent>
  );
};

