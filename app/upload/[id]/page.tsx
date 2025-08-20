"use client";
import { getJson } from "@/action/getJson";
import { TableDemo } from "@/components/Upload/data-table";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { ColumnDef } from "@tanstack/react-table";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
const Page = ({ params }: { params: { id: string } }) => {
  const [isMoblie, setIsMoblie] = useState(false);
  const { data } = useSession();
  const [userExcel, setUserExcel] = useState([[]]);
  const value: ColumnDef<unknown[], unknown>[] = Object.keys(
    userExcel[0][0] ?? {}
  ).map((item) => ({
    accessorKey: item.split(":")[0],
    header: item.split(":")[0],
  }));
  const rowData = userExcel[0].map((item) => Object.values(item));
  useEffect(() => {
    // @ts-ignore
    getJson(data?.user.id, params.id)
      .then((data) => setUserExcel(data as never[][]))
      .catch((error) => {
        toast.error(error);
      });
  }, [data?.user, params.id]);
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "/setting",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md md:flex flex-col hidden  h-[100vh] md:flex-row bg-gray-100 dark:bg-neutral-800  flex-1  border border-neutral-200 dark:border-neutral-700 overflow-hidden"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="flex justify-between h-full gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="">
            <SidebarLink
              link={{
                label: `${data?.user?.name || "User"}`,
                href: "#",
                icon: (
                  <Image
                    property="image"
                    src={data?.user?.image || "/avatar.png"}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="p-10 flex-1">
        <TableDemo data={rowData} columns={value} />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-gradient-to-r from-blue-900 to-indigo-600  dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium  dark:text-white whitespace-pre bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent "
      >
        Market Exchange
      </motion.span>
    </Link>
  );
};
const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-gradient-to-r from-blue-900 to-indigo-600  dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

export default Page;
