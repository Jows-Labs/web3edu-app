"use client";

import web3EduLogo from "../../assets/images/Web3EduBrasil_logo.png";
import Image from "next/image";
import { useState } from "react";
import { UserMenu } from "./UserMenu";
import { LoginButton } from "./LoginButton";
import { useWeb3AuthContext } from "@/lib/web3auth/Web3AuthProvider";

export default function NavBar({}) {
  const { login, WalletUi, logout, isLoggedIn } = useWeb3AuthContext();

  return (
    <div className="navbar bg-neutralbg justify-between sm:px-10">
      <div className="navbar-start gap-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow py-2 text-base-content "
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a onClick={WalletUi}>Fórum</a>
            </li>
            <li>
              <a onClick={logout}>Artigos</a>
            </li>
            <li>
              <a>Trilhas</a>
            </li>
          </ul>
        </div>
        <Image src={web3EduLogo} alt="" className="w-10" />
        <a className="text-2xl text-neutral font-bold">Web3EduBrasil</a>
        <div className="navbar-center hidden lg:flex bg-[#F0F0F0] rounded-box">
          <ul className="menu menu-horizontal px-3 text-neutral font-medium bg-base rounded-box">
            <li>
              <a onClick={login}>Home</a>
            </li>
            <li>
              <a onClick={WalletUi}>Fórum</a>
            </li>
            <li>
              <a onClick={logout}>Artigos</a>
            </li>
            <li>
              <a>Trilhas</a>
            </li>
          </ul>
        </div>
      </div>
      {isLoggedIn ? <UserMenu /> : <LoginButton />}
    </div>
  );
}
