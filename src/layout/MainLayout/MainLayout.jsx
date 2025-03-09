import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Footer from './../../components/layout/Footer';
import Navbar from "../../components/layout/Navbar";

function MainLayout() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : ""} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <Navbar setTheme={setTheme} theme={theme} />
      <div className="flex">
        <div className="mx-auto w-11/12 px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8 ">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
