"use client"
import img from "@/app/assets/success.svg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { addSurvey } from "@/action/addSurvey";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Question_3 = ({value}:{value:{question_1:string,question_2:string}}) => {
  interface ExtendedUser {
    id?: string | null;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
  
  const userData = useSession() as { data: { user: ExtendedUser } };
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const data = [
    {
      title: "All answers, at your fingertips",
      des: "Zella automatically turns your trading data into handy answers.",
    },
    {
      title: "Trading with confidence",
      des: "Uncover what really works for you through 50+ reports and stats.",
    },
    {
      title: "Discovering your trading edge",
      des: "All the tools you need to find your edge in the markets.",
    },
  ];
  const handleContinue = async() => {
    setLoading(true)
    const userId = (userData.data?.user?.id as string) || '';
    console.log(userId);
    if (userId) {
      const data = await addSurvey(value, userId);
      setLoading(false)
      if ( data) {
        router.push("/dashboard");
      }
    }
  }
  return (
    <div className=" flex justify-center items-center flex-col">
      <Image src={img} alt="img" width={200} height={200} />
      <div className="  font-semibold text-3xl">That&apos;s awesome!</div>
      <div className="text-md text-slate-500">
        Let us show what you can achieve with TradefluxAi by your side
      </div>
      <div className="flex gap-5 p-10">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="px-5 py-8 border-[2px] hover:border-slate-600 transition w-[350px] flex items-center flex-col rounded-3xl "
            >
              <div className=" flex justify-center items-center flex-col p-1 font-light ">
                <p className=" text-black text-center text-lg">{item.title}</p>
              </div>
              <div className="text-slate-400 flex text-center text-md justify-center items-center">
                <p>{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Button
        disabled={loading}
          onClick={handleContinue}
          variant="outline"
          className=" text-lg mt-5 px-32 py-5 bg-sky-400 text-white hover:bg-sky-300 hover:text-slate-200"
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default Question_3;
