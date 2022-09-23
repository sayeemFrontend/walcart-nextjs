import React from "react";
import Header from "../components/common/header/Header";
import Meta from "../components/common/meta-tags/Meta";
import Navbar from "../components/common/navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Meta description="This is demo project using Next.js" />
      <Navbar />
      <div className="bg-primary-800 min-h-[110vh]">
        <main className="container">
          <div className="mt-10 mb-14">
            <Header />
          </div>
          <div className="my-6">{children}</div>
        </main>
      </div>
    </>
  );
}
