import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
} from "@fortawesome/free-solid-svg-icons";

export default function Planning2() {
  return (
    <section className="mt-24 md:mt-20 pb-40 relative bg-blueGray-100">
      <div className="container mx-auto overflow-hidden pb-20">
        <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    {/* <div className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white">
                      <FontAwesomeIcon icon={faCopyright} size="lg" />
                    </div> */}
                    <p className="text-lg text-white mt-4 font-semibold">
                      Branding
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    {/* <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                    /> */}
                    <p className="text-lg text-white mt-4 font-semibold">
                      Food Program
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    {/* <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                    /> */}
                    <p className="text-lg text-white mt-4 font-semibold">
                      Beverage Program
                    </p>
                  </div>
                </a>
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a href="/" target="_blank">
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    {/* <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://www.flaticon.com/free-icon/shirt_1066360?term=uniform&page=1&position=1&page=1&position=1&related_id=1066360&origin=search"
                    /> */}
                    <p className="text-lg text-white mt-4 font-semibold">
                      Uniforms
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    {/* <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                    /> */}
                    <p className="text-lg text-white mt-4 font-semibold">
                      Marketing
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    {/* <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                    /> */}
                    <p className="text-lg text-white mt-4 font-semibold">
                      Social Media
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-drafting-compass text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              DEVELOPMENT
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis suscipit metus nec pretium. Aliquam lobortis, felis non
              egestas maximus, nisi nulla laoreet ipsum, ac mattis massa diam
              nec ante.
            </p>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis suscipit metus nec pretium. Aliquam lobortis, felis non
              egestas maximus, nisi nulla laoreet ipsum, ac mattis massa diam
              nec ante.
            </p>
            {/* <div className="block pb-6">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Alerts
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Dropdowns
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Menus
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Modals
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Navbars
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Popovers
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Tabs
          </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
            Tooltips
          </span>
        </div> */}
            <a
              href="/"
              target="_blank"
              className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
            >
              View all{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">
              We facilitate the creation of strategy and design
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Interactively transform magnetic growth strategies whereas
              prospective "outside the box" thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
