"use client"
import { useMemo, useState } from "react";
import projectData from "../../data/projectData";
import ProjectCard from "@/components/projectCard";

const FILTERS = [
    { label: "All Projects", value: "all" },
    { label: "Websites", value: "websites" },
    { label: "eCommerce", value: "ecommerce" },
    { label: "Ed-tech", value: "edtech" },
    { label: "SaaS / Web Apps", value: "saas" },
    { label: "AI Solutions", value: "ai" },
    { label: "UI/UX Design", value: "uiux" },
];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("all");

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
                <div className="max-w-7xl  mx-auto flex overflow-x-auto gap-4 no-scrollbar">
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
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold dark:text-white">
                            {activeFilter === "all"
                                ? "All Projects"
                                : FILTERS.find((f) => f.value === activeFilter)?.label}
                        </h2>


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