import React from 'react';

function Intro() {
  return (
    <section
      id="Intro"
      className="w-full h-screen flex justify-center items-center bg-fixed
 bg-cover bg-bottom"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg")`,
      }}
    >
      <div className="max-w-screen-lg justify-items-center items-center text-center p-6">
        <h1 className=" text-3xl md:text-5xl text-white leading-normal">
          Hi! I'm <strong>Prologue</strong>, a <strong>free</strong> responsive
          site template designed by <strong>HTML5 UP</strong>.
        </h1>
        <p className="text-white text-xl leading-loose pt-4">
          Ligula scelerisque justo sem accumsan diam quis <br /> vitae natoque
          dictum sollicitudin elementum.
        </p>
        <button className=" bg-blue-500 rounded-lg px-14 py-6 mt-10">
          Magna Aliquam
        </button>
      </div>
    </section>
  );
}

export default Intro;
