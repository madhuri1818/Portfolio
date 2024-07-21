import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="flex space-x-6 mb-6">
          <a href="https://github.com/madhuri1818" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/vellanki-madhuri-28b405254/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://wa.me/919573685443" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="https://t.me/madhuri181818" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
          <a href="mailto:babusuri528@gmail.com" className="hover:text-gray-400 transition-colors duration-300">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="tel:+919573685443" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </a>
        </div>
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
            <p className="text-center">NAD,Visakhapatnam,India</p>
          </div>
        </div>

        <div className="text-center text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} Vellanki Madhuri. All Rights Reserved.</p>
          <p>Designed by Madhuri</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
