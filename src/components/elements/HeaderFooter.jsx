import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';

function HeaderFooter() {
  return (
    <section className="w-full h-[14vh] bg-gray-800 ">
      <div className="w-full justify-items-center grid grid-cols-5 p-12">
        <div>
          <FaTwitter className=" text-2xl text-gray-500 hover:text-white" />
        </div>
        <div>
          <FaFacebookF className=" text-2xl text-gray-500 hover:text-white" />
        </div>
        <div>
          <FaGithub className=" text-2xl text-gray-500 hover:text-white" />
        </div>
        <div>
          <FaDribbble className=" text-2xl text-gray-500 hover:text-white" />
        </div>
        <div>
          <MdEmail className=" text-2xl text-gray-500 hover:text-white" />
        </div>
      </div>
    </section>
  );
}

export default HeaderFooter;
