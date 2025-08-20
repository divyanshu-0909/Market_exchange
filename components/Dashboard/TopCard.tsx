"use client"
import React from "react";
import { date } from "zod";
import ChartComp from "./Chart";

const TopCard = ({is=false,title,label,chart}:{is?:boolean,title:String,label:String,chart:React.ReactElement}) => {
  
  
  return (
    <div className={`flex justify-between items-center  ${is?"min-w-[46.5%]":"min-w-[30%]"}  px-7 py-8 m-3 rounded-xl  bg-slate-100 `}>
      <div>
        <div className=" text-sm text-gray-500">{label}</div>
        <div className=" text-lg font-bold">{title}</div>
      </div>
      <div>
        {chart}
      </div>
    </div>
  );
};

export default TopCard;
