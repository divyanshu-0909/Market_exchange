"use server"
import {prisma} from "@/lib/db";
import { revalidatePath } from "next/cache";
export async function saveExcelInJson(data: any,fileName:string,userId:string) {
    try {
        const result = await prisma.excel.create({
            data: {
                name:fileName,
                data: data,
                userId: userId
            }
        });
        revalidatePath("/dashboard");
    } catch (error) {
        console.log(error)
    }

}