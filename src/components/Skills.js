import React from "react";
import c from "../Assets/c.png";
import cpp from "../Assets/cpp.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import javascript from "../Assets/javascript.png";
import python from "../Assets/python.png";
import mongodb from "../Assets/mongodb.png";
import expressjs from "../Assets/express.png";
import nodejs from "../Assets/nodejs.png";
import reactjs from "../Assets/react.png";
import mysql from "../Assets/mysql.png";
import tailwindcss from "../Assets/tailwindcss.png";
import bootstrap5 from "../Assets/bootstrap5.png"
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: c,
      name: "C",
    },
    {
      id: 2,
      logo: cpp,
      name: "C++",
    },
    {
      id: 3,
      logo: html,
      name: "HTML",
    },
    {
      id: 4,
      logo: css,
      name: "CSS",
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 6,
      logo: python,
      name: "Python",
    },
    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: expressjs,
      name: "Express.js",
    },
    {
      id: 9,
      logo: nodejs,
      name: "Node.js",
    },
    {
      id: 10,
      logo: reactjs,
      name: "React.js",
    },
    {
      id: 11,
      logo: mysql,
      name: "MySQL",
    },
    {
      id: 12,
      logo : tailwindcss,
      name: "Tailwind CSS",
    },
    {
      id: 13 ,
      logo  : bootstrap5,
      name: "Bootstrap 5",
    },
  ];

  return (
    <div
      id="skills"
      className="bg-black text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] border-black bg-white text-black rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:rotate-2 hover:shadow-lg animate-card-move"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt={name} />
              <div>
                <div className="mt-2 text-center font-semibold">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
