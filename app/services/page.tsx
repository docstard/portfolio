import Button from "@/components/button";
import serviceData from "@/data/serviceData.json";

// const servicesData = [
//     {
//         id: "website-dev",
//         card_logo: "language",
//         title: "Website Development",
//         description: "Custom high-speed websites optimized for conversion and brand impact.",
//         features: [
//             "Responsive Architecture",
//             "SEO Optimization",
//             "Core Web Vitals Ready",
//         ],
//     },
//     {
//         id: "saas-products",
//         card_logo: "dashboard_customize",
//         title: "SaaS Products",
//         description: "Custom software solutions tailored to your business needs.",
//         features: [
//             "Multi-tenant Systems",
//             "Subscription Engine",
//             "API Integration",
//         ],
//     },
//     {
//         id: "ecommerce",
//         card_logo: "shopping_bag",
//         title: "Premium eCommerce",
//         description: "Immersive online shopping experiences with frictionless checkout flows.",
//         features: [
//             "Custom Checkout",
//             "Inventory Automation",
//             "Global Payments",
//         ],
//     },

//     {
//         id: "ui-ux-design",
//         card_logo: "draw",
//         title: "UI/UX Design",
//         description: "Modern user experiences built on deep research and psychological patterns.",
//         features: [
//             "User Journey Mapping",
//             "High-Fidelity Prototyping",
//             "Design Systems",
//         ],
//     },
//     {
//         id: "ai-solutions",
//         card_logo: "smart_toy",
//         title: "AI Solutions",
//         description: "Integrating Large Language Models and custom AI tools into your workflow.",
//         features: [
//             "Custom LLM Fine-tuning",
//             "Vector Databases",
//             "RAG Architectures",
//         ],
//     },
//     {
//         id: "workflow-automation",
//         card_logo: "settings_suggest",
//         title: "Workflow Automation",
//         description: "Reducing manual tasks through intelligent software and API bridges.",
//         features: [
//             "RPA Implementations",
//             "Low-code Integration",
//             "Data Pipelines",
//         ],
//     },
//     {
//         id: "support-maintenance",
//         card_logo: "shield",
//         title: "Long-term Support & Maintenance",
//         description: "Ongoing support and maintenance to keep your systems running smoothly.",
//         features: [
//             "24/7 Monitoring",
//             "Security Patches",
//             "Scaling Ops",
//         ],
//     },
// ];


export default function ServicesPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative pt-44 pb-24 hero-gradient">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        PREMIUM DIGITAL PRODUCT STUDIO
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-gradient">
                        Architecting the Future of <br />
                        Digital Experiences
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        We blend cutting-edge AI agency capabilities with premium digital
                        product engineering to deliver high-performance SaaS, eCommerce, and
                        automated solutions.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant={"ghost"} size={"lg"} link={"/contact"} >
                            Book a Consultation{" "}
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </Button>

                        <Button className=" shadow-none" variant="glass" size={"md"}>
                            View Our Work
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">Core Services</h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                    {/* Services */}
                    {serviceData.map((service) => (
                        <div className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all group">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <span className="material-symbols-outlined">{service.card_logo}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 text-sm text-slate-300">
                                {service.features.map((feature) => (
                                    <li className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm">
                                            check_circle
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* AI section */}

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Core AI Capabilities
                    </h2>
                    <div
                        className="h-1 w-20 bg-linear-to-r from-cyan-400 to-purple-500"
                    ></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* <!-- Chatbots --> */}
                    <div
                        className="md:col-span-8 glass-card p-8 rounded-xl gradient-border group overflow-hidden relative"
                    >
                        <div className="relative z-10">
                            <span
                                className="material-symbols-outlined text-4xl text-cyan-400 mb-6"
                                data-icon="smart_toy"
                            >smart_toy</span
                            >
                            <h3 className="text-2xl font-bold text-white mb-3">
                                AI Customer Support Chatbots
                            </h3>
                            <p className="text-slate-400 max-w-md">
                                Deploy sophisticated 24/7 automated support systems that resolve
                                queries instantly across all your channels.
                            </p>
                        </div>
                        <div
                            className="absolute top-0 right-0 w-64 h-full opacity-10 group-hover:opacity-20 transition-opacity"
                        >
                            <img
                                className="w-full h-full object-cover"
                                data-alt="Abstract neural network visualization"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr6xvTImvkZpcXOfsKLAHGcNvvNbhK0UtCdSp2TclIRJa9-kXH4kNNuwL7IgxcAxzz7RBqp1m0XPMP-Fd_c6YhcjhSTDe5J1g-lIXGShAwK-pNY7KRWpG5qx_hWg6w5QLo6nJ4PX0LP_CReIfyj1KB6zqy5vzUuMeThQuzd90BwRRexDyxJqjO7sjA_86xVzgFmWs2H3bhfFGn4aHwOn_S7H5KhryHntXTAe-wCWTG-MLP-6IhjpNC12Bl27boS9jWXjf60Iiygxn2"
                            />
                        </div>
                    </div>
                    {/* <!-- Custom GPT --> */}
                    <div className="md:col-span-4 glass-card p-8 rounded-xl gradient-border">
                        <span
                            className="material-symbols-outlined text-4xl text-purple-400 mb-6"
                            data-icon="psychology"
                        >psychology</span
                        >
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Custom GPT Assistants
                        </h3>
                        <p className="text-slate-400">
                            Trained on internal company data for secure, specialized
                            expertise.
                        </p>
                    </div>
                    {/* <!-- Document AI --> */}
                    <div className="md:col-span-4 glass-card p-8 rounded-xl gradient-border">
                        <span
                            className="material-symbols-outlined text-4xl text-cyan-400 mb-6"
                            data-icon="description"
                        >description</span
                        >
                        <h3 className="text-2xl font-bold text-white mb-3">
                            Document AI &amp; Extraction
                        </h3>
                        <p className="text-slate-400">
                            Automated data entry from complex PDFs, invoices, and contracts
                            with high accuracy.
                        </p>
                    </div>
                    {/* <!-- Business Analytics --> */}
                    <div
                        className="md:col-span-4 glass-card p-8 rounded-xl gradient-border bg-gradient-to-br from-slate-900 to-blue-900/20"
                    >
                        <span
                            className="material-symbols-outlined text-4xl text-blue-400 mb-6"
                            data-icon="analytics"
                            data-weight="fill"
                            // style={{ fontVariationSettings: "'FILL' 1" }}
                        >analytics</span
                        >
                        <h3 className="text-2xl font-bold text-white mb-3">
                            AI Business Analytics
                        </h3>
                        <p className="text-slate-400">
                            Unlock predictive insights and real-time data visualization for
                            smarter decisions.
                        </p>
                    </div>
                    {/* <!-- Content Generation --> */}
                    <div className="md:col-span-4 glass-card p-8 rounded-xl gradient-border">
                        <span
                            className="material-symbols-outlined text-4xl text-purple-400 mb-6"
                            data-icon="edit_note"
                        >edit_note</span
                        >
                        <h3 className="text-2xl font-bold text-white mb-3">
                            AI Content Generation
                        </h3>
                        <p className="text-slate-400">
                            Scalable automated marketing copy and product descriptions that
                            sound human.
                        </p>
                    </div>
                    {/* <!-- AI Search --> */}
                    <div
                        className="md:col-span-12 glass-card p-8 rounded-xl gradient-border flex flex-col md:flex-row gap-8 items-center"
                    >
                        <div className="flex-1">
                            <span
                                className="material-symbols-outlined text-4xl text-cyan-400 mb-6"
                                data-icon="search_insights"
                            >search_insights</span
                            >
                            <h3 className="text-2xl font-bold text-white mb-3">
                                AI Search Systems (RAG)
                            </h3>
                            <p className="text-slate-400 text-lg">
                                Retrieval-Augmented Generation systems that allow your team to
                                talk to your internal knowledge base and get sourced answers
                                instantly.
                            </p>
                        </div>
                        <div
                            className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden border border-white/10"
                        >
                            <img
                                className="w-full h-full object-cover"
                                data-alt="Digital interface showing semantic search results"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2VEmfam1VchK4msWWOOB16gbKsxhgi8jpB-PM3Uywty7VcKjnHo5e-YPQJKFLUqd0mCvwnDR9hSwJf1LFoPFDBTsddfUk75TboLk5ugUWRE5JPUKfo2wboyfFOhfEA96DCKhYlIsHnpwazc5K271IadElNY0nnMYftQDdtVcQvyrPoBwouy7i-u6kXA5gZEXr1KeNeTCBvlZdWmyzHx3lIgio54Ub9GlB_LTiQJu1xtHqnjoG8fAR_oTD-DWew_TyaMaBiDPZayhA"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Specific Use Cases */}
            <section className="py-24 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-4">
                            Specialized AI Use Cases
                        </h2>
                        <p className="text-slate-400">
                            Targeted AI solutions designed for immediate ROI and operational
                            efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-6 p-8 rounded-2xl bg-[#161327] border border-white/5 hover:border-primary/30 transition-all">
                            <div className="shrink-0 w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                <span className="material-symbols-outlined text-3xl">
                                    chat_bubble
                                </span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">
                                    Intelligent Support Bots
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    Trained on your internal docs to resolve 80% of customer
                                    inquiries instantly without human intervention.
                                </p>
                                <a
                                    className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                    href="#"
                                >
                                    Learn More{" "}
                                    <span className="material-symbols-outlined text-xs">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-6 p-8 rounded-2xl bg-[#161327] border border-white/5 hover:border-primary/30 transition-all">
                            <div className="shrink-0 w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                <span className="material-symbols-outlined text-3xl">
                                    description
                                </span>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">
                                    Document AI & Synthesis
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    Automatically extract insights from massive PDF libraries,
                                    contracts, and internal reports using custom RAG pipelines.
                                </p>
                                <a
                                    className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                    href="#"
                                >
                                    Learn More{" "}
                                    <span className="material-symbols-outlined text-xs">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-center text-slate-500 font-bold uppercase tracking-[0.2em] text-xs mb-12">
                        Our Technology Stack
                    </h3>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                        {[
                            "React",
                            "Next.js",
                            "Node.js",
                            "OpenAI",
                            "TypeScript",
                            "Tailwind",
                        ].map((tech) => (
                            <div key={tech} className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 items-center justify-center flex">
                                    <span className="material-symbols-outlined">
                                        code
                                    </span>
                                </div>
                                <span className="font-bold">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Our Process</h2>
                    <p className="text-slate-400">
                        From concept to deployment in 5 structured phases.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/5 z-0"></div>

                    {[
                        {
                            step: "01",
                            title: "Discovery",
                            desc: "Market research & business alignment.",
                            highlight: true,
                        },
                        {
                            step: "02",
                            title: "Strategy",
                            desc: "Roadmapping & technical architecture.",
                        },
                        {
                            step: "03",
                            title: "Design",
                            desc: "Interactive prototyping & UI systems.",
                        },
                        {
                            step: "04",
                            title: "Dev",
                            desc: "Agile sprints & QA testing cycles.",
                        },
                        {
                            step: "05",
                            title: "Launch",
                            desc: "Deployment & ongoing maintenance.",
                        },
                    ].map((item) => (
                        <div key={item.step} className="relative z-10 text-center">
                            <div
                                className={`w-24 h-24 rounded-full bg-background-dark border-4 mx-auto flex items-center justify-center mb-6 transition-colors ${item.highlight
                                    ? "border-primary shadow-[0_0_20px_rgba(75,43,238,0.3)]"
                                    : "border-white/5 hover:border-primary/50"
                                    }`}
                            >
                                <span className="text-2xl font-black">{item.step}</span>
                            </div>

                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-slate-400 text-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-black text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    <details className="group glass-card rounded-xl" open>
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                            <span className="font-bold">
                                How long does a typical project take?
                            </span>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                            Timeline varies by scope. A custom website usually takes 4-6
                            weeks, while a complex SaaS platform or AI integration can range
                            from 3-6 months.
                        </div>
                    </details>

                    <details className="group glass-card rounded-xl">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                            <span className="font-bold">
                                Can you integrate AI into existing software?
                            </span>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                            Absolutely. We specialize in retrofitting existing legacy systems
                            with modern AI capabilities like automated reporting, chatbots,
                            and predictive data processing.
                        </div>
                    </details>

                    <details className="group glass-card rounded-xl">
                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                            <span className="font-bold">What is your tech stack?</span>
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                            We primarily work with React, Next.js, and Node.js for
                            performance. For AI, we leverage OpenAI's API, LangChain, and
                            Pinecone for vector storage.
                        </div>
                    </details>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center bg-primary/20">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
                        Ready to build the future and Automate Your Business?
                    </h2>

                    <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
                        Join the forward-thinking companies leveraging Atticflow to stay ahead of the curve with our premium digital
                        solutions and AI workflows.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <Button size={"lg"} variant={"secondary"} link="/contact">
                            Book a Free Consultation
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}