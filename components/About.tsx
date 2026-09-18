import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="kicker">About</p>
            <h2>Engineer first, automation specialist by focus.</h2>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={100}>
            <div className="about-copy">
              <p>
                I'm a full-stack engineer with <strong>5+ years in production systems</strong>.
                In my day job at <strong>Wavity</strong> I build agentic workflow builders for
                IT service management - the same kind of automation I build for clients:
                ticket triage, draft replies, escalation routing, help-center agents.
              </p>
              <p>
                Before Wavity I spent <strong>4.5 years at Entain India</strong>, growing from
                trainee to Software Engineer II on a high-traffic poker and casino platform
                serving <strong>40+ brands</strong> - so reliability under load is a habit,
                not a claim.
              </p>
              <p>
                How I work: <strong>fixed scope, working software in days not months</strong>,
                and every project ends with a handover doc and a walkthrough call, so your
                team owns what I build.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="about-card">
              <div className="about-row">
                <span>Role</span>
                <b>Software Development Engineer II</b>
              </div>
              <div className="about-row">
                <span>Company</span>
                <b>Wavity</b>
              </div>
              <div className="about-row">
                <span>Based in</span>
                <b>Hyderabad, India</b>
              </div>
              <div className="about-row">
                <span>Focus</span>
                <b>AI workflow automation for support teams</b>
              </div>
              <div className="about-row">
                <span>Rate</span>
                <b>$40/hr or fixed scope</b>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
