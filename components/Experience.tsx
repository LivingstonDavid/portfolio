import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="kicker"><span className="kick-num">03</span>Experience</p>
            <h2>Where I've built.</h2>
          </div>
        </Reveal>
        <div className="timeline">
          <Reveal>
            <div className="tl-item">
              <p className="tl-when">Jun 2026 - Present</p>
              <h3>Software Development Engineer II</h3>
              <p className="tl-org">Wavity · Hyderabad, India</p>
              <p>
                Building agentic workflow builders for IT service management - tools that
                turn support runbooks into automated workflows: triage, reply drafting,
                routing and escalation, orchestrated with LLMs.
              </p>
              <div className="tl-tags">
                <span className="tag">Next.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">LLM orchestration</span>
                <span className="tag">AWS</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="tl-item past">
              <p className="tl-when">Jul 2021 - Feb 2026</p>
              <h3>Software Engineer II</h3>
              <p className="tl-org">Entain India · Hyderabad, India</p>
              <p>
                Full-stack engineer on a high-traffic online gaming platform serving 40+
                brands. Progressed from trainee to Software Engineer II, shipping across
                the stack on poker and casino products where uptime is the product.
              </p>
              <div className="tl-tags">
                <span className="tag">Angular</span>
                <span className="tag">Node.js</span>
                <span className="tag">GraphQL</span>
                <span className="tag">REST</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
