import React from "react";
// import Image from "next/image";
// import imgQM from "../public/qm.png";

export default function Section() {
  return (
    <section className="py-0 bg-black overflow-hidden">
      <div className="container mx-auto pb-64  ">
        <div className="flex flex-wrap justify-center ">
          <div className="w-full md:w-5/12 px-120 md:px-4 ml-auto mr-auto md:mt-64 bg-blueGray-200 rounded-lg px-12 py-10">
            {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              alt="..." src={imgQM}
              className="w-full align-middle rounded-t-lg"
            </div> */}
            <div>
              {" "}
              <h1 className="text-6xl mb-1 font-bold leading-normal text-black text-center py-100">
                How can we help?
              </h1>
            </div>
            <h2 className="text-lg font-bold leading-relaxed mt-4 mb-4 text-blueGray-700">
              Concepting
            </h2>
            <div className="bg-red-300">
              <p className="text-lg font-normal leading-relaxed mt-0 mb-4 text-blueGray-600 italic ...">
                Create, develop and launch full plug-n-play restaurants, bars
                and public space activations
              </p>
            </div>

            <h2 className="text-lg font-bold leading-relaxed mt-4 mb-4 text-blueGray-700">
              Concept Support
            </h2>
            <p className="text-lg font-normal leading-relaxed mt-0 mb-4 text-blueGray-600 italic ...">
              Concept Support Assist ownership, management or 3rd part operator
              in improving qualitative or quantitative F&B performance
            </p>
            <h2 className="text-lg font-bold leading-relaxed mt-4 mb-4 text-blueGray-700">
              Concept Refresh
            </h2>
            <p className="text-lg font-normal leading-relaxed mt-0 mb-4 text-blueGray-600 italic ...">
              Update restaurants, bars or public spaces that may be struggling
              conceptually
            </p>

            <h2 className="text-lg font-bold leading-relaxed mt-4 mb-4 text-blueGray-700">
              Management
            </h2>
            <p className="text-lg font-normal leading-relaxed mt-0 mb-4 text-blueGray-600 italic ...">
              Manage all daily onsite F&B operations with the goal of creating
              world-class and highly profitable guest experiences
            </p>
            <a
              href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
              target="_blank"
              className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
            >
              Learn More
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i className="fas fa-hands-helping text-blueGray-200 absolute text-55 -top-120-px -right-100 left-auto opacity-100"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
