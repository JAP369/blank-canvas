import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Team() {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Meet the team.</h2>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rutrum, nulla a tincidunt tincidunt, elit nulla facilisis erat, id
              lobortis purus massa sit amet turpis. Maecenas sit amet tortor
              lacinia, euismod nisl non, dapibus metus. Integer dictum metus
              eget leo gravida volutpat. In pretium ut mauris vitae imperdiet.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6 py-6 rounded">
              <img
                alt="..."
                src="/pfp.png"
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Dominic Fei</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Founder & Marketing Specialist
                </p>
                <div className="mt-6">
                  <button
                    className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-linkedin"></i>
                  </button>
                  <button
                    className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <Link href="/profile">
                    <div className="py-6 px-3 mt-16 sm:mt-0 ">
                      <button
                        className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        More Info
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6 py-6 rounded">
              <img
                alt="..."
                src="/pfp2.png"
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Melvin Reyes</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Co-Founder, Solution Specialist & Business Developer
                </p>
                <div className="mt-6">
                  <button
                    className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-linkedin"></i>
                  </button>
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <Link href="/profile">
                    <div className="py-6 px-3 mt-16 sm:mt-0 ">
                      <button
                        className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        More Info
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6 py-6 rounded">
              <img
                alt="..."
                src="/pfp3.png"
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Jonathan Paita</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Purchasing & Beverage Specialist
                </p>
                <div className="mt-6">
                  <Link href="https://twitter.com/home?lang=en">
                    <button
                      className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                  </Link>
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button
                    className="bg-purple-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-discord"></i>
                  </button>
                  <Link href="/profile">
                    <div className="py-6 px-3 mt-16 sm:mt-0 ">
                      <button
                        className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        More Info
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6 py-6 rounded">
              <img
                alt="..."
                src="/pfp6.png"
                className="shadow-lg rounded-full mx-auto max-w-120-px"
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">John Doe</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Creative Manager
                </p>
                <div className="mt-6">
                  <button
                    className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </button>
                  <Link href="/profile">
                    <div className="py-6 px-3 mt-16 sm:mt-0 ">
                      <button
                        className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        More Info
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
