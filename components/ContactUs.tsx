import React from 'react'

export default function ContactUs() {
  return (

    <div id="contact-us" className="bg-gray-100 h-screen">
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-left">Contact Us</h2>
        <form className="flex flex-col w-full max-w-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl" action="/contact-us" method="POST">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email address
          </label>
          <input type="email" name="email" id="email" className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" aria-required="true" />
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input type="text" name="subject" id="subject" className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" aria-required="true" />
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea name="message" id="message" className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" aria-required="true"></textarea>
          <button type="submit" className="mt-4 w-full flex justify-center py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white font-bold text-lg rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
