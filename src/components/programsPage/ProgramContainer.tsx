import Image from "next/image";
import { FaClock } from "react-icons/fa6";
import { MotionButton } from "../ui/Button";
import { toast, ToastContentProps } from "react-toastify";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useEffect } from "react";

export const ProgramContainer = ({
  program,
}: {
  program: ProgramContainerProps;
}) => {
  const { userAccount, userDbInfo } = useWeb3AuthContext();

  function RequestCertificate() {
    if (program?.requirements.trailPercentage !== 100) {
      toast.warning("You need to complete the requirements first!");
    } else {
      const promise = fetchProgramWl()
        .then((response) => {
          return response.message || "Request sent successfully!";
        })
        .catch((error) => {
          throw error.message || "An error occurred during the request.";
        });

      toast.promise(promise, {
        pending: "Sending...",
        success: {
          render({ data }: ToastContentProps<string>) {
            return data;
          },
        },
        error: {
          render({ data }: ToastContentProps<string>) {
            return data;
          },
        },
      });
    }
  }

  async function fetchProgramWl() {
    try {
      const response = await fetch("/api/programsWL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          programId: program.programId,
          address: userAccount[0],
          email: userDbInfo.email,
          name: userDbInfo.displayName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Error ${response.status}: ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return (
    <div className="md:w-2/4 w-full md:h-full flex flex-col justify-start items-start text-neutral bg-cgray md:rounded-box md:overflow-y-auto drop-shadow-2xl">
      <div className="flex flex-col w-full h-2/5 justify-start items-start overflow-hidden">
        <img
          src={program?.banner}
          className="w-full"
          style={{ objectFit: "fill" }}
          alt=""
        />
      </div>
      <div className="w-full h-full px-6 py-4 flex flex-col justify-between items-end">
        <div className="w-full h-full flex flex-col gap-6">
          <div className="flex w-full justify-between items-center">
            <p className="font-extrabold text-2xl">{program?.title}</p>
            <div className="flex gap-2 items-center">
              <FaClock />
              {JSON.stringify(program?.estimatedTime)} hours
            </div>
          </div>
          <p className="fonte-medium text-justify">{program?.description}</p>
          <div>
            <p>Requirements to complete:</p>
            <li>
              Complete "{program?.requirements.trailName}" trail.{" "}
              <strong>Status:</strong> {program?.requirements.trailPercentage}%
            </li>
          </div>
        </div>
        <MotionButton
          label="Request certificate"
          className="w-64 bg-green"
          func={RequestCertificate}
          type="button"
        />
      </div>
    </div>
  );
};
