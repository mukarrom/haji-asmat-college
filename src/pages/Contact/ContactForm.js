import React from 'react';

function ContactForm() {
  return (
    <div className="my-10 lg:w-1/2 lg:mx-6">
      <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-2xl shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300 dark:shadow-black">
        <h1 className="text-lg font-medium text-gray-700">
          What do you want to ask
        </h1>

        <form className="mt-6">
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="contact-form-input"
            />
          </div>
          {/* Phone number */}
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Phone Number
            </label>
            <input
              type="email"
              placeholder="+8801345678900"
              className="contact-form-input"
            />
          </div>
          {/* Email */}
          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="contact-form-input"
            />
          </div>

          <div className="w-full mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Message
            </label>
            <textarea
              className="contact-form-t-area"
              placeholder="Message"
            />
          </div>

          <button className="contact-form-button">get in touch</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
