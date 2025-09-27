
import React from "react";
;
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => (
  <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 w-full mx-auto">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
