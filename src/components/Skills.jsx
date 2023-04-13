import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import MongoDB from "../assets/mongo.png";
import Firebase from "../assets/firebase.png";
import Vercel from "../assets/Vercel.png";
import React from "../assets/react.png";
import Vite from "../assets/Vite.png";

const Skills = () => {
  return (
    <div
      name="Skills"
      className=" w-full h-screen bg-[#0a192f]  text-gray-300 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-fullh-full">
        <div>
          <p className="text-4xl text-gray-400 font-bold border-b-4 inline border-blue-600">
            Skills
          </p>
          <p className="py-4"> There are tech that I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Logo" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML Logo" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="HTML Logo" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML Logo" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="HTML Logo" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="HTML Logo" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Vercel} alt="HTML Logo" />
            <p className="my-4">Vercel</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={React} alt="HTML Logo" />
            <p className="my-4">React / React Native</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Vite} alt="HTML Logo" />
            <p className="my-4">Vite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
