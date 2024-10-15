import React, { ReactNode } from "react";

interface AppSkeletonProps {
  children: ReactNode;
}

export const AppSkeleton: React.FC<AppSkeletonProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <main className="flex w-full flex-col items-center bg-neutralbg justify-start h-screen">
      <section className="flex flex-col h-full w-full border-4 border-blue">
        {children}
      </section>
    </main>
  );
};
