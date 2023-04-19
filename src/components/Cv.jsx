import React from "react";
import CV from "../assets/cv-michel.jpg";

const Cv = () => {
  return (
    <div className="bg-[#0a192f] flex justify-center ">
      <img className="w-[75%]  " src={CV} alt="cv" />
    </div>
  );
};

export default Cv;
