import { use, useEffect, useState } from "react";
import { TaskList } from "../learn/TaskList";
import { body } from "@/lib/constants/content";
import { MotionButton } from "../ui/Button";
import { RenderQuizV } from "./RenderQuizV";
import { RenderVideoV } from "./RenderVideoV";
import { RenderTextV } from "./RenderTextV";
import { FaArrowRight } from "react-icons/fa";
import { useContent } from "@/providers/content-context";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";

export const Task = ({
  sectionId,
  trailId,
}: {
  sectionId: string;
  trailId: string;
}) => {
  const [type, setType] = useState("text");
  const { fetchSectionContent } = useContent();
  const [section, setSection] = useState<any>({});
  const { googleUserInfo } = useWeb3AuthContext();

  if (!googleUserInfo || !trailId) {
    return <div>Carregando...</div>;
  }

  function teste() {
    console.log("teste");
  }

  const fetchData = async () => {
    const sectionData = await fetchSectionContent(
      trailId,
      sectionId,
      googleUserInfo?.uid
    );
    setSection(sectionData);
  };

  useEffect(() => {
    if (Object.keys(section).length === 0) {
      fetchData();
    }
  }, [trailId, fetchSectionContent]);
  return (
    <div className="md:w-3/5 w-full h-full flex flex-col gap-3">
      <p className="text-blue font-extrabold md:text-3xl text-2xl md:text-start text-center h-[6%] px-2">
        {section.title}
      </p>
      <div className="w-full h-[94%] bg-neutralbg flex md:gap-3 flex md:flex-row flex-col">
        <div className="w-full h-full bg-cgray relative md:rounded-box flex flex-col justify-between items-end text-neutral md:overflow-y-auto p-8 font-medium text-medium gap-5">
          {section.type === "text" ? (
            <>
              <RenderTextV
                bannerTitle={section.bannerTitle}
                bannerDesc={section.bannerDesc}
                subTitle={section.subTitle}
                lists={section.lists}
                image={section.image}
              />
            </>
          ) : section.type === "video" ? (
            <>
              <RenderVideoV />
            </>
          ) : section.type === "quiz" ? (
            <>
              <RenderQuizV
                options={section.options}
                question={section.question}
              />
            </>
          ) : (
            <>Loading...</>
          )}
          <MotionButton
            rightIcon={true}
            label="Prosseguir"
            type="button"
            className="bg-green text-neutral w-2/5 h-12 self-end"
            func={teste}
            Icon={FaArrowRight}
          />
        </div>
      </div>
    </div>
  );
};
