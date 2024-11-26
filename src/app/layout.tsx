"use client";

import "../styles/globals.css";
import { Web3AuthProvider } from "@/lib/web3auth/Web3AuthProvider";
import NavBar from "@/components/NavBar/NavBar";
import { ContentProvider } from "@/providers/content-context";
import { ToastContainer } from "react-toastify";
import { RewardContainer } from "@/components/RewardContainer/RewardContainer";
import { Lexend_Deca } from "next/font/google";

/* export const metadata: Metadata = {
  title: "Web3EduBrasil",
  description:
    "Web3EduBrasil é uma plataforma de ensino descentralizada que facilita o aprendizados de tecnologias web3.",
  openGraph: {
    title: "Web3EduBrasil - Aprenda sobre Web3 e conquiste NFTs únicas.",
    description:
      "Web3EduBrasil é uma plataforma de ensino descentralizada que facilita o aprendizados de tecnologias web3.",
    url: process.env.NEXT_PUBLIC_APP_LINK,
    siteName: "Web3EduBrasil",
    // images: [
    //     {
    //         url: "/visuals/starknetquest.webp",
    //         width: 680,
    //         height: 680,
    //     },
    // ],
    locale: "pt_BR",
    alternateLocale: "en_US",
    countryName: "Brazil",
    type: "website",
  },
  twitter: {
    siteId: "@web3edubrasil",
    site: "@web3edubrasil",
    card: "summary_large_image",
  },
  creator: "Web3EduBrasil Developers",
  publisher: "Web3EduBrasil",
  keywords: [
    "web3",
    "blockchain",
    "nft",
    "solidity",
    "bitcoin",
    "educacao",
    "web3educacao",
    "web3edu",
    "web3edubrasil",
  ],
}; */

const LexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Web3AuthProvider>
      <ContentProvider>
        <html lang="pt-br">
          <head />

          <body className={LexendDeca.className}>
            <main
              className="flex w-full flex-col items-center bg-neutralbg justify-start h-screen overflow-hidden "
              data-theme="light"
            >
              <NavBar />
              <section className="flex flex-col h-full w-full overflow-y-auto ">
                {children}
              </section>
              <RewardContainer />
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </main>
          </body>
        </html>
      </ContentProvider>
    </Web3AuthProvider>
  );
}
