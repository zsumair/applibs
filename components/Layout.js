import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AuthContextProvider from "@/store/auth-context";

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
