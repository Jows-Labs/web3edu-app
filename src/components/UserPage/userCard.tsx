"use client";

import Image from "next/image";
import { MdEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MotionButton } from "../ui/Button";
import useWeb3Auth from "@/lib/web3auth/web3auth";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";
import { useEffect, useState } from "react";
import { getDisplayName } from "next/dist/shared/lib/utils";
import { Bounce, toast } from "react-toastify";

export const UserSection = () => {
  function teste() {
    console.log("teste");
  }

  const { userDbInfo, googleUserInfo, fetchUserDbData } = useWeb3AuthContext();

  const [userName, setUserName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [discord, setDiscord] = useState("");

  useEffect(() => {
    console.log(userDbInfo, googleUserInfo);
    setUserName(userDbInfo?.displayName);
    setLinkedin(userDbInfo?.linkedin);
    setDiscord(userDbInfo?.discord);
  }, [userDbInfo]);

  const fetchUserEdit = async () => {
    try {
      const response = await fetch("/api/user/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: googleUserInfo?.uid,
          displayName: userName,
          socialMedia: {
            linkedin: linkedin,
            discord: discord,
          },
        }),
      });
      if (response.ok) {
        fetchUserDbData(googleUserInfo?.uid);
        console.log(response.json());
        toast.success("Dados Atualizados com Sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error: any) {
      console.error("Erro ao editar os dados do usúario", error);
    }
  };

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className=" w-4/5 h-[26rem] md:w-2/5 md:h-[30rem] bg-cgray shadow-xl flex flex-col border-2 border-gray rounded-[2rem] pt-2 md:pt-7 p-7">
        <div className="flex w-full h-12 flex-row justify-center">
          <div
            role="tablist"
            className="tabs tabs-bordered gap-1 md:gap-8 w-full h-4/5"
          >
            <a
              role="tab"
              className="tab hover:tab-active text-xm md:text-lg text-dgray"
            >
              Dados
            </a>
            {/* <a
              role="tab"
              className="tab hover:tab-active text-xm md:text-lg text-dgray"
            >
              Senha
            </a>
            <a
              role="tab"
              className="tab hover:tab-active text-xm text-dgray md:text-lg"
            >
              Acessibilidade
            </a>
            <a
              role="tab"
              className="tab hover:tab-active text-xm text-dgray md:text-lg"
            >
              Privacidade
            </a> */}
          </div>
        </div>
        <div className="flex flex-col flex flex-col gap-6 ">
          <div className="flex h-full md:justify-start justify-center">
            <p className="text-dgray text-md md:text-xl mt-5 font-medium">
              Dados Pessoais
            </p>
          </div>
          <div className="md:flex-row flex-col flex gap-4 justify-between">
            <div className="flex flex-row justify-center items-center">
              <img
                src={googleUserInfo?.photoURL}
                alt=""
                className=" w-10 h-10 md:w-16 md:h-16 rounded-full"
              ></img>
              <div className="flex flex-col items-left ml-4">
                <p className="text-dgray font-medium text-sm md:text-lg">
                  {userDbInfo.displayName}
                </p>
              </div>
            </div>
            <div className="flex h-full justify-center">
              <MotionButton
                Icon={MdEdit}
                label="Editar Imagem"
                func={() => teste}
                className="flex justify-center bg-green text-xs text-ddblue h-7 w-[9rem] items-center md:text-sm md:h-8 md:w-36"
                type="button"
              />
            </div>
          </div>

          <label className="flex flex-row h-full w-full gap-8 justify-center">
            <div className="flex flex-col justify-center w-full">
              <div className="label text-dgray">
                <span className="md:text-sm text-xs  text-dgray">Nome</span>
              </div>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder=""
                className="input input-bordered w-full md:h-10 h-8 bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
              />
              <div className="label">
                <span className="md:text-sm text-xs text-dgray">Email</span>
              </div>
              <input
                value={userDbInfo.email}
                type="text"
                disabled={true}
                placeholder=""
                className="input input-bordered w-full md:h-10 h-8 bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
              />
            </div>
            <div className="flex flex-col w-full">
              <div className="label">
                <span className="md:text-sm text-xs text-dgray">Discord</span>
              </div>
              <input
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                type="text"
                placeholder=""
                className="input input-bordered w-full md:h-10 h-8  bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
              />
              <div className="label">
                <span className="md:text-sm text-xs text-dgray">Linkedin</span>
              </div>
              <input
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                type="text"
                placeholder=""
                className="input input-bordered w-full md:h-10 h-8 bg-white md:text-base text-xs md:rounded-box border-2 border-gray text-dgray"
              />
            </div>
          </label>
          <div className="flex md:justify-end justify-center w-full">
            <MotionButton
              Icon={FaSave}
              label="Salvar"
              func={() => fetchUserEdit()}
              className=" flex justify-center text-xs items-center  h-7 w-[6rem] bg-green text-ddblue md:text-sm md:h-8 md:w-36"
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
