import React from "react";

function Counter() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-blueGray-600">
              COUNTER SECTION
              {/* Today is a blank canvas. Create a masterpiece. */}
            </h2>
            <div className="mt-12">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                GET STARTED
              </a>
              <div className="text-start mb-25">
                <h2 className="tag-1 bg-6 color-green-900">What We Do</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
