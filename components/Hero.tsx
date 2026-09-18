import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="hero-glow-2" />
      <div className="container hero-content">
        <Reveal>
          <span className="hero-eyebrow">
            <span className="dot" />
            Available for freelance work
          </span>
        </Reveal>
        <Reveal delay={90}>
          <h1>
            I build <span className="grad">AI workflows</span> that shrink support queues.
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="hero-sub">
            David Livingston - full-stack engineer, 5+ years in production systems.
            By day I build agentic workflow builders for ITSM at <strong>Wavity</strong>;
            before that, 4.5 years on a gaming platform across <strong>40+ brands</strong>.
          </p>
        </Reveal>
        <Reveal delay={270}>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#project">
              See my work <span aria-hidden>→</span>
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </Reveal>
        <Reveal delay={360}>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/david-livingston-2720ab151/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/LivingstonDavid" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:r.nani211998@gmail.com">r.nani211998@gmail.com</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <b>
                5<em>+</em>
              </b>
              <span>years in production</span>
            </div>
            <div className="hero-stat">
              <b>
                40<em>+</em>
              </b>
              <span>brands shipped to</span>
            </div>
            <div className="hero-stat">
              <b>
                24<em>h</em>
              </b>
              <span>reply to scope your queue</span>
            </div>
          </div>
        </Reveal>
      </div>
      <span className="scroll-hint">Scroll</span>
    </section>
  );
}
