import React from "react";
import Image from "next/image";

import imgServices from "../public/services.png";

function Planning() {
  return (
    <section className="mt-48 md:mt-40 pb-3 relative bg-white">
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <i className="fas fa-sitemap text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            PLANNING
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            convallis suscipit metus nec pretium. Aliquam lobortis, felis non
            egestas maximus, nisi nulla laoreet ipsum, ac mattis massa diam nec
            ante.
          </p>
          <div className="block pb-6">
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Concept Development
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Market Analysis
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Financial Modeling
            </span>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
              Property Master Planning
            </span>
          </div>
          <a
            href="/"
            target="_blank"
            className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
          >
            View All{" "}
            <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
          </a>
        </div>

        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
          <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
            {/* <img
          alt="..."
          src="/img/planning.png"
          className="w-full align-middle rounded absolute shadow-lg max-w-600-px "
        /> */}
            <img
              alt="..."
              src="/img/planning2.png"
              className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
            />
            <img
              alt="..."
              src="/img/planning3.png"
              className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-40-px -top-225-px z-2"
            />
            <img
              alt="..."
              src="/img/planning4.png"
              className="w-full align-middle rounded-lg absolute shadow-2xl max-w-210-px -left-50-px top-25-px"
            />
            {/* <img
              alt="..."
              src="/img/planning5.png"
              className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
            /> */}
            <img
              alt="..."
              src="/img/planning.png"
              className="w-full align-middle rounded absolute shadow-xl max-w-210-px left-195-px top-95-px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planning;
