import Reveal from "./Reveal";

const steps = [
  {
    title: "Scope",
    body: "Send me your three most common ticket types. Within a day you know whether automation can cut them, and what it takes.",
  },
  {
    title: "Build",
    body: "Fixed scope, working software in days, not months. No hourly meter running while you wait.",
  },
  {
    title: "Handover",
    body: "Every project ends with a handover doc and a walkthrough call, so your team owns what I build.",
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="kicker"><span className="kick-num">06</span>How I work</p>
            <h2>Scope, build, hand over. That&apos;s it.</h2>
          </div>
        </Reveal>
        <div className="process-grid">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="process-step">
                <span className="process-num">{i + 1}</span>
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
