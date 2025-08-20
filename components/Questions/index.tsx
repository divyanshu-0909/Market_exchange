"use client";
import { ArrowLeft, ArrowLeftCircle } from "lucide-react";
import React from "react";
import Navbar from "../LandingPage/Navbar";
import { Button } from "../ui/button";
import Question_1 from "./Question_1";
import Question_2 from "./Question_2";
import Question_3 from "./Question_3";
import Question_0 from "./Question_0";

const QuestionPage = () => {
  const [stage, setStage] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [question_1, setQuestion_1] = React.useState("");
  const [question_2, setQuestion_2] = React.useState("");
  console.log(question_1, question_2);
  return (
    <div>
      <Navbar question setProgress={setProgress} progress={progress} />
      {stage > 0 && (
        <div className="px-20 py-8">
          <Button variant="secondary" onClick={() => {setStage((s) => s - 1);setProgress(s=>{
            if(s-33.34<0){
              return 0
            }
            return s-33.34
          })}}>
            {<ArrowLeft />}
          </Button>
        </div>
      )}
      <div >
        {stage === 0 && <Question_0  setStage={setStage} setProgress={setProgress} />}
        {stage === 1 && <Question_1 setQuestion={setQuestion_1} setStage={setStage}  setProgress={setProgress} />}
        {stage === 2 && <Question_2 setQuestion={setQuestion_2} setStage={setStage} setProgress={setProgress} />}
        {stage === 3 && <Question_3  value={{question_1,question_2}} />}
      </div>
    </div>
  );
};

export default QuestionPage;
