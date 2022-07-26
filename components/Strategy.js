import React from "react";
import Link from "next/link";

function Strategy() {
  return (
    <section className="block relative z-1 bg-blueGray-600">
    <div className="container mx-auto">
      <div className="justify-center flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4  -mt-24">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 px-4">
              <Link href="/auth/login">
                <div className="px-3 py-3 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <h5 className="text-xl font-bold pb-4 text-center">
                    Business Strategy
                  </h5>
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto rounded-lg"
                    src="/img/business-strategy.png"
                  />
                  <p className="px-2 py-2 text-base font-light leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque convallis suscipit metus nec pretium.
                    Aliquam lobortis, felis non egestas maximus, nisi
                    nulla laoreet ipsum, ac mattis massa diam nec ante.
                  </p>
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Learn More
                  </button>
                </div>
              </Link>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <Link href="/profile">
                <div className="px-3 py-3 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <h5 className="text-xl font-bold pb-4 text-center">
                    Local Marketing
                  </h5>
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto rounded-lg"
                    src="/img/local-marketing.jpeg"
                  />
                  <p className="px-2 py-2 text-base font-light leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque convallis suscipit metus nec pretium.
                    Aliquam lobortis, felis non egestas maximus, nisi
                    nulla laoreet ipsum, ac mattis massa diam nec ante.
                  </p>
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Learn More
                  </button>
                </div>
              </Link>
            </div>

            <div className="w-full lg:w-4/12 px-4">
              <Link href="/landing">
                <div className="px-3 py-3 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <h5 className="text-xl font-bold pb-4 text-center">
                    Social Media
                  </h5>
                  <img
                    alt="..."
                    className="align-middle border-none max-w-full h-auto rounded-lg"
                    src="/img/social-media.png"
                  />
                  <p className="px-2 py-2 text-base font-light leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Quisque convallis suscipit metus nec pretium.
                    Aliquam lobortis, felis non egestas maximus, nisi
                    nulla laoreet ipsum, ac mattis massa diam nec ante.
                  </p>
                  <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Learn More
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Strategy;
