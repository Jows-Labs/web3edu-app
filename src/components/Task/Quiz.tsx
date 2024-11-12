"use client";

import { useEffect, useState } from "react";
import { MotionButton } from "../ui/Button";
import { MotionDiv } from "../ui/MotionDiv";
import { Bounce, toast } from "react-toastify";

interface QuizSectionProps {
  options: Array<any>;
  question: string;
  fetchDone: (param: Boolean) => Promise<void>;
  isLast: Boolean;
}

export const RenderQuizV = ({
  options,
  question,
  fetchDone,
  isLast,
}: QuizSectionProps) => {
  const [selectedOpt, setSelectedOpt] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  function HandleSubmit() {
    if (isCorrect) {
      fetchDone(isLast);
    } else {
      if (options[selectedOpt].correct === true) {
        setIsCorrect(true);
        toast.success("Resposta correta!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        toast.error("Resposta Incorreta!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
  }
  return (
    <>
      <div className="w-full md:h-fit bg-ccblue rounded-box flex flex-col justify-start items-start p-10 gap-5">
        <p className="text-cblue md:text-xl text-lg">
          Responda o quiz a seguir
        </p>
        <p className="md:text-lg text-base">{question}</p>
      </div>
      <div className="w-full h-fit p-10 grid lg:grid-cols-2 grid-cols-1 justify-center gap-5">
        {options.map((e, index) => {
          return (
            <MotionDiv
              key={index}
              func={() => {
                setSelectedOpt(index);
              }}
              className={`w-full h-24 justify-center bg-white flex flex-col p-5 shadow-lg rounded-box cursor-pointer ${
                isCorrect === true && e.correct === true
                  ? "bg-green border-2 border-green shadow-green shadow"
                  : selectedOpt === index
                  ? "border-2"
                  : ""
              }`}
            >
              <p className="text-dblue md:text-lg text-base w-full text-center h-fit">
                {e.option}
              </p>
            </MotionDiv>
          );
        })}
      </div>
      <MotionButton
        rightIcon={true}
        label={isCorrect === true ? "Marcar como concluído" : "Verificar"}
        type="button"
        className={`text-neutral w-fit h-12 self-end ${
          isCorrect ? "bg-green" : "bg-transparent border border-2"
        }`}
        func={() => {
          HandleSubmit();
        }}
      />
    </>
  );
};
