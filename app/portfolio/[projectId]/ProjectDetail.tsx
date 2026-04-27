"use client";

import ProjectGallery from "@/components/ProjectGallery"
import projectData from "../../../data/projectData";
import { usePathname } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }: any) {
    const project = projectData.find((item) => item.id === params.id);

    return {
        title: project?.title,
        description: project?.description,
    };
}
const ProjectDetail = () => {
    const pathname = usePathname();
    const projectId = pathname.split("/").pop();
    const project = projectData?.find((p) => p?.id === projectId);

    const galleryImages = [
        
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    ];
    return (
        <div className="dark bg-background-dark text-slate-200 font-display transition-colors duration-300 selection:bg-primary/30">

            {/* HERO */}
            <section className="relative pt-44 pb-20 md:px-6">
                <div className="blob hidden -top-20 -left-20" />
                <div className="blob hidden top-1/4 -right-40 opacity-50" />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-end">
                    <div>
                        <nav className="flex items-center gap-2 mb-8 text-sm text-slate-500">
                            <a href="/portfolio" className="hover:text-white">Projects</a>
                            <span className="material-icons text-xs">chevron_right</span>
                            <span className="text-primary">{project?.title}</span>
                        </nav>

                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight text-white mb-8">
                            {project?.title} <br />
                            {/* <span className="gradient-text">{project?.subtitle}</span> */}
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 mb-10">
                            {project?.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {project?.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-slate-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-linear-to-r from-accent-cyan/20 to-accent-purple/20 blur-2xl rounded-4xl opacity-50" />
                        <div className="relative rounded-2xl overflow-hidden glass-card aspect-4/3">
                            <Image
                                src={project?.mainImage || ""}
                                alt={project?.id || "Project image"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7">
                        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-6">
                            Overview
                        </h2>
                        <h3 className="text-3xl font-bold text-white mb-6">
                            {project?.overview.Heading}
                        </h3>
                        <div className="space-y-6 text-slate-400 text-lg">
                            {project?.overview.text.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}

                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="glass-card rounded-2xl p-10 h-full">
                            <h4 className="text-xl font-bold text-white mb-10">Core Results</h4>

                            {[
                                ["40%", "Revenue Growth"],
                                ["2.5s", "Response Time"],
                                ["12k", "Active Users"],
                            ].map(([value, label]) => (
                                <div key={label} className="flex items-center gap-6 mb-8">
                                    <span className="text-5xl font-extrabold gradient-text">
                                        {value}
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-white">
                                            {label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CHALLENGE & SOLUTION */}
            <section className="py-24 px-6 bg-charcoal">
                <div className="max-w-7xl mx-auto space-y-32">

                    {/* Challenge */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="glass-card rounded-2xl overflow-hidden aspect-video">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiAEhFE5XgG3GOjp23Yg2wcKVPJchkAUdZMuppu59v9QLcQWZgr5qchhvHOyE0Pj3Agjj8LJygCi6RNbgLlXwYpWLdAMIOsagT5SPjcF0SFit39D7kbkYpqe5X8jHTE03MoZZXHZbzSUoxLHzWCeRsRUsLblJ58rU1rgQRQCDF6sXft6sGrtrQJd71whRYFguQnnabMZocYOPrYuifybzmiQii4uFeU06P_GTfyi3awVwWudBQ2Vv9IeLTovsGBqTLXLwcsnxEdt_H"
                                className="w-full h-full object-cover opacity-70"
                                alt="Challenge"
                            />
                        </div>

                        <div>
                            <div className="flex align-middle gap-3">

                                <span className="material-symbols-outlined align-middle self-center text-4xl text-red-400 mb-6">
                                    error_outline
                                </span>
                                <h2 className="text-4xl font-extrabold text-white mb-6">
                                    The Challenge.
                                </h2>
                            </div>
                            <p className="text-lg text-slate-400">
                                {project?.challenges}
                            </p>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex gap-3">

                                <span className=" self-center material-symbols-outlined text-4xl text-accent-cyan mb-6">
                                    auto_awesome
                                </span>
                                <h2 className="text-4xl font-extrabold text-white mb-6">
                                    The Solution.
                                </h2>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="material-icons text-primary">check_circle</span>
                                    {project?.solution}
                                </li>

                            </ul>
                        </div>

                        <div className="glass-card rounded-2xl p-8 bg-primary/5">
                            <pre className="text-xs text-accent-cyan font-mono overflow-x-auto">
                                {`{
                                    "agent": ${project?.title} Agent,
                                    "task": "Handle customer support tickets with AI",
                                    "status": ${project?.status},
                                    "confidence_score": 0.98
}`
                                }
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Powerful Features.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {project?.features.map((feature, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl">
                            <h4 className="font-bold text-white mb-3">{feature.title}</h4>
                            <p className="text-sm text-slate-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <ProjectGallery images={galleryImages} />

            {/* CTA */}
            <section className="py-24 px-6 bg-charcoal text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
                    Ready to build your own <span className="gradient-text">AI solution?</span>
                </h2>
                <div className="flex justify-center gap-4">
                    <button className="bg-primary px-10 py-4 rounded-full text-white font-bold">
                        Start a Project
                    </button>
                    <button className="glass-card px-10 py-4 rounded-full font-bold">
                        View Our Process
                    </button>
                </div>
            </section>



        </div>
    )
}

export default ProjectDetail