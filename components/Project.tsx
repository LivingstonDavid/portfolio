import Reveal from "./Reveal";

export default function Project() {
  return (
    <section className="project" id="project">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="kicker">Featured Work</p>
            <h2>Don't take my word for it. Click around.</h2>
          </div>
        </Reveal>
        <div className="project-card">
          <Reveal>
            <a
              className="project-shot"
              href="https://flowdesk-gamma-ashen.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/flowdesk-builder.png"
                alt="Flowdesk workflow builder: step palette with classify ticket, score priority, draft reply, route and escalate"
                loading="lazy"
              />
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="project-info">
              <span className="badge">Live demo · Synthetic data</span>
              <h3>Flowdesk - agentic ITSM workflow builder</h3>
              <p>
                A visual builder that turns a support runbook into a working automated
                workflow. Compose triage, reply-drafting, routing and escalation steps on a
                canvas, then watch the workflow chew through a live ticket queue.
              </p>
              <ul className="project-points">
                <li>Designed, built and deployed solo - product, frontend, backend, infra</li>
                <li>Next.js, Node.js, TypeScript, LLM orchestration, AWS</li>
                <li>Classification, confidence scores, drafted replies, live results dashboard</li>
              </ul>
              <div className="project-links">
                <a
                  className="btn btn-primary"
                  href="https://flowdesk-gamma-ashen.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the live demo <span aria-hidden>↗</span>
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://github.com/LivingstonDavid/flowdesk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the code <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
