import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Project />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
