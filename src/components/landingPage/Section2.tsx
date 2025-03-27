import MainFunctions from "./mainFunctions";
import Lottie from "lottie-react";
import AnimationLearning from "../../assets/animations/LearningAnimation.json" assert { type: "json" };
import AnimationRewards from "../../assets/animations/RewardsAnimation.json" assert { type: "json" };
import AnimationEmBreve from "../../assets/animations/EmBreveAnimation.json" assert { type: "json" };


export default function Section2() {
  return (
    <div className="w-full flex flex-col">
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 160"
        >
          <path
            fill="#7EC8A0"
            fillOpacity="1"
            d="M0,32L60,29.35C120,26.5,240,21.5,360,26.65C480,32,600,48,720,66.65C840,85.5,960,106.5,1080,98.65C1200,90.5,1320,53.5,1380,34.65L1440,16L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"
          ></path>
        </svg>
      </figure>

      <div className="bg-cgreen w-full h-fit p-10 flex flex-col justify-center items-center gap-10 mt-[-1px]">
        <p className="text-neutral text-3xl font-bold">Principais Funções</p>
        <div className="flex justify-start md:justify-center items-start gap-10 py-10 h-fit w-full overflow-hidden">
          
          <MainFunctions
            functionName="Sistema de Recompensas"
            content="Os alunos que concluem as trilhas de aprendizagem recebem certificação via blockchain, garantindo reconhecimento autêntico e verificável do conhecimento adquirido."
            image={
              <Lottie
                animationData={AnimationRewards}
                loop
                autoplay
                style={{ width: 120, height: 120 }}
              />
            }
          />

          <MainFunctions
            functionName="Trilhas de Aprendizagem"
            content="Nossas trilhas de aprendizagem guiam os alunos do básico ao avançado de forma prática e interativa, com módulos bem estruturados e testes para reforçar o conhecimento."
            image={
              <Lottie
                animationData={AnimationLearning}
                loop
                autoplay
                style={{ width: 120, height: 120 }}
              />
            }
          />

          <MainFunctions
            functionName={
              <>
                Mais <br /> em breve...
              </>
            }
            content="Nós oferecemos um fórum para que nossos usuários possam compartilhar experiências e relatos sobre blockchain"
            image={
              <Lottie
                animationData={AnimationEmBreve}
                loop
                autoplay
                style={{ width: 200, height: 200 }}
              />
            }
            // Passando a prop que bloqueia o hover
            isHoverBlocked={true}
          />
        </div>
      </div>
    </div>
  );
}