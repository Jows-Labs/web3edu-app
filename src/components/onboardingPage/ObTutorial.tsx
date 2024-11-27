"use client";

import { ObTutorialContainer } from "./components/ObTutorialContainer";

export const ObTutorial = ({ handleTabClick }: OnboardingProps<void>) => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col gap-10">
      <ObTutorialContainer />
    </div>
  );
};
