"use client";

import { useEffect, useState } from "react";
import { MotionButton } from "../ui/Button";
import { MotionDiv } from "../ui/MotionDiv";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { TextArea } from "../ui/TextArea";
import { useContent } from "@/providers/content-context";

interface RenderQuestionProps {
  description: string;
  isLast: Boolean;
  fetchDone: (param: Boolean) => Promise<void>;
  question: string;
  done: boolean;
  trailId: string;
  id: string;
}

export const RenderQuestionV = ({
  description,
  isLast,
  fetchDone,
  question,
  id,
  trailId,
  done,
}: RenderQuestionProps) => {
  const [answer, setAnswer] = useState("");
  const [aiExplanation, setAiExplanation] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const { fetchAiAnswerCheck } = useContent();
  const router = useRouter();

  useEffect(() => {
    console.log(aiExplanation);
  }, [aiExplanation]);

  async function HandleSubmit() {
    if (answer.length === 0) {
      toast.warning("Preencha todos os campos!", {
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
      return;
    }

    if (answer.length > 500) {
      toast.warning("Resposta muito longa! (max 500 caracteres)", {
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
      return;
    }

    if (isCorrect) {
      toast.promise(fetchDone(isLast), {
        pending: "Enviando...",
        success: "Tarefa concluida com sucesso!",
        error: "Erro ao concluir tarefa.",
      });
      return;
    } else {
      const aiAnswer: AiAnswerProps = await toast.promise(
        fetchAiAnswerCheck(question, answer),
        {
          pending: "Verificando...",
        }
      );
      console.log(aiAnswer);
      setAiExplanation(aiAnswer.explicacao);
      if (aiAnswer.valido === true) {
        setIsCorrect(true);
        toast.success("Resposta correta!", {
          position: "top-center",
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
          position: "top-center",
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
      <div className="w-full md:h-fit bg-ccblue rounded-box flex flex-col justify-start items-start p-8 gap-5">
        <p className="md:text-lg text-base">{description}</p>
        {aiExplanation ? (
          <p className={isCorrect ? "text-dgreen" : "text-[#FF0000]"}>
            {aiExplanation} {isCorrect ? "🎉😊" : "🤨"}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="w-full h-full justify-center gap-5">
        <TextArea
          value={answer}
          setContent={setAnswer}
          placeholder="Escreva sua resposta"
          className="w-full min-h-full"
        />
      </div>

      <div className="flex gap-4">
        {" "}
        {done && !isLast ? (
          <MotionButton
            type="button"
            label="Avançar"
            className="w-fit bg-blue text-white"
            func={() => router.push(`/learn/${trailId}/${Number(id) + 1}`)}
          />
        ) : (
          <MotionButton
            rightIcon={true}
            label={isCorrect === true ? "Marcar como concluído" : "Verificar"}
            type="button"
            className={`text-neutral w-fit h-12 self-end ${
              isCorrect ? "bg-green" : "bg-transparent border-2"
            }`}
            func={() => {
              HandleSubmit();
            }}
          />
        )}
      </div>
    </>
  );
};
