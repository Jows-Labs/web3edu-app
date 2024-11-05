"use client";

import { body } from "@/lib/constants/content";

export const RenderTextV = () => {
  return (
    <div className="flex flex-col gap-5">
      <>
        {body.map((e, index) => (
          <div
            key={index}
            className="w-full md:h-fit flex flex-col justify-start items-start"
          >
            <div className="bg-ccblue rounded-box p-10 gap-5">
              <p className="text-cblue md:text-xl text-lg">{e.bannerTitle}</p>
              <p className="md:text-lg text-base">{e.bannerDesc}</p>
            </div>
            <p className="text-xl font-bold ">{e.subTitle}</p>
            <div className="w-full h-fit flex items-center">
              <img src={e.image} alt="" className="rounded-box mx-auto" />
            </div>
            {e.Topics.map((topic, idx) => (
              <div
                key={idx}
                className="flex flex-row justify-center items-start mt-5"
              >
                <p className="md:text-xl text-base">
                  <b>{topic.Topic}</b> {topic.Content}
                </p>
              </div>
            ))}
          </div>
        ))}
      </>
    </div>
  );
};
