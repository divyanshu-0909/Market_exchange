"use client"

import { getJson } from "@/action/getJson";
import { useSession } from "next-auth/react";
import React, { createContext, useContext, useEffect, useState } from "react"
import { toast } from "sonner";

const Context = createContext({} as any);
export const ContextProvider = ({children}:{children:React.ReactNode}) => {
    const {data} = useSession()
    useEffect(()=>{
        if(!data){
            return;
        }
        // @ts-ignore
        getJson(data?.user.id).then((res:any)=>{
            if(!res){
                return;
            }
            setUserExcel(res[0].data)
        }).catch((err)=>{
            toast.error(err.message)
        })
    },[data])
    const [userExcel,setUserExcel] = useState([]);
    return (
        <Context.Provider value={[userExcel,setUserExcel]}>
            {children}
        </Context.Provider>
    )
}

export const useGetExcel = () => useContext(Context);