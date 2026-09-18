export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">
              David <em>Livingston</em>
            </span>
            <p>Full-stack engineer building AI workflow automation for support teams. Hyderabad, India.</p>
          </div>
          <div className="footer-col">
            <span className="footer-head">Site</span>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#project">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <span className="footer-head">Elsewhere</span>
            <a href="https://www.linkedin.com/in/david-livingston-2720ab151/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/LivingstonDavid" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://contra.com/david_livingston_a1i4agt0" target="_blank" rel="noopener noreferrer">Contra</a>
            <a href="https://www.upwork.com/freelancers/~016655d4fdb98c5664" target="_blank" rel="noopener noreferrer">Upwork</a>
            <a href="mailto:r.nani211998@gmail.com">r.nani211998@gmail.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 David Livingston</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
