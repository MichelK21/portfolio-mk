import Skills from "./components/Skills";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Contact from "./components/Contact";
// import { useRef, useEffect } from "react";

function App() {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     } else {
  //       entry.target.classList.remove("show");
  //     }
  //   });
  // });
  // const myRef = useRef();
  // useEffect(() => {
  //   console.log("aaa");
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About /*ref={myRef} *//>
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
