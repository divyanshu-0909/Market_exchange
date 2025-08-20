"use server"
import { prisma } from "@/lib/db" 
export async function addSurvey (value:{question_1:string,question_2:string},userId:string) {
    try{
        const survey = await prisma.user.update({
            where:{
                id:userId
            },
            data:{
                isSurvey:true,
                SurveyBrokerDetail:value.question_1,
                SurveyPeriodDetail:value.question_2
            }
        })
        return survey
    }catch(e){
        console.log(e)
        return null
    }
}