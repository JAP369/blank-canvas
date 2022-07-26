import React from "react";

// components

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar fixed />
      <main>
        <section className="relative w-full h-full min-h-screen">
          {/* <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "",
            }}
          ></div> */}
          {children}
          <Footer absolute />
        </section>
      </main>
    </>
  );
}
