"use client";

import Footer from "@/components/landingPage/footer";
import Header from "@/components/landingPage/header";
import MainContent from "@/components/landingPage/mainContent";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
