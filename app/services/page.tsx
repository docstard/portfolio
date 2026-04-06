const servicesData = [
    {
        id: "website-dev",
        card_logo: "language",
        title: "Website Development",
        description: "Custom high-speed websites optimized for conversion and brand impact.",
        features: [
            "Responsive Architecture",
            "SEO Optimization",
            "Core Web Vitals Ready",
        ],
    },
    {
        id: "saas-products",
        card_logo: "dashboard_customize",
        title: "SaaS Products",
        description: "Custom software solutions tailored to your business needs.",
        features: [
            "Multi-tenant Systems",
            "Subscription Engine",
            "API Integration",
        ],
    },
    {
        id: "ecommerce",
        card_logo: "shopping_bag",
        title: "Premium eCommerce",
        description: "Immersive online shopping experiences with frictionless checkout flows.",
        features: [
            "Custom Checkout",
            "Inventory Automation",
            "Global Payments",
        ],
    },

    {
        id: "ui-ux-design",
        card_logo: "draw",
        title: "UI/UX Design",
        description: "Modern user experiences built on deep research and psychological patterns.",
        features: [
            "User Journey Mapping",
            "High-Fidelity Prototyping",
            "Design Systems",
        ],
    },
    {
        id: "ai-solutions",
        card_logo: "smart_toy",
        title: "AI Solutions",
        description: "Integrating Large Language Models and custom AI tools into your workflow.",
        features: [
            "Custom LLM Fine-tuning",
            "Vector Databases",
            "RAG Architectures",
        ],
    },
    {
        id: "workflow-automation",
        card_logo: "settings_suggest",
        title: "Workflow Automation",
        description: "Reducing manual tasks through intelligent software and API bridges.",
        features: [
            "RPA Implementations",
            "Low-code Integration",
            "Data Pipelines",
        ],
    },
    {
        id: "support-maintenance",
        card_logo: "shield",
        title: "Long-term Support & Maintenance",
        description: "Ongoing support and maintenance to keep your systems running smoothly.",
        features: [
            "24/7 Monitoring",
            "Security Patches",
            "Scaling Ops",
        ],
    },
];


export default function ServicesPage() {
    return (
        <main className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 overflow-x-hidden">
            {/* Top Navigation */}
            {/* <header className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-white text-xl">
                                layers
                            </span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">Atticflow</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        <a
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            href="#"
                        >
                            Services
                        </a>
                        <a
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            href="#"
                        >
                            AI Solutions
                        </a>
                        <a
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            href="#"
                        >
                            Process
                        </a>
                        <a
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                            href="#"
                        >
                            FAQ
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-xl transition-all">
                            Get Started
                        </button>
                    </div>
                </div>
            </header> */}

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
                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl flex items-center gap-2 hover:scale-[1.02] transition-transform">
                            Book a Consultation{" "}
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </button>

                        <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                            View Our Work
                        </button>
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
                    {servicesData.map((service) => (
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
                                        </span>{" "}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}


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
                                <div className="w-8 h-8 rounded bg-white/5 border border-white/10">
                                    <span className="material-symbols-outlined items-center justify-center align-middle self-center">
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
                <div className="max-w-7xl mx-auto rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden text-center bg-primary">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10">
                        Ready to build the future?
                    </h2>

                    <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10">
                        Join 50+ companies already scaling with our premium digital
                        solutions and AI workflows.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 relative z-10">
                        <button className="px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:bg-slate-100 transition-colors shadow-xl">
                            Book a Free Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 border-t border-white/5 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-xl">
                                    layers
                                </span>
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                Atticflow
                            </span>
                        </div>

                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Premium digital product studio and AI agency architecting
                            high-performance solutions.
                        </p>

                        <div className="flex gap-4">
                            <a
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                                href="#"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </a>

                            <a
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                                href="#"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6">Services</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li>
                                <a className="hover:text-primary" href="#">
                                    Website Development
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary" href="#">
                                    SaaS Products
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary" href="#">
                                    AI Solutions
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary" href="#">
                                    UI/UX Design
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6">Company</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li>
                                <a className="hover:text-primary" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary" href="#">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary" href="#">
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold mb-6">Legal</h5>
                        <ul className="space-y-4 text-slate-500 text-sm">
                            <li>
                                <a className="hover:text-primary" href="#">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary" href="#">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary" href="#">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
                    © 2024 Atticflow Studio. All rights reserved.
                </div>
            </footer>
        </main>
    );
}