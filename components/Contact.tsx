import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal>
          <p className="kicker" style={{ justifyContent: "center" }}>Contact</p>
          <h2>Your support queue is growing faster than your team.</h2>
          <p>
            Send me your three most common ticket types and I'll tell you within a day
            whether automation can cut them.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:r.nani211998@gmail.com">
              r.nani211998@gmail.com <span aria-hidden>→</span>
            </a>
            <a
              className="btn btn-ghost"
              href="https://contra.com/david_livingston_a1i4agt0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me on Contra <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/david-livingston-2720ab151/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/LivingstonDavid" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://contra.com/david_livingston_a1i4agt0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contra
            </a>
            <a
              href="https://www.upwork.com/freelancers/~016655d4fdb98c5664"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upwork
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
