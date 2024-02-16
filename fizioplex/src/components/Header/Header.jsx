import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar/Navbar";
import video1 from "../../assets/video/fizioplexx.mp4";
import video2 from "../../assets/video/landingpagevideo.mp4";
import video3 from "../../assets/video/landingpage2.mp4";

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const videoVariants = {
    video1: { initial: { y: -1000 }, animate: { y: 0 }, transition: { delay: 3 } },
    video2: { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 2 } },
    video3: { initial: { y: 1000 }, animate: { y: 0 }, transition: { delay: 3 } },
  };

  const textContainerVariants = {
    hidden: { x: -500, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 , duration:4 ,delay:1,} },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  return (
    <div ref={ref}>
      <section>
        <div className="bg-secondary font-roboto text-white py-2">
          <Navbar />
          <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8  flex flex-col md:flex-row  justify-center items-center min-h-screen">
          <motion.div
              className="flex flex-col w-full lg:w-1/3 justify-center items-center text-center md:text-left md:items-start"
              variants={textContainerVariants}
              initial="hidden"
              animate={controls}
            >
              <h1 className="text-6xl sm:text-4xl md:text-7xl lg:text-8xl py-8 text-primary tracking-widest">
                Fizioplex
              </h1>
              <p className="text-sm md:text-xl leading-relaxed md:leading-snug md:my-3">
                Klinikë Fizioterapie dhe Fitnessi
              </p>
              <h2 className="text-sm md:text-sm lg:text-2xl leading-relaxed md:leading-snug mb-4 md:mb-10">
                Aty ku Trupi Gjen Shërim dhe Fuqi
              </h2>
              <a
               href="tel:+355684669042"
                className="bg-transparent hover:bg-primary animate-bounce text-white hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent transition-colors duration-300"
              >
                Rezervo Konsultën Tënde Falas
              </a>
            </motion.div>
            <div className="flex justify-center items-center w-full lg:w-2/3 mt-8 md:mt-0 md:ml-20 px-4 ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
              <motion.video
                  className="inline-block rounded-l-full hidden xl:block w-full"
                  autoPlay
                  muted
                  loop
                  initial={videoVariants.video1.initial}
                  animate={videoVariants.video1.animate}
                  transition={videoVariants.video1.transition}
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
                <motion.video
                  className="inline-block rounded-full w-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                  initial={videoVariants.video2.initial}
                  animate={videoVariants.video2.animate}
                  transition={videoVariants.video2.transition}
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
                <motion.video
                  className="inline-block rounded-r-full hidden xl:block w-full"
                  autoPlay
                  muted
                  loop
                  initial={videoVariants.video3.initial}
                  animate={videoVariants.video3.animate}
                  transition={videoVariants.video3.transition}
                >
                  <source src={video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
