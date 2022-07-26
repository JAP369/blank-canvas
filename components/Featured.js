import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Featured() {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    // console.log("use effect hook inView = ", inView);
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div>
        <motion.div className="relative z-10 p-5  text-white bg-purple-300 bg-opacity-100 rounded-xl">
          <h1
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            className="text-6xl text-bold"
          >
            Today is a blank canvas. Create a masterpiece.
          </h1>
        </motion.div>
      </div>

      <video
        autoPlay
        loop
        muted
        className="absolute z-30 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={require("../public/videoBG.mp4")} type="video/mp4" />
      </video>
    </section>
  );
}

export default Featured;
