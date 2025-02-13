import React from 'react';

function Card({ title, image }) {
  return (
    <section className="w-full h-full justify items-center">
      <img className="w-full " src={image} />
      <div className="w-full items-center py-6 text-xl bg-white text-gray-500 border-0 border-white-700">
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default Card;
