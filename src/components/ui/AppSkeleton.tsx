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
    <main className="flex w-full flex-col items-center min-h-screen bg-neutralbg">
      <section className="flex flex-col w-full h-full items-center justify-start">
        {children}
      </section>
    </main>
  );
};
