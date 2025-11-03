
import React from "react";
import Link from "next/link";
import { Header } from "./Header";
import { Footer } from "./Footer";


interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto py-10 px-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
