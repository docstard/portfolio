import React from "react";
import MyImage from "../../public/img2.png"; // Adjust the path as necessary
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <Image src={MyImage} alt="My img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            About <span>Me</span>
          </h1>
          {/* <h2>Data Science Engineer, Full-stack Developer</h2> */}
          <h2>
            Building pixel-perfect, performance-first frontend experiences
          </h2>
          <p>
            {/* From building machine learning models and NLP applications to
            designing fast, scalable frontends in React — I love turning complex
            ideas into functional, user-friendly products. I’ve worked with
            companies like Proism and Airtel, and also lead freelance projects
            through my agency, AtticFlow. I’m deeply interested in the
            intersection of AI, product design, and business — and constantly
            exploring how technology can solve real-world problems. */}
            Hi, I'm Dhruv Choudhary, a frontend developer who loves turning
            clean design into performant, accessible, and engaging digital
            experiences.
          </p>
          <p>
            I specialize in React.js, Next.js, and modern frontend technologies
            to build responsive websites, web apps, landing pages, and
            e-commerce storefronts. Whether it's hand-coded interfaces or
            no-code Webflow builds, I create solutions that are fast, scalable,
            and easy to maintain.
          </p>
          <p>
            From building full-fledged UIs with Redux Toolkit and Tailwind CSS,
            to deploying slick landing pages or collaborating with designers to
            convert Figma files into pixel-perfect code — I bring both speed and
            attention to detail to every project.
          </p>
          <p>
            I focus on working with:
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>Small businesses & startups who need fast, clean websites</li>
              <li>Product builders looking for MVP frontends</li>
              <li>Creators & clients who value modern, mobile-first web design</li>
            </ul>
            Let's build something users actually enjoy using.
          </p>

          {/* <a href="#" className="cta">
            {" "}
            Download Resume{" "}
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
