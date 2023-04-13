import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import MongoDB from "../assets/mongo.png";
import Firebase from "../assets/firebase.png";
import Vercel from "../assets/Vercel.png";
import Github from "../assets/github.png";
import Next from "../assets/next-js-icon-logo.png";

const Skills = () => {
  return (
    <div name="Skills" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div>
        <div>
          <p className="text-white text-[25px]">Experience</p>
          <p className="sm:text-left text-xl">
            There are tech that I've worked with
          </p>
        </div>
        <div>
          <div>
            <img src={HTML} alt="HTML Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
