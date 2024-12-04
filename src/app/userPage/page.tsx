"use client";

import { UserSection } from "@/components/UserPage/userCard";
import useWeb3Auth from "@/lib/web3auth/web3auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function userPage() {
  return <UserSection />;
}
