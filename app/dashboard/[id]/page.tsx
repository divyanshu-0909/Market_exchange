import { getJson } from "@/action/getJson";
import Excel from "@/components/Excel/Excel";
import { SidebarComponent } from "@/components/Upload/Sidebar";
import { NEXT_AUTH } from "@/lib/auth";
import { JsonValue } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({params}:{params:{id:string}}) => {
  const UserData = await getServerSession(NEXT_AUTH);
  const data = await getJson(
    UserData.id,
    params.id
  );
  const oneData: any = data ? data[0] : [];
  const column: JsonValue = oneData.length > 0 ? oneData[0] : {};
  const columnLabels = Object.keys(column as object);
  const rowLabels = Array.from({ length: oneData.length }, (_, index) =>
    (index + 1).toString()
  );

  const data2 = data
    ? Array.from(data, (item: any) => {
        return Object.values(item).map((value: any) => {
          const datae = Object.values(value).map((item: unknown) => {
            return { value: (item as string).toString() };
          });
          return datae;
        });
      })
    : [];
  return (
    <SidebarComponent>
      <div className="flex flex-1 min-h-[100vh] bg-slate-200 w-full">
        <div className="p-2 md:p-10 rounded-tl-2xl  dark:border-neutral-700  dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <Excel
            columnLabels={columnLabels}
            rowLabels={rowLabels}
            data={data2[0]}

          />
        </div>
      </div>
    </SidebarComponent>
  );
};

export default page;
