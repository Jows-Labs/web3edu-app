"use client";

import { MotionDiv } from "../ui/MotionDiv";

interface QuizSectionProps {
  options: Array<any>;
  question: string;
}

export const RenderQuizV = ({ options, question }: QuizSectionProps) => {
  return (
    <div>
      <div className="w-full md:h-fit bg-ccblue rounded-box flex flex-col justify-start items-start p-10 gap-5">
        <p className="text-cblue md:text-xl text-lg">
          Responda o quiz a seguir
        </p>
        <p className="md:text-lg text-base">{question}</p>
      </div>
      <div className="w-full h-fit p-10 grid md:grid-cols-2 grid-cols-1  justify-center gap-5">
        {options.map((e) => {
          return (
            <MotionDiv className="w-full h-24 bg-neutralbg justify-center border border-dgray flex flex-col p-5 shadow-lg rounded-box cursor-pointer">
              <p className="text-dblue md:text-xl text-base w-full text-center h-fit">
                {e.option}
              </p>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
};
