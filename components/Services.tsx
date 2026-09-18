import Reveal from "./Reveal";

const services = [
  {
    title: "Ticket triage & routing",
    body: "Incoming tickets classified, prioritized and sent to the right queue automatically - no manual sorting, no triage backlog.",
  },
  {
    title: "Reply drafting & help-center agents",
    body: "Draft replies your support team can send with one review, and help-center agents that deflect the repeat questions.",
  },
  {
    title: "Escalation & workflow automation",
    body: "Your support runbooks turned into automated workflows - triage, routing, escalation and handoffs, orchestrated with LLMs.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="kicker">Services</p>
            <h2>What I build for support teams.</h2>
            <p>Fixed scope, clear price, working software - the same automation I build full-time, packaged for your queue.</p>
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="service-card">
                <span className="service-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
