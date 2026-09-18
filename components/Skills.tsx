import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="kicker"><span className="kick-num">04</span>Skills</p>
            <h2>The toolbox, battle-tested.</h2>
            <p>Everything listed here has run in production, not just in tutorials.</p>
          </div>
        </Reveal>
        <div className="skills-grid">
          <Reveal>
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Angular</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>REST API design</li>
                <li>API integration</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="skill-card">
              <h3>Cloud &amp; Platform</h3>
              <ul>
                <li>Amazon Web Services</li>
                <li>CI/CD pipelines</li>
                <li>High-traffic production ops</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={270}>
            <div className="skill-card">
              <h3>AI &amp; Automation</h3>
              <ul>
                <li>LLM orchestration</li>
                <li>Workflow automation</li>
                <li>Chatbot development</li>
                <li>Help-center agents</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
