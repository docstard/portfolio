import Button from "@/components/button"

export default function HomePage() {
  return (
    <main className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-x-hidden">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="glow-orb top-20 -left-20"></div>
        <div className="glow-orb bottom-0 -right-20 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase">
              Now accepting Q1 projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight max-w-5xl mx-auto leading-[1.1] gradient-text">
            Building Modern Websites, Web Apps & AI Solutions That Scale
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Premium digital product studio and AI agency delivering
            high-performance scalable solutions for ambitious startups and
            enterprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button variant={"primary"} size={"md"} link="/contact">
              Start Your Project
            </Button>


            <Button variant={"glass"} size={"md"} link={"/portfolio"} >
              View Work
            </Button>

          </div>

          {/* Hero Feature Cards */}
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-card p-6 rounded-xl text-left flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">
                  bolt
                </span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">High Performance</h3>
                <p className="text-sm text-slate-400">
                  Optimized core web vitals for maximum conversion.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl text-left flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">
                  auto_awesome
                </span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">AI Integrated</h3>
                <p className="text-sm text-slate-400">
                  Leverage LLMs and automation to outpace competitors.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl text-left flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary">
                  layers
                </span>
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">
                  Scalable Architecture
                </h3>
                <p className="text-sm text-slate-400">
                  Robust systems built with modern cloud stacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white/5" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              What we do
            </h2>
            <h3 className="text-4xl font-bold text-white">
              Full-Stack Digital Solutions
            </h3>
            <p className="text-slate-400 mt-4 max-w-xl">
              We combine cutting-edge design with powerful AI integrations to
              transform your business operations and customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl glass-card border-transparent hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">
                draw
              </span>
              <h4 className="text-xl font-bold mb-3">Web Design</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sleek, conversion-optimized interfaces that capture attention
                and drive user engagement.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-card border-transparent hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">
                code_blocks
              </span>
              <h4 className="text-xl font-bold mb-3">Custom Web Apps</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Complex SaaS platforms and internal tools built with React,
                Next.js and robust backends.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-card border-transparent hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">
                smart_toy
              </span>
              <h4 className="text-xl font-bold mb-3">AI Automation</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Smart workflows and autonomous agents to save your team hundreds
                of operational hours.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-card border-transparent hover:border-primary/40 transition-all group">
              <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:scale-110 transition-transform block">
                description
              </span>
              <h4 className="text-xl font-bold mb-3">Document AI</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Automated data extraction and intelligent analysis of complex
                legal and medical documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-24 relative overflow-hidden" id="ai-solutions">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                Enterprise AI
              </h2>

              <h3 className="text-4xl font-bold text-white mb-6">
                Transforming complexity into clarity with AI
              </h3>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded">
                    check
                  </span>
                  <div>
                    <span className="font-bold block">Intelligent Chatbots</span>
                    <span className="text-slate-400 text-sm">
                      Custom RAG-based assistants trained on your internal
                      knowledge base.
                    </span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded">
                    check
                  </span>
                  <div>
                    <span className="font-bold block">
                      Predictive Analytics
                    </span>
                    <span className="text-slate-400 text-sm">
                      Turn raw data into actionable insights and future
                      forecasts.
                    </span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded">
                    check
                  </span>
                  <div>
                    <span className="font-bold block">Content Generation</span>
                    <span className="text-slate-400 text-sm">
                      Scaling creative output with fine-tuned LLM models.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square glass-card rounded-3xl overflow-hidden p-8 border border-primary/20">
                <div className="h-full w-full bg-linear-to-br from-primary/30 to-background-dark rounded-xl flex items-center justify-center relative overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-60"
                    alt="AI Visual"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvfMfkz31fvLeYDjjPGwGX3cFBxBV8KTnCzccmdEsaz2lWUATya5uotMOVYUFqY8Sip3vLTQrylMWcWBaz3jnydMm7-QUjL3rX4dcfsYwxB7oVEqyzrDpZRt2NkSlk-gNv3hSONrW4Ek8HRWqnzoY5YpDNOvJ0hiKmypwdIy34dfBJatdRF5vhdFpGK1ggsma9PUrIVrkX13D-tvDV9hrGm9FSWe9tJUf6BcXVxAicrIGFKUt5UvmJqkzu6u7ix20Y1whTHNl3VbSf"
                  />

                  <div className="absolute inset-0 bg-background-dark/40 flex flex-col justify-center px-12">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 mb-4 animate-pulse">
                      <div className="h-2 w-24 bg-primary rounded mb-2"></div>
                      <div className="h-2 w-32 bg-white/20 rounded"></div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 self-end">
                      <div className="h-2 w-20 bg-primary rounded mb-2"></div>
                      <div className="h-2 w-16 bg-white/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                Work
              </h2>
              <h3 className="text-4xl font-bold text-white">
                Selected Projects
              </h3>
            </div>

            <a
              className="text-slate-400 hover:text-white flex items-center gap-2 group"
              href="#"
            >
              View all projects{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-800">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Go-Solo Platform"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjDs6j6wE34yTyUyhchV-wYeYTixLPcq1W8pGUrdsr9K2IR5dZNhDiMdzfaVVx6iaUgXSNNFM1tEHo90p8rYWP4doGKeIwJJh-AkZGn9hbArYxAvVgoILQTnJgsi74LQCJ8wucq_DIyjhiGfz7lOwOmeGP881SoxGdjxQdmMZWXz089NXnA-ujlxS8u9coSVXl2FBQ3w3uNaHZY1rA52_H3gkXlAVRLZ8llu1Ksd7UOiEn8Ikjff-xRyGErogi_0W6s980IrGlc-Mb"
                />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 glass-card rounded-full text-xs font-bold">
                    Fintech
                  </span>
                  <span className="px-3 py-1 glass-card rounded-full text-xs font-bold">
                    AI Integration
                  </span>
                </div>
              </div>

              <h4 className="text-2xl font-bold mb-2">Go-Solo Platform</h4>
              <p className="text-slate-400">
                All-in-one financial dashboard for solopreneurs with automated
                expense tagging.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-800">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Insight Flow"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_FXd0ulUN2DlDUmWAqTcymGz9F5UHd11l8ZUS1LXW6h_R5dLL5Oc1G158o2ExDMgxCyAqqY8Bmq243rvuBk01P7yo-PUayPTyGzYaMoY74AV-LARNqJcowgZwLmk6PPeCzgIw65w_lnFhk1AmIvEyRFidE9IXFpgYya6p2esA-VdDgovGGqmhllsfYS5eALiEnPDJoCO83Y8bIDw2Ns3cAJ6-ngLttXPGcrAPVVH7iDSLOtVZy-Au41Oyjp2dlK6b-CbY26s-7r4D"
                />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 glass-card rounded-full text-xs font-bold">
                    SaaS
                  </span>
                  <span className="px-3 py-1 glass-card rounded-full text-xs font-bold">
                    Data Viz
                  </span>
                </div>
              </div>

              <h4 className="text-2xl font-bold mb-2">Insight Flow</h4>
              <p className="text-slate-400">
                Predictive analytics dashboard helping enterprise retailers
                forecast seasonal inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white/5 relative" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              Our Method
            </h2>
            <h3 className="text-4xl font-bold text-white">
              How we bring ideas to life
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent z-0"></div>

            {[
              {
                num: "01",
                title: "Discovery",
                desc: "Deep diving into your business goals and user needs.",
              },
              {
                num: "02",
                title: "Strategy",
                desc: "Defining the tech stack and product roadmap.",
              },
              {
                num: "03",
                title: "Design",
                desc: "Crafting intuitive and high-converting UI/UX.",
              },
              {
                num: "04",
                title: "Development",
                desc: "Agile sprints using modern, scalable frameworks.",
              },
              {
                num: "05",
                title: "Launch",
                desc: "Quality assurance and seamless deployment.",
              },
            ].map((step) => (
              <div key={step.num} className="relative z-10 text-center">
                <div className="size-20 bg-background-dark border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 glass-card">
                  <span className="text-2xl font-black text-primary">
                    {step.num}
                  </span>
                </div>

                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 font-medium mb-12 uppercase tracking-widest text-xs">
            The Tech Behind Our Success
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {[
              "Next.js",
              "React",
              "OpenAI",
              "Node.js",
              "PostgreSQL",
              "Stripe",
              "Tailwind",
            ].map((tech) => (
              <span key={tech} className="text-2xl font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: `"Atticflow didn't just build our app; they helped us redefine our business model through AI. Their speed is unmatched."`,
                name: "Marcus Chen",
                role: "CEO, Go-Solo",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiqL6BgAJGqPHZqcUC2IXxe4jgOdEtgDy74G30SRYiqIXM4-L1dntpBevBYyDWh4LUoEDjkNmHzd9ij649IZ2Sy1uAKRHEcLAEXfnEzF5QdLm1ZfkAJ_0-oqrHjrD5Ow1oTHZOLyNXwIT_YVr1gBaJXeW5BYDnZBVXhbRKZHDzI9w8Z0rm2pZmNNHku5lM6i_OyeFmtL07Udyx5DeD46YRSqbND6cXSbQB4PtFqpmHIeZT_VbHsSpIO-hxPQ9Pj8ie7kutsavSJZUM",
              },
              {
                text: `"The UI/UX design quality is equivalent to top-tier Silicon Valley agencies. Our conversion rate increased by 40%."`,
                name: "Sarah Jenkins",
                role: "Founder, Insight Flow",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKQyg3u5adAWYcNNnj389Y_qbzgXW18LhkDh3xPy0DoH6BsCtjTOYVRFbFI8opZPWpuwNuPSoxSfm0QzWioJPm3TO5MoCP84_ilt8WYguo1oK9NE8PhlZ6QGOj5ZnovioU5lzAuP54So9KvS-Ghxp3sBkfSxKAkR9s7ZlZSLeMMxo_eJ3MwDKb9-qUHa8UQAlu4U_ZQrhx16VmsrGqPvDAG78talCy1SB3Vt1W555uZgG6HCQIt_BKa69Zd1i4CAldAuCb1igh72G0",
              },
              {
                text: `"Their AI Document extraction tool saved us over 20 hours of manual work per week. Highly recommended."`,
                name: "David Miller",
                role: "COO, LegalPoint",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEMDLwPPF7EEDzsKAbnQG7Pxj9vsIFZgPN5xbooEkEuQMdi0XMWNmHORxetxW3p0owEQdRHuHWmkRQQJ_bupACsmiGyomLKfaD9vrRoNPmp30B7P_5gZdZ7uWBlSe5vZI6k0EeysFkxHFF1G80GVkfUdxpQCAPFAWopgfsRG-12FwKPs60L8-CbQfk6jwhRFWEYj8BJ2KlUIM5DHyEAOzd3xs5ahm87PnsFVMZyyWjcje6JFhiUH5AIzX4gL7MdHW6w-GYe_iH1wNL",
              },
            ].map((item) => (
              <div key={item.name} className="p-8 rounded-2xl glass-card">
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined fill-current"
                    >
                      star
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 italic mb-8">{item.text}</p>

                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-slate-700 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt={item.name}
                      src={item.img}
                    />
                  </div>

                  <div>
                    <span className="font-bold block">{item.name}</span>
                    <span className="text-xs text-slate-400">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-primary rounded-[2.5rem] p-12 md:p-24 overflow-hidden text-center">
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
                Ready to build the future?
              </h2>

              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
                Join the ranks of successful startups leveraging our studio's
                expertise to scale their digital presence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant={"secondary"} size={"lg"} link={"/contact"} >
                  Book Your Free Audit
                </Button>

                <Button variant={"glass"} size={"lg"} link={"/portfolio"} >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}