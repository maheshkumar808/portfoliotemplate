import React, { useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderFooter from './components/elements/HeaderFooter';
import ContactUs from './components/ContactUs';
import { HiBars3 } from 'react-icons/hi2';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex ">
      <div className="w-[500px] h-screen hidden md:block">
        <Header setShow={setShow} />
        <HeaderFooter />
      </div>
      <div className="block md:hidden absolute p-2 bg-gray-400 ">
        <HiBars3
          className="text-4xl text-white"
          onClick={() => setShow(!show)}
        />
      </div>
      {show && (
        <div className="absolute inset-0">
          <Header setShow={setShow} />
          <HeaderFooter setShow={setShow} />
        </div>
      )}
      <div className="w-full overflow-y-auto h-screen ">
        <Intro />
        <Portfolio />
        <AboutMe />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
