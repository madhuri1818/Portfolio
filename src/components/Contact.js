import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactImage from '../Assets/contact.avif'; 
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_gt4qlw8', 'template_pegcpl1', form.current, 'm7_fDQ2qgXfogY3cM')
      .then(
        () => {
          toast.success('Email sent successfully!');
          form.current.reset(); 
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`);
        },
      );
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center" id="contact">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div className="md:w-1/2 flex justify-center md:animate-bounce-slow md:ml-8">
            <img src={ContactImage} alt="Contact" className="w-64 h-64 rounded-full md:w-80 md:h-80 shadow-lg transform hover:scale-105 transition duration-300"/>
          </div>
          <div className="w-full md:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg">
              <div>
                <label className="block text-lg font-semibold mb-2">Name</label>
                <input type="text" name="from_name" placeholder="Your name" required className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Email</label>
                <input type="email" name="from_email" placeholder="Email" required className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Message</label>
                <textarea name="message" placeholder="Your message" className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
