import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";





export async function getExcelData() {
try {
    const {user} = await getServerSession(NEXT_AUTH)
    const data = await prisma.excel.findMany({
        where: {
            userId: user.id
        }
    })
    return data
} catch (error) {
    return null
}
}