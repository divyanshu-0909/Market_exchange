"use server"
import {prisma} from "@/lib/db";
export async function getUserUploads(userId: string) {
    try {
        if(userId == null) {
            return null;
        }
        const uploads = await prisma.excel.findMany({
            where: {
                userId
            },
            select: {
                id: true,
                name: true,
                createdAt: true
            }
        })
        return uploads;
    } catch (error) {
        return null
    }
}