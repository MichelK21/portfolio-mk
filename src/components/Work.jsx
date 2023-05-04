import React from "react";
// import RecycleNow from "../assets/recycleNow";
// import WorkImg from "../assets/workImg.jpeg";
import Linkedin from "../assets/projects/linkedin.jpg";
import Dalle from "../assets/projects/dalle-img.jpg";
import Lyriks from "../assets/projects/lyriks.jpg";
// import Locapic from "../assets/locapic";
// import MyMoviz from "../assets/mymoviz";
// import MorningNews from "../assets/morningnews";
import Videos from "./Videos";
import RecycleNow from "../assets/projects/recycleNow.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-gray-400 font-bold border-b-4 inline border-blue-600">
            Work
          </p>

          <p className="py-6">Have a look of my recent work</p>
        </div>

        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Dalle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Dall-E Clone
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg gray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/MichelK21/dalle-clone-mk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg gray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${Lyriks})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Music Web App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo <Videos />
                  </button>
                </a>
                <a
                  href="https://github.com/MichelK21/Punchline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${Linkedin})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Linkedin Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://linkedin-clone-mk-99af8.firebaseapp.com">
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/MichelK21/linkedin-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${RecycleNow})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {" "}
            *{/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                Recycle Now
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/abdouthetif/save-front">
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* grid items */}
          {/* <div
            style={{ backgroundImage: `url(${Dalle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
          {/* Hover effects */}

          {/* <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
          {/* grid items */}
          {/* <div
            style={{ backgroundImage: `url(${Dalle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          > */}
          {/* Hover effects */}

          {/* <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rouded-lggray px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
