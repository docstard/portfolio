import React from "react";

const ServiceDatabase = [
  {
    title: "Frontend Development & UI Engineering",
    description:
      "Modern, responsive websites and web apps using React.js, Next.js, and industry-best UI frameworks. We prioritize speed, design consistency, and a seamless user experience.",
    logo: "https://img.icons8.com/dusk/64/000000/flow-chart.png",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Complete end-to-end development—from beautiful frontends to powerful backend systems. We build scalable, secure, and performance-optimized web applications tailored to your goals.",
    logo: "https://img.icons8.com/dusk/64/000000/flow-chart.png",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "Generative AI & Agentic Workflows",
    description:
      "Custom GPT-powered agents, RAG pipelines, and AI tools that automate operations, enhance productivity, and transform internal workflows.",
    logo: "https://img.icons8.com/dusk/64/000000/flow-chart.png",
    link: "",
    tags: "",
    starService: true,
  },
  {
    title: "Data Science & Business Intelligence",
    description:
      "Make sense of your data. We develop analytics dashboards, predictive models, and custom insights to support data-backed decisions.",
    logo: "https://img.icons8.com/dusk/64/000000/flow-chart.png",
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
  {
    title: "",
    description: "",
    logo: "",
    link: "",
    tags: "",
    starService: false,
  },
];

const Service = () => {
  return (
    <section id="services">
      <div className="container service">
        <div className="service-top">
          <h1 className="section-title">
            Serv<span>i</span>ces
          </h1>
          <p>
            At AtticFlow, we turn ideas into impactful digital products —
            combining AI, data science, and full-stack development to help you
            launch, scale, and innovate with confidence. Whether you're building
            a modern website, automating workflows, or unlocking insights from
            data, our solutions are tailored to your goals and built for the
            future.
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

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 w-full h-96">
          {ServiceDatabase.filter((service) => service.starService).map(
            (service, index) => (
              <div
                key={index}
                className={`flex bg-blue-500 p-10 z-10 overflow-hidden basis-4/5 flex-col  w-full h-full justify-between relative items-start gap-4`}
              >
                {/* <div className={`icon`}>
                  <img src={service.logo} />
                </div> */}
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            )
          )}
        </div>

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

          {/* <div className="service-item">
                    <div className="icon">
                        <img src="https://img.icons8.com/dusk/64/000000/flow-chart.png" />
                    </div>
                    <h2>web Design</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sed harum
                        numquam fugit doloremque autem officia cumque nihil.
                    </p>
                </div>
                <div className="service-item">
                    <div className="icon">
                        <img src="https://img.icons8.com/dusk/64/000000/flow-chart.png" />
                    </div>
                    <h2>web Design</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sed harum
                        numquam fugit doloremque autem officia cumque nihil.
                    </p>
                </div>
                <div className="service-item">
                    <div className="icon">
                        <img src="https://img.icons8.com/dusk/64/000000/flow-chart.png" />
                    </div>
                    <h2>web Design</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sed harum
                        numquam fugit doloremque autem officia cumque nihil.
                    </p>
                </div>
                <div className="service-item">
                    <div className="icon">
                        <img src="https://img.icons8.com/dusk/64/000000/flow-chart.png" />
                    </div>
                    <h2>web Design</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero sed harum
                        numquam fugit doloremque autem officia cumque nihil.
                    </p>
                </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Service;
