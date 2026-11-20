import { profile } from "../data/profile.js";

export default function About() {
  return (
    <section className="section container" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">01 / ABOUT</p>
        <h2 id="about-title">About Me</h2>
      </div>
      <div className="about-body">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
