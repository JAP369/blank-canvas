import React from "react";
import Image from "next/image";
import imgServices from "../public/services.png";

function Services() {
  return (
    <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
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
            className="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
              <Image
                alt="..."
                src={imgServices}
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-95-px -top-94-px"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-blueGray-700 fill-current"
                  ></polygon>
                </svg>
                <h4 className="text-xl font-bold text-white">Services</h4>
                <p className="text-md font-light mt-2 text-white">
                  Blank Canvas Projects provides a wide scope of strategic,
                  creative, and operational consulting services to establish
                  cohesive and timeless hospitality brands. <br />
                  <br />
                  Projects are engaged through a detailed analysis of each
                  client’s vision and financial goals, creating unique
                  deliverables that integrate core values, company culture,
                  operational guidelines, food and beverage development, focused
                  training, and the distinctive voice of each brand.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-sitemap"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">PLANNING</h6>
                    <p className="mb-4 text-blueGray-500">
                      Concept Development, Market Analysis, Financial Modeling,
                      and Property Master Planning
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-drafting-compass"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">DEVELOPMENT</h6>
                    <p className="mb-4 text-blueGray-500">
                      Branding, Food Program, Beverage Program (Cocktails, Wine,
                      Beer, N/A Beverage), Uniforms, OS&E, Music, Marketing, and
                      Social Media
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-drafting-compass"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">BUILDING</h6>
                    <p className="mb-4 text-blueGray-500">
                      Schematic Layout, Interior Design, Architect Selection,
                      General Contractor Selection, IT and FF&E Selection
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-newspaper"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">
                      ADMINISTRATION
                    </h6>
                    <p className="mb-4 text-blueGray-500">
                      Project Management, Legal Support, Accounting, Expediting,
                      LOI and Lease Negotiations, and Management Contract
                      Underwriting
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">EXECUTION</h6>
                    <p className="mb-4 text-blueGray-500">
                      Recruitment, Training, SOP’s and Soft & Grand Opening
                      Support
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col min-w-0">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                      <i className="fas fa-file-alt"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">ON-GOING</h6>
                    <p className="mb-4 text-blueGray-500">
                      Management, Troubleshooting, and Audits (quality,
                      financial and facility)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto overflow-hidden pb-20">
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
              egestas maximus, nisi nulla laoreet ipsum, ac mattis massa diam
              nec ante.
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
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
              target="_blank"
              className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
            >
              View All{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>

          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
              <img
                alt="..."
                src="/img/planning.png"
                className="w-full align-middle rounded absolute shadow-lg max-w-600-px "
              />
              {/* <img
            alt="..."
            src="/img/planning2.png"
            className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
          />
          <img
            alt="..."
            src="/img/planning3.png"
            className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
          />
          <img
            alt="..."
            src="/img/planning4.png"
            className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
          />
          <img
            alt="..."
            src="/img/planning5.png"
            className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
          />
          <img
            alt="..."
            src="/img/planning6.png"
            className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
          /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                  target="_blank"
                >
                  <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                    />
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
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                    />
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
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Beverage Program
                    </p>
                  </div>
                </a>
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a href="/" target="_blank">
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://www.flaticon.com/free-icon/shirt_1066360?term=uniform&page=1&position=1&page=1&position=1&related_id=1066360&origin=search"
                    />
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
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                    />
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
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                    />
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
              href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
              target="_blank"
              className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
            >
              View all{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>
        </div>
      </div>
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
    </section>
  );
}

export default Services;
