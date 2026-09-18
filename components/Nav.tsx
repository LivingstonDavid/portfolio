"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="nav-logo" href="#top">
          David <em>Livingston</em>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#project">Work</a>
          <a className="nav-cta" href="#contact">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
