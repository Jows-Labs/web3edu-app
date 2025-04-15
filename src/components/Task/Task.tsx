import { useEffect, useState, useCallback } from "react";
import { RenderQuizV } from "./Quiz";
import { useContent } from "@/providers/content-context";

import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import MdxSection from "./RenderMdx";
import { RenderQuestionV } from "./Question";

export const Task = ({
  sectionId,
  trailId,
}: {
  sectionId: string;
  trailId: string;
}) => {
  const {
    fetchSectionContent,
    fetchTrailSections,
    handleRewardContainer,
    trailSections,
  } = useContent();
  const [section, setSection] = useState<any>({});
  const { googleUserInfo } = useWeb3AuthContext();

  const fetchData = useCallback(async () => {
    const sectionData = await fetchSectionContent(
      trailId,
      sectionId,
      googleUserInfo?.uid
    );
    const isLast =
      trailSections.length > 0 &&
      trailSections[trailSections.length - 1].id === sectionId;
    setSection({ ...sectionData, isLast });
  }, [trailId, sectionId, googleUserInfo, fetchSectionContent, trailSections]);

  useEffect(() => {
    if (googleUserInfo && trailId && Object.keys(section).length === 0) {
      fetchData();
    }
  }, [googleUserInfo, trailId, section, fetchData]);

  useEffect(() => {
    console.log(section);
  }, [section]);

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
        setSection({ ...section, done: true });
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
    <div className="md:w-3/5 w-full h-full flex flex-col gap-2">
      <div className="w-full md:h-full h-fit bg-neutralbg flex md:gap-3 md:flex-row flex-col">
        <div className="w-full h-full bg-cgray relative md:rounded-box flex flex-col text-neutral justify-between md:overflow-y-auto p-8 font-medium text-medium gap-5">
          {section.type === "text" ? (
            <MdxSection
              fetchDone={fetchDone}
              id={section.id}
              trailId={trailId}
              isLast={section.isLast}
              done={section.done}
            />
          ) : section.type === "quiz" ? (
            <RenderQuizV
              options={section.options}
              question={section.question}
              fetchDone={fetchDone}
              isLast={section.isLast}
              id={section.id}
              trailId={trailId}
              done={section.done}
            />
          ) : section.type === "question" ? (
            <RenderQuestionV
              description={section.description}
              isLast={section.isLast}
              question={section.title}
              fetchDone={fetchDone}
              trailId={trailId}
              done={section.done}
              id={section.id}
            />
          ) : (
            <>
              <div className="flex w-full flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
              <div className="skeleton h-full w-full"></div>
              <div className="skeleton h-full w-full"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
