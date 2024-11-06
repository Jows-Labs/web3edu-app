import { useEffect, useState, useCallback } from "react";
import { TaskList } from "../learn/TaskList";
import { body } from "@/lib/constants/content";
import { MotionButton } from "../ui/Button";
import { RenderQuizV } from "./RenderQuizV";
import { RenderVideoV } from "./RenderVideoV";
import { RenderTextV } from "./RenderTextV";
import { FaArrowRight } from "react-icons/fa";
import { useContent } from "@/providers/content-context";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useRouter } from "next/navigation";

export const Task = ({
  sectionId,
  trailId,
}: {
  sectionId: string;
  trailId: string;
}) => {
  const router = useRouter();

  const [type, setType] = useState("text");
  const { fetchSectionContent, fetchTrailSections, handleRewardContainer } = useContent();
  const [section, setSection] = useState<any>({});
  const { googleUserInfo } = useWeb3AuthContext();

  // Função fetchData definida como useCallback para memorizar a função
  const fetchData = useCallback(async () => {
    const sectionData = await fetchSectionContent(trailId, sectionId, googleUserInfo?.uid);
    setSection(sectionData);
    console.log(sectionData);
  }, [trailId, sectionId, googleUserInfo, fetchSectionContent]);

  useEffect(() => {
    if (googleUserInfo && trailId && Object.keys(section).length === 0) {
      fetchData();
    }
  }, [googleUserInfo, trailId, section, fetchData]);

  const fetchDone = async (isLast: Boolean) => {
    try {
      const response = await fetch("/api/user/section", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trailId: trailId,
          sectionId: sectionId,
          uid: googleUserInfo?.uid,
        }),
      });
      if (response.ok) {
        fetchTrailSections(trailId, googleUserInfo?.uid);
        if (isLast) {
          handleRewardContainer();
        }
      }
      const data = await response.json();
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  if (!googleUserInfo || !trailId) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="md:w-3/5 w-full h-full flex flex-col gap-3">
      <p className="text-blue font-extrabold md:text-3xl text-2xl md:text-start text-center h-[6%] px-2">
        {section.title}
      </p>
      <div className="w-full h-[94%] bg-neutralbg flex md:gap-3 flex md:flex-row flex-col">
        <div className="w-full h-full bg-cgray relative md:rounded-box flex flex-col justify-between items-end text-neutral md:overflow-y-auto p-8 font-medium text-medium gap-5">
          {section.type === "text" ? (
            <RenderTextV
              bannerTitle={section.bannerTitle}
              bannerDesc={section.bannerDesc}
              subTitle={section.subTitle}
              lists={section.lists}
              image={section.image}
              fetchDone={fetchDone}
              isLast={section.isLast}
            />
          ) : section.type === "video" ? (
            <RenderVideoV fetchDone={fetchDone} isLast={section.isLast} />
          ) : section.type === "quiz" ? (
            <RenderQuizV
              options={section.options}
              question={section.question}
              fetchDone={fetchDone}
              isLast={section.isLast}
            />
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};
