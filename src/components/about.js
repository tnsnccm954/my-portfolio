import React from "react";

export default function About() {
  return (
    <section id="about" className="my-5" style={{ minHeight: 800 }}>
      <div className="container">
        <div>
          <h1 className="text-shaded fs-1">About-Myself:</h1>
          <div className="description mt-lg-3 ms-3 col-lg-6 fs-4">
            <p>
              Hi, I’m Tanasit. I'm particularly interested in the back-end
              development of a website and a mobile app. In my spare time. To
              expand my knowledge, I am constantly learning about new techniques
              and frameworks. I'm also working on becoming a full-stack
              developer.
            </p>
            <p>
              Also I’m instructor in computer science and related topics such as
              embedded and IOT Development, Robotics and Game Development
              Design.
            </p>
            <p>
              Over the course of my life , I like to gain competence in a
              variety of subjects. I have the{" "}
              <a
                className="link-red text-red"
                href="https://www.16personalities.com/istp-personality"
                target="_blank"
              >
                ISTP
              </a>{" "}
              personality type. I now tutor a small group of independent
              contractors, and I'm always looking for new opportunities.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
