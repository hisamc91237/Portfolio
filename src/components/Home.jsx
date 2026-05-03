import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import CrossLine from './ui/CrossLine';
import Education from "./Education";

export default function Home() {
  return (
    <>
      <Hero />
      <CrossLine />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </>
  );
}
