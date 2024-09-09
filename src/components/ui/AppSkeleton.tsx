import React, { ReactNode } from "react";

interface AppSkeletonProps {
  children: ReactNode;
}

export const AppSkeleton: React.FC<AppSkeletonProps> = ({ children }) => {
  return (
    <main className="flex w-full flex-col items-center h-[90vh] bg-base-100">
      <section className="max-w-screen-2xl flex flex-col w-full items-center justify-center gap-6">
        {children}
      </section>
    </main>
  );
};
