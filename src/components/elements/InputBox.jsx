import React from 'react';

function InputBox() {
  return (
    <div className="w-full  mx-auto max-w-screen-xl p-6">
      <form className="w-full py-6 ">
        <div className=" grid grid-cols-2 gap-6 bg-gray-200">
          <div className="cols-span-1">
            <input
              className="bg-white w-full p-5 text-xl rounded-lg"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="cols-span-1">
            <input
              className="bg-white w-full p-5 text-xl text-gray-500 rounded-lg"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="col-span-2 ">
            <textarea
              className="bg-white w-full p-5 text-xl rounded-lg"
              type="text"
              placeholder="Message"
              rows={8}
            />
          </div>
          <div className="col-span-2 ">
            <input
              className=" p-5 text-white text-xl rounded-lg bg-gray-400 hover:bg-gray-500"
              type="button"
              value="Send Message"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
