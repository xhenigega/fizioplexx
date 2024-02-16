import React from "react";
import video1 from "./assets/video/workout.mp4";
import video2 from "./assets/video/postura.mp4";

const videos = [
  {
    id: 1,
    video: video1,
    title: "Workout Video",
  },
  {
    id: 2,
    video: video2,
    title: "Workout Video",
  },
];

const Infovideo = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 font-roboto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {videos.map((video) => (
            <div key={video.id} className="rounded overflow-hidden ">
              <video
                className="w-full h-auto lg:h-[55vw] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infovideo;
