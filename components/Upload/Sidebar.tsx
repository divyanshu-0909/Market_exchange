"use client"

import { cn } from "@/lib/utils";
import { IconArrowLeft, IconArrowsUpDown, IconBrandTabler, IconSettings, IconUpload, IconUserBolt } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
export function SidebarComponent({children}:{children:React.ReactNode}) {
    const [isMoblie, setIsMoblie] = useState(false);
    const { data } = useSession();
    const links = [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Upload",
        href: "/upload",
        icon: (
          <IconUpload className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Trade",
        href: "/stock/NSE:RELIANCE",
        icon: (
          <IconArrowsUpDown className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
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

    ];
    const [open, setOpen] = useState(false);
    return (
      <div
        className={cn(
          "rounded-md md:flex flex-col hidden  h-[100vh] md:flex-row bg-gray-100 dark:bg-neutral-800  flex-1  border border-neutral-200 dark:border-neutral-700 overflow-hidden"
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="flex justify-between items-stretch  h-[100vh] gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div>
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
        <div className=" overflow-scroll w-full">
        {children}
        </div>
      </div>
    );
  }
  
  export const Logo = () => {
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
          TradefluxAi
        </motion.span>
      </Link>
    );
  };
  export const LogoIcon = () => {
    return (
      <Link
        href="/"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-gradient-to-r from-blue-900 to-indigo-600  dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      </Link>
    );
  };