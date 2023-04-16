import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";

const Home = () => {
  const [nav, SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("Michel KACOU");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      setTimeout(() => {
        setName(name + fullName[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  const [text] = useTypewriter({
    words: ["I'm a Full Stack Developper"],
    loop: 6,
  });

  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white text-[25px]"> Hi, my name is </p>
        {/* <Flash> */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          {name}
          {/* Michel KACOU */}
        </h1>
        {/* </Flash> */}
        <div className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <h2>
            {text} {/* I'm a Full Stack Developper */}
          </h2>
        </div>
        <div className="text-white py-4 max-w-[700px]">
          <p>
            I'm a Full Stack Developper with a background in front-end and
            back-end programming, I'm capable to build a website or an mobile
            app from the conception to the deployment.
          </p>
        </div>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button
              onClick={handleClick}
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover: border-blue-600 "
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
