import React from 'react';
import Card from './elements/Card';

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full justify-items-center text-center bg-red-50 px-4 "
    >
      <div className=" justify-items-center  max-w-screen-xl">
        <h1 className="text-5xl text-gray-600 py-10">Portfolio</h1>
        <p className="text-xl text-gray-500 leading-loose ">
          Vitae natoque dictum etiam semper magnis enim feugiat convallis
          convallis egestas rhoncus ridiculus in quis risus amet curabitur
          tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam
          vivamus eget. Nunc nibh morbi quis fusce hendrerIpsum Feugiat it lacus
          ridiculus.
        </p>
      </div>
      <div className="max-w-screen-xl  grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 py-10 ">
        <div className="max-w-screen-xl grid grid-cols-1 gap-y-10 ">
          <Card
            title="Ipsum Feugiat"
            image="https://images.pexels.com/photos/30472381/pexels-photo-30472381/free-photo-of-elegant-male-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Card
            title="Rhoncus Semper"
            image="https://html5up.net/uploads/demos/prologue/images/pic03.jpg"
          />
          <Card
            title="Flying Bird"
            image="https://images.pexels.com/photos/30481070/pexels-photo-30481070/free-photo-of-soaring-seagull-against-a-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="max-w-screen-xl grid grid-cols-1 gap-y-10 ">
          <Card
            title="Magna Nullam"
            image="https://html5up.net/uploads/demos/prologue/images/pic04.jpg"
          />
          <Card
            title="Natoque Vitae"
            image="https://html5up.net/uploads/demos/prologue/images/pic05.jpg"
          />
          <Card
            title="Photography"
            image="https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="max-w-screen-xl grid grid-cols-1 gap-y-10 ">
          <Card
            title="Dolor Penatibus"
            image="https://html5up.net/uploads/demos/prologue/images/pic06.jpg"
          />
          <Card
            title="Cows"
            image="https://images.pexels.com/photos/14356738/pexels-photo-14356738.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Card
            title="Orci Convallis"
            image="https://html5up.net/uploads/demos/prologue/images/pic07.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
