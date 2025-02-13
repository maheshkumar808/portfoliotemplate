import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaTh } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Header({ setShow }) {
  return (
    <section className="w-full h-[86vh] bg-gray-800 justify-items-end item-center text-right">
      <div className="w-full  grid grid-cols-4  py-8 px-5 ">
        <div className="col-span-1">
          <img
            className=""
            src="https://html5up.net/uploads/demos/prologue/images/avatar.jpg"
          ></img>
        </div>
        <div className="col-span-3">
          <h1 className="text-2xl text-white">
            <strong>Jane Doe</strong>
          </h1>
          <p className="text-sm text-white">Hyperspace Engineer</p>
        </div>
      </div>
      <nav className="w-full">
        <a href="#Intro" onClick={() => setShow(false)}>
          <div className="w-full  grid grid-cols-4 p-5">
            <div className="col-span-1">
              <FaHome className=" text-2xl text-gray-500 hover:text-pink-400" />
            </div>
            <div className="col-span-3">
              <p className="text-xl text-gray-500 ">Intro</p>
            </div>
          </div>
        </a>
        <a href="#portfolio" onClick={() => setShow(false)}>
          <div className="w-full  grid grid-cols-4 p-5">
            <div className="col-span-1">
              <FaTh className=" text-2xl text-gray-500 hover:text-pink-400" />
            </div>
            <div className="col-span-3">
              <p className="text-xl text-gray-500 ">Portfolio</p>
            </div>
          </div>
        </a>
        <a href="#about" onClick={() => setShow(false)}>
          <div className="w-full  grid grid-cols-4 p-5">
            <div className="col-span-1">
              <FaUser className=" text-2xl text-gray-500 hover:text-pink-400" />
            </div>
            <div className="col-span-3">
              <p className="text-xl text-gray-500 ">About Me</p>
            </div>
          </div>
        </a>
        <a href="#contact" onClick={() => setShow(false)}>
          <div className="w-full  grid grid-cols-4 p-5">
            <div className="col-span-1">
              <MdEmail className=" text-2xl text-gray-500 hover:text-pink-400" />
            </div>
            <div className="col-span-3">
              <p className="text-xl text-gray-500 ">Contact</p>
            </div>
          </div>
        </a>
      </nav>
    </section>
  );
}

export default Header;
