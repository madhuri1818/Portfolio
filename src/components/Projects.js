import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import healthTracker from "../Assets/healthTracker.png";
import movieRecommendation from "../Assets/movieRecommendation.png";
import codeEditor from "../Assets/codeEditor.png";
import imageGallery from "../Assets/imageGallery.png";
import dictionary from "../Assets/dictionary.png";
import weatherApp from "../Assets/weatherApp.png";
import rockPaperScissors from "../Assets/rockPaperScissors.png";
import adviceGenerator from "../Assets/adviceGenerator.png";
import qrGenerator from "../Assets/qrGenerator.png";
import analogDigitalClock from "../Assets/analogDigitalClock.png";

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timeout);
  }, []);

  const cardItem = [
    {
      id: 1,
      logo: healthTracker,
      name: "Health Tracker (MERN)",
      live: "https://transcendent-pegasus-43b624.netlify.app/",
      github: "https://github.com/madhuri1818/HealthTracker",
      text: "A web application built with the MERN stack that allows users to sign up, log in, add workouts, and view their workout history",
    },
    {
      id: 2,
      logo: movieRecommendation,
      name: "Movie Recommendation (MERN)",
      live: "https://willowy-lokum-0cdb25.netlify.app/",
      github: "https://github.com/madhuri1818/MovieRecommendation",
      text: "A MERN movie recommendation website where you discover films tailored to your taste",
    },
    {
      id: 3,
      logo: codeEditor,
      name: "Code Editor (Reactjs)",
      live: "https://code-editor-a46f6.web.app/",
      github: "https://github.com/madhuri1818/Code-editor",
      text: "A Code editor made with ReactJS where you can write HTML, CSS, and JS code separately and live rendering of the combined output below.",
    },
    {
      id: 4,
      logo: imageGallery,
      name: "Image Gallery (Reactjs)",
      live: "https://imgallery-8a5ff.web.app/",
      github: "https://github.com/madhuri1818/ImageGallery",
      text: "A Image Gallery website made with React. Easily search and discover stunning pictures. It's responsive, easy to use, and welcomes contributions. Enjoy browsing images on any device!",
    },
    {
      id: 5,
      logo: dictionary,
      name: "Dictionary (Reactjs)",
      live: "https://dict-eceff.web.app/",
      github: "https://github.com/madhuri1818/Dictionary",
      text: "Dictionary web application built using React.js and an external API. The app allows users to search for the definitions, parts of speech, and examples of words.",
    },
    {
      id: 6,
      logo: weatherApp,
      name: "Weather App (Reactjs)",
      live: "https://weather-be55d.web.app/",
      github: "https://github.com/madhuri1818/Weather",
      text: "A React-powered web app showcasing real-time weather information for cities worldwide, with a modern interface and OpenWeatherMap API integration.",
    },
    {
      id: 7,
      logo: rockPaperScissors,
      name: "Rock Paper Scissors (Reactjs)",
      live: "https://rockpaperscissors-a520a.web.app/",
      github: "https://github.com/madhuri1818/Rock-Paper-Scissors",
      text: "Play the game of Rock, Paper, Scissors in this interactive React website. Challenge the computer, track your wins, and enjoy.",
    },
    {
      id: 8,
      logo: adviceGenerator,
      name: "Advice Generator (Reactjs)",
      live: "https://advice-ddeb2.web.app/",
      github: "https://github.com/madhuri1818/Advice-Generator",
      text: "Click a button, get advice! Experience wisdom on this React-powered website.",
    },
    {
      id: 9,
      logo: qrGenerator,
      name: "QR Code Generator (Nodejs)",
      live: "https://qrgenerator-p4xpum1sm-vellanki-madhuris-projects.vercel.app/",
      github: "https://github.com/madhuri1818/QR-Code-Generator",
      text: "Create QR codes easily with this EJS-based website. Generate QR codes quickly and share info effortlessly.",
    },
    {
      id: 10,
      logo: analogDigitalClock,
      name: "Analog Digital Clock (Html,CSS,JS)",
      live: "https://analogdigitalclock-6bzvr9sic-vellanki-madhuris-projects.vercel.app/",
      github: "https://github.com/madhuri1818/Analog-Digital-Clock",
      text: "See the time in analog and digital formats made with HTML, JS, CSS .",
    },
  ];

  return (
    <div id='projects' className="bg-black text-white min-h-screen">
      {loading ? (
        <SkeletonTheme baseColor="#4A5568" highlightColor="#2D3748">
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <h1 className="text-3xl font-bold mb-5">
              <Skeleton height={30} width={200} />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="overflow-hidden">
                    <Skeleton height={200} />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">
                      <Skeleton width={100} />
                    </h2>
                    <p className="text-gray-700 mb-4">
                      <Skeleton count={3} />
                    </p>
                    <div className="flex justify-between">
                      <Skeleton width={80} height={30} />
                      <Skeleton width={80} height={30} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SkeletonTheme>
      ) : (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
          <h1 className="text-3xl font-bold mb-5">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {cardItem.map(({ id, logo, name, text, live, github }) => (
              <div
                className="bg-white text-black rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                key={id}
              >
                <div className="overflow-hidden">
                  <img
                    src={logo}
                    className="w-full h-48 object-cover"
                    style={{
                      objectPosition: "center center",
                      objectFit: "cover",
                      clipPath: "inset(12% 0 10% 0)",
                    }}
                    alt={name}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{name}</h2>
                  <p className="text-gray-700 mb-4">{text}</p>
                  <div className="flex justify-between">
                    {live ? (
                      <a href={live} target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                          Live
                        </button>
                      </a>
                    ) : (
                      <button className="bg-gray-400 text-white font-bold px-4 py-2 rounded cursor-not-allowed">
                        Live
                      </button>
                    )}
                    {github ? (
                      <a href={github} target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                          GitHub
                        </button>
                      </a>
                    ) : (
                      <button className="bg-gray-400 text-white font-bold px-4 py-2 rounded cursor-not-allowed">
                        GitHub
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
