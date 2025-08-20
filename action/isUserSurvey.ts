"use server"
import { prisma } from "@/lib/db"

export const isUserSurvey = async (userId:string) => {
  const userData = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return userData?.isSurvey;
};