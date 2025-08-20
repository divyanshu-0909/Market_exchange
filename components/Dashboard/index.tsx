import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { SidebarComponent } from "../Upload/Sidebar";
import Statistics from "./Statistics";
import { Upload } from "../Upload";
import DashboardHome from "../Upload/dashboard-home";
import UploadingFile from "../LandingPage/UploadingFile";
import ExcelComp from "@/app/excel/page";

const DashBoard = async () => {
  const data = await getServerSession(NEXT_AUTH);

  return (
    <SidebarComponent>
      <div className="flex flex-1 min-h-[100vh] bg-slate-200 w-full">
        <div className="p-2 md:p-10 rounded-tl-2xl  dark:border-neutral-700  dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className=" flex justify-between">
            <div className=" text-xl font-mono">
              Welcome back,{" "}
              <span className="text-2xl">{data?.user?.name}!</span>
            </div>
            <UploadingFile show={false} />
          </div>
          <div className=" w-full border-slate-500 border-b-[2px] p-1"></div>
          <div className=" flex gap-4 flex-col">
            <div className="pt-2 font-medium">Good Morning</div>
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger className="font-bold" value="account">
                  Dashboard
                </TabsTrigger>
                <TabsTrigger className="font-bold" value="password">
                  Detail View
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Statistics />
              </TabsContent>
              <TabsContent value="password">
                {/* <div className=" w-full  border-b-[2px] p-1"></div>
                <div className="w-full">
                  <div className="text-2xl mt-4 font-medium">Uploads</div>
                  <div className="pt-5 font-medium">Previous Uploads</div>
                  <DashboardHome />
                </div> */}
                <ExcelComp/>

              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SidebarComponent>
  );
};

export default DashBoard;
