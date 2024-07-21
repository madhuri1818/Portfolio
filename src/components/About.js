import React from 'react';
import pic from "../Assets/pica.jpg";
import leetcodeIcon from "../Assets/leetcode.png"; 
import codechefIcon from "../Assets/codechef.jpg"; 
import hackerankIcon from '../Assets/hackerank.jpg';
import hackerearthIcon from '../Assets/hackerearth.png';
import geeksforgeeksIcon from '../Assets/geeksforgeeks.png';
import codesignalIcon from '../Assets/codesignal.png';

const About = () => {
  return (
    <div id="about" className="bg-black text-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          I'm an aspiring software developer with a strong foundation in data structures and algorithms. I've solved over 800+ problems
          on <a href="https://leetcode.com/madhuri1818" className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">LeetCode</a> (Rating: 1537) and more than 550+ problems on <a 
          href="https://www.codechef.com/users/madhuri1818" className="underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">CodeChef</a> (Rating: 1505). My passion for continuous learning keeps me updated with the latest 
          technologies,
          Proficient in MongoDB, Express.js, React.js, Node.js, HTML, JavaScript, and CSS. I specialize in frontend and MERN 
          full-stack development. Currently pursuing a B.Tech in Computer Science Engineering, I am eager to explore new technologies
          and contribute to impactful software projects.
          I thrive under pressure and excel at problem-solving. As a self-motivated individual with strong communication skills, 
          I strive to make the best of every opportunity.
        </p>
        <h4 className="text-xl font-bold mb-4">Coding Profiles</h4>
        {/* Profile Icons */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <div className="flex flex-col items-center">
            <a href="https://leetcode.com/madhuri1818" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
              <img src={leetcodeIcon} alt="LeetCode Profile" className="w-10 h-10 rounded-full" />
            </a>
            <span className="text-xs mt-2">LeetCode</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.codechef.com/users/madhuri1818" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
              <img src={codechefIcon} alt="CodeChef Profile" className="w-10 h-10 rounded-full" />
            </a>
            <span className="text-xs mt-2">CodeChef</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.hackerrank.com/profile/madhuri1818" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
              <img src={hackerankIcon} alt="HackerRank Profile" className="w-10 h-10 rounded-full" />
            </a>
            <span className="text-xs mt-2">HackerRank</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.hackerearth.com/@madhuri1818" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
              <img src={hackerearthIcon} alt="HackerEarth Profile" className="w-10 h-10 rounded-full" />
            </a>
            <span className="text-xs mt-2">HackerEarth</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.geeksforgeeks.org/user/babusuri528/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
              <img src={geeksforgeeksIcon} alt="GeeksForGeeks Profile" className="w-10 h-10 rounded-full" />
            </a>
            <span className="text-xs mt-2">GeeksForGeeks</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://app.codesignal.com/profile/madhuri1818" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-300">
              <img src={codesignalIcon} alt="CodeSignal Profile" className="w-10 h-10 rounded-full" />
            </a>
            <span className="text-xs mt-2">CodeSignal</span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img src={pic} className="w-64 h-64 rounded-full md:w-80 md:h-80 animate-bounce-slow" alt="Profile" />
      </div>
    </div>
  );
};

export default About;
