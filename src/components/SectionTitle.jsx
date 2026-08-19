export default function SectionTitle({ eyebrow, title, accent, copy, align = '' }) {
  return <div className={`section-title ${align}`}>
    <p className="eyebrow"><span></span>{eyebrow}</p>
    <h2>{title} {accent && <em>{accent}</em>}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>;
}
