import React from "react";
import Link from "next/link";

function Strategy() {
  return (
    <section className="pb-16 bg-blueGray-200 relative pt-32">
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            {/* <p className="text-4xl text-center">
                  <span role="img" aria-label="love">
                    😍
                  </span>
                </p> */}
            <h3 className="font-semibold text-3xl">Blank Canvas Projects™</h3>
            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Blank Canvas Projects is a boutique hospitality consultancy based
              in Hong Kong and Bangkok specializes in developing, executing, and
              managing holistic hospitality concepts. With decades of experience
              and a dedication to both the creative and financial processes. Our
              specialists provide end-to-end consulting solutions that are
              tailored to your operational needs, providing expertise and
              guidance at every stage of the process.
            </p>
            <div className="sm:block flex flex-col mt-10">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                We Believe
              </a>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                {/* <i className="fab fa-github text-lg mr-1"></i> */}
                <span>Our Mission</span>
              </a>
            </div>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strategy;
