import React, { useState } from 'react';
import Swal from 'sweetalert2';

function InputBox() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  console.log('formData', formData);
  // const validateEmail = (email) => {
  //   return email.match(
  //     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //   );
  // };

  // const handleSubmit = () => {
  //   if (!formData.name) {
  //     alert('Please enter name!');
  //     return;
  //   } else if (!formData.email) {
  //     alert('Please enter email!');
  //     return;
  //   } else if (!validateEmail(formData.email)) {
  //     alert('Please enter a valid email!');
  //     return;
  //   } else if (!formData.message) {
  //     alert('Please enter message!');
  //     return;
  //   }

  //   alert('Details submitted successfully!');
  //   setFormData({
  //     name: '',
  //     email: '',
  //     message: '',

  //   });
  // };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const handleSubmit = () => {
    if (!formData.name) {
      Swal.fire({
        title: 'Error!',
        text: 'Plese Enter Name ',
        icon: 'error',
      });
      return;
    } else if (!formData.email) {
      Swal.fire({
        title: 'Error!',
        text: 'Plese Enter Email',
        icon: 'error',
      });
      return;
    } else if (!validateEmail(formData.email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Plese Enter Valid Email',
        icon: 'error',
      });
      return;
    } else if (!formData.message) {
      Swal.fire({
        title: 'Error!',
        text: 'Plese Enter Message ',
        icon: 'error',
      });
      return;
    }
    Swal.fire({
      title: 'Successfull!',
      text: 'Your Form Submitted Successfully',
      icon: 'success',
    });
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <div className="w-full  mx-auto max-w-screen-xl p-6">
      <form className="w-full py-6 ">
        <div className=" grid grid-cols-2 gap-6 bg-gray-200">
          <div className="cols-span-1">
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="bg-white w-full p-5 text-xl text-gray-500 rounded-lg outline-gray-300 hover:outline-gray-400"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="cols-span-1">
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="bg-white w-full p-5 text-xl text-gray-500 rounded-lg outline-gray-300 hover:outline-gray-400"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="col-span-2 ">
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="bg-white w-full p-5 text-xl text-gray-500 rounded-lg outline-gray-300 hover:outline-gray-400"
              type="text"
              placeholder="Message"
              rows={8}
            />
          </div>
          <div className="col-span-2 ">
            <button
              onClick={handleSubmit}
              className=" p-5 text-white text-xl rounded-lg bg-gray-400 hover:bg-gray-500"
              type="button"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputBox;
