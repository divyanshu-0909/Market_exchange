"use server"
import {prisma} from "@/lib/db";
export async function getJson(userId:string, id:string) {
    try {
        const result = await prisma.excel.findMany({
            where:{
                userId,
                id
            }
        });
        if(result.length == 0) {
            return null;
        }
        return result.map(item => item.data);
    } catch (error) {
        return null
    }
}