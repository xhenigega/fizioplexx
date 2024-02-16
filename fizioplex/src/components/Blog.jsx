import React from "react";
import { image12, image1, image5, image6 } from "../constants/images";

const cards = [
  {
    id: 1,
    image: image12,
  },
  {
    id: 2,
    image: image5,
  },
  {
    id: 3,
    image: image1,
  },
  {
    id: 4,
    image: image6,
  },
];

const Blog = () => {
  return (
    <section className="bg-secondary">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 font-roboto">
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div key={card.id} className="rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={card.image}
              alt={card.title}
            />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Blog;
