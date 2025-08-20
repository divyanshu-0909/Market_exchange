import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UpperCard = ({ title }: { title: string }) => {
  return (
    <div className="w-[27vw] h-80   px-4 m-4 py-5 rounded-xl bg-slate-100">
      <div className="flex justify-start items-center p-2">{title}</div>
      <div className=" border border-slate-300"></div>
      <div className="flex h-full w-fullm flex-col justify-center items-center">
        <div className="text-center text-4xl font-bold">0</div>
        <div className="text-center text-lg">Total</div>
      </div>
    </div>
  );
};

export default UpperCard;



export const MiddleCard = ({ title }: { title: string }) => {
  return (
    <div className="w-[29vw] h-80   px-4 m-4 py-5 rounded-xl bg-slate-100">
      <div className="flex justify-start items-center p-2">{title}</div>
      <div className=" border border-slate-300"></div>
      <div className="flex h-full w-fullm flex-col justify-center items-center">
        <div className="text-center text-4xl font-bold">0</div>
        <div className="text-center text-lg">Total</div>
      </div>
    </div>
  );
};

export const TabCard = ({
  title,
  title2,
}: {
  title: string;
  title2: string;
}) => {
  return (
    <div className="w-[27vw] h-[82vh]    px-3 m-4 py-3 rounded-xl bg-slate-100">
      <div className="flex-1  h-full w-full justify-start items-center p-2">
        <Tabs className="p-0  h-full w-full" defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">{title}</TabsTrigger>
            <TabsTrigger value="password">{title2}</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="flex-1 h-full w-full">
            <div className=" border border-slate-300"></div>
              <div className="flex h-full w-full pb-4  flex-col justify-center items-center">
                <div className="text-center text-4xl font-bold">0</div>{" "}
                <div className="text-center text-lg">{title}</div>
              </div>
          </TabsContent>
          <TabsContent value="password" className="flex-1 h-full w-full">
          <div className=" border border-slate-300"></div>
              <div className="flex h-full w-full pb-4  flex-col justify-center items-center">
                <div className="text-center text-4xl font-bold">0</div>{" "}
                <div className="text-center text-lg">{title2}</div>
              </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  // <div className="w-[27vw] h-96   px-4 m-4 py-5 rounded-xl bg-slate-100">
  //   <div className="flex justify-start items-center p-2">
  //       {title}
  //   </div>
  //   <div className=" border border-slate-300"></div>
  //   <div className="flex h-full w-fullm flex-col justify-center items-center">
  //       <div className="text-center text-4xl font-bold">0</div>
  //       <div className="text-center text-lg">Total</div>
  //   </div>
  // </div>;
};
