import React from "react";
// import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            {/* <Flip top> */}
            <p className="text-4xl font-bold inline border-b-4 border-blue-600 justify-between">
              About
            </p>
            {/* </Flip> */}
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold mt-2">
            {/* <Fade left> */}
            <p>
              Hi, I'm Michel KACOU, nice to meet you. Please take a look around
            </p>
            {/* </Fade> */}
          </div>
          <div className="sm:text-left text-xl">
            {/* <Fade right> */}
            <p>
              I'm passionate about building interfaces that provide a seamless
              user experience whether it's a small business or a large
              corporation, I'm committed to delivering high-quality digital
              products that meet the needs of any client.
            </p>

            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
