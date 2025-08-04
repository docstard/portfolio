import React from "react";
import "../styles/services.css";

const ServiceDatabase = [
  {
    title: "Responsive Website Development",
    description:
      `Custom-coded websites that are mobile-friendly, clean, and fast. Ideal for portfolios, business sites, and personal brands.`,
    logo: "https://img.icons8.com/?size=100&id=TP9RR7DE1AuH&format=png&color=000000",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "React.js / Next.js Web App Development",
    description:
      `Build modern, scalable web applications using React and Next.js. From fast single-page apps to SEO-optimized dynamic interactive websites.`,
    logo: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "Website Re- designs & UI Revamps",
    description:
      `Modernize outdated or unresponsive websites with a fresh, clean interface. Improve speed, design, and user experience.`,
    logo: "https://img.icons8.com/?size=100&id=48130&format=png&color=000000",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "Landing Pages for Products or Events",
    description:
      `Build high-conversion landing pages tailored for product launches, personal branding, events, or campaigns — designed for clarity and impact.`,
    logo: "https://img.icons8.com/?size=100&id=49407&format=png&color=000000",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "Figma - UI to Code Conversion",
    description: "Turn your Figma or UI design into a pixel-perfect fully functional, production-ready website with clean, maintainable code.",
    logo: "https://img.icons8.com/?size=100&id=8EbY3Bnfw0aL&format=png&color=000000",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "No-Code Website Development",
    description: "Build stunning websites using no-code tools for clients who want editable, low-maintenance platforms.",
    logo: "https://img.icons8.com/?size=100&id=Y643hFCbn1z8&format=png&color=000000",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "E-Commerce Frontend Development",
    description: "Build conversion-optimized store interfaces with custom React storefronts or by enhancing platforms like Shopify.",
    logo: "https://img.icons8.com/?size=100&id=mcR5NsXhvEBx&format=png&color=000000",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "Basic SEO & Performance Optimization",
    description: "Improve visibility and speed with clean code, semantic HTML, semantic tags, meta info, and image optimization.",
    logo: "https://img.icons8.com/?size=100&id=nhndz8YLqqT2&format=png&color=000000 ",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "Maintenance & Support Plans",
    description: "Keep your site fast, secure, and up to date with monthly plans for UI tweaks & bug fixes, Content updates, Performance checks, Code & dependency updates",
    logo: "https://img.icons8.com/?size=100&id=SZIOLhqepltk&format=png&color=000000",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "",
    description: "",
    logo: "",
    link: "",
    tags: "",
    starService: false,
  },
];
// const ServiceDatabase = [
//   {
//     title: "Frontend Development & UI Engineering",
//     description:
//       `Modern, responsive websites and web apps using React.js, Next.js, and industry-best UI 
//       frameworks. We prioritize speed and a seamless user experience.`,
//     logo: "https://img.icons8.com/?size=100&id=TP9RR7DE1AuH&format=png&color=000000",
//     link: "",
//     tags: "",
//     starService: true,
//   },
//   {
//     title: "Full-Stack Web Development",
//     description:
//       `Complete end-to-end development—from beautiful frontends to powerful backend systems. 
//       We build scalable, secure web applications tailored to your goals.`,
//     logo: "https://img.icons8.com/?size=100&id=Y643hFCbn1z8&format=png&color=000000",
//     link: "",
//     tags: "",
//     starService: true,
//   },
//   {
//     title: "Generative AI & Agentic Workflows",
//     description:
//       `Custom GPT-powered agents, RAG pipelines, and AI tools that automate operations, 
//       enhance productivity, and transform internal workflows.`,
//     logo: "https://img.icons8.com/?size=100&id=48130&format=png&color=000000",
//     link: "",
//     tags: "",
//     starService: true,
//   },
//   {
//     title: "Data Science & Business Intelligence",
//     description:
//       `Make sense of your data. We develop analytics dashboards, predictive models, and custom
//       insights to support data-backed decisions.`,
//     logo: "https://img.icons8.com/?size=100&id=nhndz8YLqqT2&format=png&color=000000",
//     link: "",
//     tags: "",
//     starService: true,
//   },
//   {
//     title: "",
//     description: "",
//     logo: "",
//     link: "",
//     tags: "",
//     starService: false,
//   },
//   {
//     title: "",
//     description: "",
//     logo: "",
//     link: "",
//     tags: "",
//     starService: false,
//   },
// ];

const Service = () => {
  return (
    <section id="services">
      <div className="container service">
        <div className="service-top">
          <h1 className="section-title">
            Serv<span>i</span>ces
          </h1>
          <p className="text-2xl">
            {/* At AtticFlow, we turn ideas into impactful digital products —combining AI, data science, and full-stack development to help youlaunch, scale, and innovate with confidence. Whether you're buildinga modern website, automating workflows, or unlocking insights fromdata, our solutions are tailored to your goals and built for the
            future. */}
            Tailored frontend solutions for every stage of your digital journey — from quick no-code builds to custom React applications.
          </p>
        </div>
        <div className="service-bottom">
          {ServiceDatabase.filter((service) => service.starService).map(
            (service, index) => (
              <div key={index} className={`service-item`}>
                <div className="icon">
                  <img src={service.logo} />
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            )
          )}
        </div>

        {/* <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 w-full h-96">
          {ServiceDatabase.filter((service) => service.starService).map(
            (service, index) => (
              <div
                key={index}
                className={`flex bg-blue-500 p-10 z-10 overflow-hidden basis-4/5 flex-col  w-full h-full justify-between relative items-start gap-4`}
              >
                
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            )
          )}
        </div> */}

        {/* <div className="flex align-middle items-center h-full w-full min-h-min gap-3 p-2">
          {ServiceDatabase.filter((service) => service.starService).map(
            (service, index) => (
              <div
                key={index}
                className={`flex bg-blue-500  p-2 flex-col w-full h-full justify-center items-center gap-4`}
              >
                <div className={`icon`}>
                  <img src={service.logo} />
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            )
          )}
          </div> */}

          
        {/* </div> */}
      </div>
    </section>
  );
};

export default Service;
