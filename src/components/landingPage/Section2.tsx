import MainFunctions from "./mainFunctions";
import UserDocIcon from "../../assets/icons/user-doc-icon.svg";
import ForumIcon from "../../assets/icons/forum-icon.svg";
import TrailIcon from "../../assets/icons/trail-icon.svg";

export default function Section2() {
  return (
    <div className="h-[80vh] w-full flex flex-col bg-neutralbg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
        <path
          fill="#7EC8A0"
          fill-opacity="1"
          d="M0,32L60,29.35C120,26.5,240,21.5,360,26.65C480,32,600,48,720,66.65C840,85.5,960,106.5,1080,98.65C1200,90.5,1320,53.5,1380,34.65L1440,16L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"
        ></path>
      </svg>

      <div className="bg-cgreen w-full h-fit p-10 flex flex-col justify-center items-center gap-10">
        <p className="text-neutral text-3xl font-bold">Principais Funções</p>
        <div className="flex justify-center items-center gap-24 py-10">
          <MainFunctions
            functionName={"Sistema de Recompensas"}
            content={
              "Texto Sistema de Recompensas Texto Sistema de Recompensas Texto Sistema de Recompensas Texto Sistema de Recompensas"
            }
            image={UserDocIcon}
          />
          <MainFunctions
            functionName={"Fórum Colaborativo"}
            content={
              "Nós oferecemos um fórum para que nossos usuários possam compartilhar experiências e relatos sobre blockchain"
            }
            image={ForumIcon}
          />
          <MainFunctions
            functionName={"Trilhas de Aprendizagem"}
            content={
              "Texto Trilhas de Aprendizagem Texto Trilhas de Aprendizagem Texto Trilhas de Aprendizagem Texto Trilhas de Aprendizagem "
            }
            image={TrailIcon}
          />
        </div>
      </div>
    </div>
  );
}
