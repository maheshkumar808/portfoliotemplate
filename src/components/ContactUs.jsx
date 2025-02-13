import React from 'react';
import InputBox from './elements/InputBox';

function ContactUs() {
  return (
    <section
      id="contact"
      className="w-full justify-items-center text-center bg-gray-200"
    >
      <div className="max-w-screen-xl justify-items-center p-8">
        <h1 className="text-5xl text-gray-600 py-10">Contact</h1>
        <p className="text-xl text-gray-500 leading-loose">
          Elementum sem parturient nulla quam placerat viverra mauris non cum
          elit tempus ullamcorper dolor. Libero rutrum ut lacinia donec curae
          mus. Eleifend id porttitor ac ultricies lobortis sem nunc orci
          ridiculus faucibus a consectetur. Porttitor curae mauris urna mi
          dolor.
        </p>
      </div>
      <InputBox />
    </section>
  );
}

export default ContactUs;
