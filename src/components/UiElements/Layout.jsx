import React from "react";
import Header from "../NavigationElements/Header";
import Footer from "../SharedElements/Footer";
import Contact from "../SharedElements/Contact";
import Newsletter from "../SharedElements/Newsletter";

const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <Header />
      {children}
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
