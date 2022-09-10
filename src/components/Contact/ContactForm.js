import React from "react";

const ContactForm = () => {
  return (
    <div class="my-10 lg:w-1/2 lg:mx-6">
      <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-2xl shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300 dark:shadow-black">
        <h1 class="text-lg font-medium text-gray-700">
          What do you want to ask
        </h1>

        <form class="mt-6">
          <div class="flex-1">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              class="contact-form-input"
            />
          </div>
          {/* Phone number */}
          <div class="flex-1 mt-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Phone Number
            </label>
            <input
              type="email"
              placeholder="+8801345678900"
              class="contact-form-input"
            />
          </div>
          {/* Email */}
          <div class="flex-1 mt-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              class="contact-form-input"
            />
          </div>

          <div class="w-full mt-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Message
            </label>
            <textarea
              class="contact-form-t-area"
              placeholder="Message"
            ></textarea>
          </div>

          <button class="contact-form-button">get in touch</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
