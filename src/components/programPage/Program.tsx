import { useEffect, useState } from "react";

import { useContent } from "@/providers/content-context";
import { Task } from "../Task/Task";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useRouter } from "next/navigation";

export const Program = ({ programId }: ProgramProps) => {
  const { googleUserInfo, isLoggedIn } = useWeb3AuthContext();
  const [program, setProgram] = useState({});

  const router = useRouter();

  const fetchProgram = async () => {
    try {
      const response = await fetch(`/api/program?programId=${programId}`, {
        method: "GET",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      setProgram(data);
    } catch (error: any) {
      console.error("Erro na requisição fetchProgram:", error);
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (Object.keys(program).length === 0) {
      const res = fetchProgram();
    }
  }, [programId]);

  return (
    <div className="md:h-full w-full justify-center items-center flex flex-col md:flex-row sm:px-10 sm:pb-6 md:gap-10 ">
      {!googleUserInfo || Object.keys(program).length === 0 ? (
        <div className="md:w-3/5 w-full md:h-full flex flex-col justify-start items-start bg-cgray md:rounded-box p-10 md:gap-3 gap-6 md:overflow-y-auto">
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="skeleton h-full w-full"></div>
          <div className="skeleton h-full w-full"></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
