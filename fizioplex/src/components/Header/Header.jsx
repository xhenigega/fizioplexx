import React from "react";
import Navbar from "../Navbar/Navbar";
import video1 from "../../assets/video/fizioplexx.mp4";
import video2 from "../../assets/video/landingpagevideo.mp4";
import video3 from "../../assets/video/landingpage2.mp4";

const Header = () => {
  return (
    <div>
      <section>
        <div className="bg-secondary font-roboto text-white py-2">
          <Navbar />
          <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8  flex flex-col md:flex-row  justify-center items-center min-h-screen">
            <div className="flex flex-col w-full lg:w-1/3 justify-center items-center text-center md:text-left md:items-start">
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
                href="/contact"
                className="bg-transparent hover:bg-primary text-white hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-primary hover:border-transparent transition-colors duration-300"
              >
                Rezervo Konsultën Tënde Falas
              </a>
            </div>
            <div className="flex justify-center items-center w-full lg:w-2/3 mt-8 md:mt-0 md:ml-20 px-4 ">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                <video
                  className="inline-block rounded-l-full hidden xl:block w-full"
                  autoPlay
                  muted
                  loop
                >
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video
                  className="inline-block rounded-full w-full"
                  autoPlay
                  muted
                  loop
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <video
                  className="inline-block rounded-r-full hidden xl:block w-full"
                  autoPlay
                  muted
                  loop
                >
                  <source src={video3} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
