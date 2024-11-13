import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    surname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div className="md:mt-5 flex items-center justify-center base-100 p-6" id='contact'>
      <div className="bg-base-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              value={form.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-700 rounded bg-gray-700 text-white"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
