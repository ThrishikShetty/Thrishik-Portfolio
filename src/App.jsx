import { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Loading from "./components/Loading/Loading";
import Aboutme from "./components/aboutme/Aboutme";
import Education from "./components/Education/Education";
import Skills from "./components/skills/Skills";

function App() {
  
  return (
    <>
   
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="AboutMe"><Aboutme/></section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section><Skills/></section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Education"> <Education/></section>
      <section id="ContactMe">
        <Contact />
      </section>
      {/* <div id="footer">
        <Footer />
      </div> */}
      </>

  );
}

export default App;
