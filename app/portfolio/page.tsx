"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import projectData from "../../data/projectData.json";
import ProjectCard from "@/components/projectCard";

const FILTERS = [
    { label: "All Projects", value: "all" },
    { label: "Websites", value: "websites" },
    { label: "eCommerce", value: "ecommerce" },
    { label: "SaaS / Web Apps", value: "saas" },
    { label: "AI Solutions", value: "ai" },
    { label: "UI/UX Design", value: "uiux" },
];

const PROJECTS = [
    {
        id: "go-solo-ecommerce",
        title: "Go-Solo eCommerce",
        description:
            "A high-conversion retail experience for a boutique fashion brand with seamless checkout integration.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAuiDRHLB_Eqmfg4S5x79KbAH4K-46Qld7SRExEHuYyEsZUQQxdBm_-KMD5TOsbCY5vEJfcIglZDJDAQfMCuJ39D-YNCqh1IbTMBHXFUX66xrtHgVSOpJgyi076hxIrm4YNtgDQvcgTL9gC8bdZbjrDUk1JkuJGcr-bt-dkq4a6v-jnoRlZkkp3eDjTC9XU8ZvVy37HBz5P43KSzD__69c3Y8AFqwAX37q8IIgjpDGOpQDRKp1a4WTEnVbXfQkGQB1GIKCJjZES-oso",
        tags: ["Next.js", "Shopify Plus"],
        categories: ["ecommerce", "websites"],
        link: "#",
    },

    {
        id: "lumina-ai-chatbot",
        title: "Lumina AI Chatbot",
        description:
            "Intelligent customer support agent handling 95% of queries with natural language understanding.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBN5tC7yBeIGWvc-ndUWTctl7rqJk9pPYKL47AlKNlq_k4NQT7Oep3tswC_NCZO3xnqeIs_zAjpfJXsEDtM3KiyjHXQlHp4hio__RF0qSFlfLmWvDui3yP8lPRc-vabY89GNvTeVr0ZpeKt9wuRaoxLH7i-tbliy-3L_zgZ6iXyugEO5_axpBst0aN3wEyZhAVig_tUqepUXphUwaOMgbJx6yytDSSPY8ABCUCXyxHKgKLbVV54Opwp7ZiMAeYFaY5uu8Rda5JQbVyn",
        tags: ["OpenAI API", "React"],
        categories: ["ai", "saas"],
        link: "#",
    },

    {
        id: "judiciary-mock-test",
        title: "Judiciary Mock Test",
        description:
            "Comprehensive testing platform for law students with real-time performance analytics.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCM5T6mde8jIbCODcsezCRbOvjil8uZQrDaPJ-ixo-AIAULmspgr345pFuER4lAQ8g1mJW6xmt7IoKzBYkJr2rnvIu5K06DN6MWYY6hQPkYRIdhz4SVb0BECydBTajwbKOkQSJ-T7Fadhi-UFNzaCTQ9dXJpb-rMiBs7OdZ-nkTeWbtRUKRuEgtVfqCLKAsAdTSQ6Lo676WvvVckzsU-8Vlnw2fbvVcExBjv5IOruyKN-j7IRJeOck2yhLNuLtcPrWPPauwZF7kE4hf",
        tags: ["LMS", "SaaS"],
        categories: ["saas", "websites"],
        link: "#",
    },

    {
        id: "vantage-dashboard",
        title: "Vantage Dashboard",
        description:
            "Enterprise-grade dashboard for monitoring logistics and supply chain efficiency.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBiAEhFE5XgG3GOjp23Yg2wcKVPJchkAUdZMuppu59v9QLcQWZgr5qchhvHOyE0Pj3Agjj8LJygCi6RNbgLlXwYpWLdAMIOsagT5SPjcF0SFit39D7kbkYpqe5X8jHTE03MoZZXHZbzSUoxLHzWCeRsRUsLblJ58rU1rgQRQCDF6sXft6sGrtrQJd71whRYFguQnnabMZocYOPrYuifybzmiQii4uFeU06P_GTfyi3awVwWudBQ2Vv9IeLTovsGBqTLXLwcsnxEdt_H",
        tags: ["Tableau", "Big Data"],
        categories: ["saas", "uiux"],
        link: "#",
    },

    {
        id: "atticflow-agency-site",
        title: "Atticflow Agency Website",
        description:
            "A premium studio landing page built for conversion with sleek animations and bold typography.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDjDs6j6wE34yTyUyhchV-wYeYTixLPcq1W8pGUrdsr9K2IR5dZNhDiMdzfaVVx6iaUgXSNNFM1tEHo90p8rYWP4doGKeIwJJh-AkZGn9hbArYxAvVgoILQTnJgsi74LQCJ8wucq_DIyjhiGfz7lOwOmeGP881SoxGdjxQdmMZWXz089NXnA-ujlxS8u9coSVXl2FBQ3w3uNaHZY1rA52_H3gkXlAVRLZ8llu1Ksd7UOiEn8Ikjff-xRyGErogi_0W6s980IrGlc-Mb",
        tags: ["Next.js", "Tailwind"],
        categories: ["websites", "uiux"],
        link: "#",
    },

    {
        id: "uiux-design-system",
        title: "Luxury UI/UX Design System",
        description:
            "Modern glassmorphism design system with scalable UI components and consistent branding.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB_FXd0ulUN2DlDUmWAqTcymGz9F5UHd11l8ZUS1LXW6h_R5dLL5Oc1G158o2ExDMgxCyAqqY8Bmq243rvuBk01P7yo-PUayPTyGzYaMoY74AV-LARNqJcowgZwLmk6PPeCzgIw65w_lnFhk1AmIvEyRFidE9IXFpgYya6p2esA-VdDgovGGqmhllsfYS5eALiEnPDJoCO83Y8bIDw2Ns3cAJ6-ngLttXPGcrAPVVH7iDSLOtVZy-Au41Oyjp2dlK6b-CbY26s-7r4D",
        tags: ["Figma", "UI/UX"],
        categories: ["uiux"],
        link: "#",
    },
];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const router = useRouter();

    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") return projectData;
        return projectData.filter((project) =>
            project.categories.includes(activeFilter)
        );
    }, [activeFilter]);

    return (
        <main className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative pt-44 pb-32 px-6 overflow-hidden">
                <div className="blob -top-20 -left-20"></div>
                <div className="blob top-1/2 -right-20"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">
                            Portfolio
                        </span>

                        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-tight dark:text-white">
                            Our <span className="gradient-text">Work.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                            Crafting the future of digital experiences through artificial
                            intelligence, precision engineering, and award-winning design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-20 z-40 py-6 px-6 bg-background-light dark:bg-background-dark border-b border-primary/5">
                <div className="max-w-7xl mx-auto flex overflow-x-auto gap-4 no-scrollbar">
                    {FILTERS.map((filter) => {
                        const isActive = activeFilter === filter.value;

                        return (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all ${isActive
                                        ? "bg-primary text-white"
                                        : "glass-card hover:bg-primary/10"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Projects Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold dark:text-white">
                            {activeFilter === "all"
                                ? "All Projects"
                                : FILTERS.find((f) => f.value === activeFilter)?.label}
                        </h2>

                        {/* <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing{" "}
              <span className="font-bold text-primary">
                {filteredProjects.length}
              </span>{" "}
              projects
            </p> */}
                    </div>

                    {filteredProjects.length === 0 ? (
                        <div className="glass-card p-10 rounded-2xl text-center">
                            <h3 className="text-xl font-bold mb-2">No projects found</h3>
                            <p className="text-slate-500 dark:text-slate-400">
                                Try selecting another category.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}