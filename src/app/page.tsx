import Image from "next/image";
import Header from "./components/header/page";
import Information from "./components/information/page";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Contact from "./components/Contact/Contact";
export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] text-white h-screen  overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/10 scrollbar-thumb-[#f7ab0a]/80">
      <Header />
      <section id="hero" className="snap-start">
        <Information />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="experience">
        <Skill />
      </section>
      <section id="experience">
        <Project />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
