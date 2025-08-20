"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginModal from "./LoginModal";
import SignOut from "./SignOut";
import ProgressBar from "../Questions/ProgressBar";
import { useEffect } from "react";
import { isUserSurvey } from "@/action/isUserSurvey";

interface ExtendedUser {
  id: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  isSurvey?: boolean; // Added isSurvey property
}

const Navbar = ({question=false,setProgress,progress}:{question?:boolean,setProgress?:React.Dispatch<React.SetStateAction<number>>,progress?:Number}) => {
  const { data } = useSession();
  const router = useRouter();
  const user = data?.user as ExtendedUser;

  useEffect(() => {
    if (user && user.id) {
      isUserSurvey(user.id).then((data) => {
        if(!data){
          return router.push("/questions");
         }
         return
      });
    }
  }, [user, router]);

  return (
    <div className=" flex text-slate-900 gap-10 justify-between  items-center px-20 pt-12">
      <div className="flex gap-3">
        <Link href={"/"} className=" text-2xl bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent  font-medium">
        TradefluxAi
        </Link>
      </div>
      {question&&(
        <ProgressBar progress={progress || 0} />
      )}
      <div>
        {data && data.user ? (
          <SignOut question/>
        ) : (
          <LoginModal />
        )}
        </div>
      </div>
  );
};

export default Navbar;
