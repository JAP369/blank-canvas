import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              Blank Canvas Projects™
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Specializes in the creation, execution & management of holistic
              hospitality concepts.
            </p>
            <div className="mt-12">
              <a
                href="/"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                GET STARTED
              </a>
              <a
                href="/"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                target="_blank"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/logo.png"
          alt="BLNK CNVS"
        />
      </div>
    </section>
  );
}

export default Hero;
