const items = [
  "Next.js",
  "Node.js",
  "TypeScript",
  "React",
  "Angular",
  "GraphQL",
  "AWS",
  "LLM orchestration",
  "Workflow automation",
  "Help-center agents",
];

export default function Marquee() {
  const row = (hidden: boolean) => (
    <div className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span className="marquee-item" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
