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
    <main className="flex w-full flex-col items-center min-h-screen sm:h-screen bg-neutralbg justify-start border-4 border-blue overflow-y-scroll sm:overflow-hidden">
      {children}
    </main>
  );
};
