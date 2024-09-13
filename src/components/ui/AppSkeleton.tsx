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
    <main className="flex w-full flex-col items-center min-h-screen bg-base-100">
      <section className="flex flex-col w-full h-full items-center justify-start gap-3">
        {children}
      </section>
    </main>
  );
};
