import React from "react";
import pic from "../Assets/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faCloudArrowDown, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";
import resume from "../Assets/Resumenew18.pdf";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center overflow-x-hidden" id="home">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto p-4">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 animate-bounce-slow">
          <img src={pic} className="w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full" alt="Profile" />
        </div>
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl font-bold">Hello, I'm Vellanki Madhuri</h1>
          <h2 className="text-xl sm:text-2xl">
            And I'm a <span className="text-blue-700 font-bold">
              <ReactTyped
                strings={["Full Stack Developer", "Frontend Developer", "Competitive Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 text-justify">
            I'm an Aspiring Software Developer who loves creating responsive, user-friendly, interactive MERN projects. 
            Good at coding and data structures, always learning new technologies.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <a href="https://github.com/madhuri1818" className="hover:text-gray-500">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/vellanki-madhuri-28b405254/" className="hover:text-gray-500">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              {/* Uncomment these if you need them */}
              {/* <a href="https://wa.me/919573685443" className="hover:text-gray-500">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a href="https://t.me/madhuri181818" className="hover:text-gray-500">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </a> */}
              {/* <a href="mailto:babusuri528@gmail.com" className="hover:text-gray-500">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              <a href="tel:+919573685443" className="hover:text-gray-500">
                <FontAwesomeIcon icon={faPhone} size="2x" />
              </a> */}
            </div>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-6 rounded inline-flex items-center mt-4 md:mt-0" download>
              <FontAwesomeIcon icon={faCloudArrowDown} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
