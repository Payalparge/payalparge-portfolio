import Navbar from './Component/Navbar';
import Hero from './Component/Hero/Hero';
import Skills from './Component/Skills/Skills';
import Projects from './Component/Projects/Projects';
import Contact from './Component/ContactMe/Contact';
import './App.css';
import Footer from './Component/Footer/Footer';
import { useRef } from 'react';
import Experience from './Component/Experience/Experience';

function App() {
  const contactRef = useRef();

  return (
    <>
      <Navbar scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} />
      <div className="container">
        <section id="home">
          <Hero scrollToContact={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
}
export default App;