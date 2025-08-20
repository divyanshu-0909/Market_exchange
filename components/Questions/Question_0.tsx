import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import  img  from "@/app/assets/partyPopper.png"
import crown  from "@/app/assets/crown.png"
import { set } from "lodash";
const Question_0 = ({
  setStage,
  setProgress,
}: {
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleContinue = () => {
    setProgress(33.334);
    setStage((s) => s + 1);
  };
  return (
    <div className=" flex flex-col min-h-[80vh]  justify-center items-center">
      <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400 to-blue-800 rounded-3xl flex justify-center w-[70vw] h-[50vh] items-center flex-col">
        <div className=" absolute  left-20 top-16 -rotate-45">
            <Image src={crown} alt="img" width={300} height={300} />
        </div>
        <div className=" absolute  left-36 bottom-32">
            <Image src={img} alt="img" width={250} height={250} />
        </div>
        <div className=" absolute rotate-180  right-36 top-36">
            <Image src={img} alt="img" width={250} height={250} />
        </div>
        <h1 className="text-3xl  font-mono text-white font-extrabold  text-center">
          Welcome to TradefluxAi
        </h1>
        <div className=" text-slate-200 p-2 pb-8">
          Let&apos;s get the party started!
        </div>
        <div>
          <Button
            onClick={handleContinue}
            variant="outline"
            className=" text-lg px-32 py-5 bg-sky-500 text-white hover:bg-sky-300 hover:text-slate-200"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question_0;
