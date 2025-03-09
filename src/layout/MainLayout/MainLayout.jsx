import React from "react";
import { Outlet } from "react-router";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="flex justify-center">
        <div className="mx-auto w-11/12 px-2 sm:px-4 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
