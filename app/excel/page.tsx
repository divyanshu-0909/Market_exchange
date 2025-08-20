import { getJson } from "@/action/getJson";
import { getExcelData } from "@/action/getUserExcel";
import Excel from "@/components/Excel/Excel";
import ExcelSheet from "@/components/ExcelSheet";
import { SidebarComponent } from "@/components/Upload/Sidebar";
import { NEXT_AUTH } from "@/lib/auth";
import { JsonValue } from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import React from "react";

const ExcelComp = async () => {
  // const UserData = await getServerSession(NEXT_AUTH);
  // const data = await getJson(
  //   UserData.id,
  //   "65737224-f6fb-4407-9d17-8d658d452283"
  // );
  // const oneData: any = data ? data[0] : [];
  // const column: JsonValue = oneData.length > 0 ? oneData[0] : {};
  // const columnLabels = Object.keys(column as object);
  // const rowLabels = Array.from({ length: oneData.length }, (_, index) =>
  //   (index + 1).toString()
  // );

  // const data2 = data
  //   ? Array.from(data, (item: any) => {
  //       return Object.values(item).map((value: any) => {
  //         const datae = Object.values(value).map((item: unknown) => {
  //           return { value: (item as string).toString() };
  //         });
  //         return datae;
  //       });
  //     })
  //   : [];

    const data3 = await getExcelData();

  return <ExcelSheet initialData={data3 ? data3 : []} />;

  //   const data2 = [
  //     [
  //       { value: "NSE:NIFTY2471824600PE", },
  //       { value: 525, },
  //       { value: 0, },
  //       { value: "NSE_FNO", },
  //       { value: 0, },
  //       { value: 525, },
  //       { value: 79.9548, },
  //       { value: 0, },
  //       { value: 79.8286, },
  //       { value: 0, },
  //       { value: -66.25, },
  //       { value: 0, },
  //   ]
  // ]

  // return (<Excel
  //   columnLabels={columnLabels}
  //   rowLabels={rowLabels}
  //   data={data2[0]}
  // />)
  // <SidebarComponent>
  {
    /* <div className="flex flex-1 min-h-[100vh] bg-slate-200 w-[100vw]">
        <div className="p-2 md:p-10 rounded-tl-2xl  dark:border-neutral-700  dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className=" flex justify-between">
            <div className=" text-xl font-mono">
              Welcome back,{" "}
              <span className="text-2xl">{UserData.user.name}!</span>
            </div>
          </div>
          <div className=" w-full border-slate-500 border-b-[2px] p-1"></div>
          <div className=" ">
            <div className="text-2xl mt-4 font-medium">Dashboard</div>
            <div className="pt-2 font-medium">Good Morning</div> */
  }

  {
    /* </div>
        </div>
      </div> */
  }
  {
    /* </SidebarComponent> */
  }
};

export default ExcelComp;

// import { useState } from "react";
// import Spreadsheet from "react-spreadsheet";

// const App = () => {
//     const columnLabels = ["Flavour", "Food"];
//     const rowLabels = ["Item 1", "Item 2"];
//     const [data, setData] = useState([
//         [{ value: "Vanilla" }, { value: "Chocolate" }],
//         [{ value: "Strawberry" }, { value: "Cookies" }],
//     ]);

//     const handleDataChange = (newData:any) => {
//         setData(newData);
//         console.log(newData);
//     };

//     return (
//         <Spreadsheet
//             data={data}
//             columnLabels={columnLabels}
//             rowLabels={rowLabels}
//             onChange={handleDataChange}
//         />
//     );
// };
// export default App;

// import React from 'react'
// import Spreadsheet from "react-spreadsheet";

// const page = () => {
//     const data = [
//         [{ value: "Vanilla" }, { value: "Chocolate" }],
//         [{ value: "Strawberry" }, { value: "Cookies" }],
//       ];
//       return <Spreadsheet data={data} />;
// }

// export default page
