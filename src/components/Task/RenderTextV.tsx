"use client";

import { body } from "@/lib/constants/content";
import { MotionButton } from "../ui/Button";

interface TextTaskProps {
  bannerTitle: string;
  bannerDesc: string;
  subTitle: string;
  lists: Array<any>;
  image: string;
  fetchDone: () => Promise<void>;
  isLast: Boolean;
}

export const RenderTextV = ({
  bannerTitle,
  bannerDesc,
  subTitle,
  lists,
  image,
  fetchDone,
  isLast,
}: TextTaskProps) => {
  return (
    <div className="flex flex-col gap-5">
      <>
        <div className="w-full md:h-fit flex flex-col justify-start items-start gap-8">
          {bannerDesc && (
            <div className="bg-ccblue rounded-box p-10 gap-5">
              {bannerTitle && (
                <p className="text-cblue md:text-xl text-lg">{bannerTitle}</p>
              )}
              <p className="md:text-lg text-base">{bannerDesc}</p>
            </div>
          )}
          {subTitle && <p className="text-xl font-bold ">{subTitle}</p>}
          <div className="w-full h-fit flex items-center">
            {" "}
            <img src={image} alt="" className="rounded-box w-full" />{" "}
          </div>
          {lists &&
            lists.map((list, index) => (
              <div key={index} className="flex flex-col gap-6">
                <p className="text-xl font-bold ">{list.title}</p>
                <div className="flex flex-col gap-4">
                  {list.topics.map((topic: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-start"
                      >
                        <p className="md:text-xl text-base">
                          <b>{topic.topic}</b>: {topic.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
        <MotionButton
          rightIcon={true}
          label="Marcar como concluído"
          type="button"
          className="bg-green text-neutral w-2/5 h-12 self-end"
          func={() => fetchDone(isLast)}
        />
      </>
    </div>
  );
};
