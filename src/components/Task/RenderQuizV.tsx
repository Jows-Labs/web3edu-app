"use client";

import { useEffect, useState } from "react";
import { MotionButton } from "../ui/Button";
import { MotionDiv } from "../ui/MotionDiv";

interface QuizSectionProps {
  options: Array<any>;
  question: string;
  fetchNext: () => Promise<void>;
}

export const RenderQuizV = ({
  options,
  question,
  fetchNext,
}: QuizSectionProps) => {
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    console.log(isCorrect);
  }, [isCorrect]);
  return (
    <>
      <div className="w-full md:h-fit bg-ccblue rounded-box flex flex-col justify-start items-start p-10 gap-5">
        <p className="text-cblue md:text-xl text-lg">
          Responda o quiz a seguir
        </p>
        <p className="md:text-lg text-base">{question}</p>
      </div>
      <div className="w-full h-fit p-10 grid md:grid-cols-2 grid-cols-1  justify-center gap-5">
        {options.map((e) => {
          return (
            <MotionDiv
              func={() => {
                e.correct === true
                  ? setIsCorrect(!isCorrect)
                  : setIsCorrect(false);
              }}
              className={`w-full h-24 justify-center border border-dgray flex flex-col p-5 shadow-lg rounded-box cursor-pointer ${
                isCorrect === true && e.correct === true
                  ? "bg-green"
                  : "bg-neutralbg"
              }`}
            >
              <p className="text-dblue md:text-xl text-base w-full text-center h-fit">
                {e.option}
              </p>
            </MotionDiv>
          );
        })}
      </div>
      <MotionButton
        rightIcon={true}
        label={isCorrect ? "Marcar como concluído" : "Aguardando resposta"}
        type="button"
        className={`text-neutral w-2/5 h-12 self-end ${
          isCorrect === true
            ? "bg-green"
            : "border-2 border-ddblue bg-transparent"
        }`}
        func={() => {
          isCorrect ? fetchNext() : console.log("Resposta errada");
        }}
      />
    </>
  );
};
