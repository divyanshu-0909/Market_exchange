"use client";
import { SidebarComponent } from "@/components/Upload/Sidebar";
import { MarketBar } from "@/components/Trade/MarketBar";
import { TradeView } from "@/components/Trade/TradeView";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FcLeft } from "react-icons/fc";
const Page = () => {
  const { market } = useParams();
  const router = useRouter();
  return (
    <SidebarComponent>
      <div className="flex flex-col flex-1">
        <div className="flex flex-1  w-full">
          <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            <MarketBar market={market as string} />
            <TradeView market={market as string} />
          </div>
        </div>
        {/* <MarketBar market={market as string} />
            <div className="flex flex-row h-[920px] border-y border-slate-800">
                <div className="flex flex-col flex-1">
                    
                </div>
                <div className="flex flex-col w-[250px] overflow-hidden">
                    <Depth market={market as string} /> 
                </div>
            </div> */}
      </div>
    </SidebarComponent>
  );
};

export default Page;
