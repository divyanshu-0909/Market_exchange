import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const userData = await getServerSession(NEXT_AUTH);
    const user = userData?.user;
    const JSONdata = await prisma.user.findMany({
        where:{
            id: user.id
        },
        include:{
            history:true
        }
    })
    return NextResponse.json({JSONdata},{status:200})
    } catch (error) {
        return NextResponse.json({error},{status:500})
    }
}