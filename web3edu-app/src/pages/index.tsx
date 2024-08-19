import Head from "next/head";
import Header from "../components/landingPage/header";
import MainContent from "../components/landingPage/mainContent";
import Footer from "../components/landingPage/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Web3EduBrasil - Transforme Conhecimento em</title>
      </Head>

      <Header />
      <main className="flex-grow bg-gray-100">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
