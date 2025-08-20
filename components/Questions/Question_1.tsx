import ClimbingRanks from "@/app/assets/ClimbingRankIcon.png";
import MonkMode from "@/app/assets/MonkRandIcon.png";
import Newbie from "@/app/assets/NewbieIcon.png";
import NinjaLevel from "@/app/assets/NinjaRankIcon.png";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
const data = [
  {
    name: "Newbie",
    label: "< 3 months",
    image: Newbie,
  },
  {
    name: "Climbing Ranks",
    label: "3-12 months",
    image: ClimbingRanks,
  },
  {
    name: "Ninja Level",
    label: "1-5 years",
    image: NinjaLevel,
  },
  {
    name: "Monk Mode",
    label: "5+ years",
    image: MonkMode,
  },
];
const Question_1 = ({setQuestion,setStage,setProgress}:{setQuestion:React.Dispatch<React.SetStateAction<string>>,setStage:React.Dispatch<React.SetStateAction<number>>,setProgress:React.Dispatch<React.SetStateAction<number>>}) => {
  const [selected, setSelected] = React.useState(-1);
  const handleClick = (index: number) => {
    setSelected(index);
    setQuestion(data[index].label);
  }
  const handleContinue = () => {
    if(selected===-1){
      toast.error("Select One Option")
      return
    }
    setProgress(66.668)
    setStage(s=>s+1)
  }
  return (
    <div className=" flex flex-col  mt-20 justify-center items-center">
      <h1 className="text-3xl  font-extrabold text-center">
        How long you have been trading?
      </h1>
      <div className=" flex flex-wrap gap-5 p-6 justify-center items-center">
        {data.map((item, index) => (
          <div
          onClick={()=>handleClick(index)}
          className=" cursor-pointer"
          key={index}
          >
            <div
            className={`p-10 border-[2px]  hover:border-slate-600  transition w-[250px] flex justify-center items-center flex-col rounded-3xl ${selected===index?"border-slate-700":"border-slate-200"} `}
          >
            <div>
              <Image src={item.image} alt="img" width={100} height={100} />
            </div>
            <div className=" flex justify-center items-center flex-col p-1 font-light text-slate-500">
              <p className="text-black">{item.name}</p>
              <p>{item.label}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
      <div>
        <Button onClick={handleContinue} variant="outline" className=" text-lg px-32 py-5 bg-sky-400 text-white hover:bg-sky-300 hover:text-slate-200">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Question_1;
