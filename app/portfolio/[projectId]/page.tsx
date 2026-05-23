"use client";

import ProjectGallery from "@/components/ProjectGallery"
import projectData from "../../../data/projectData";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ReactLenis } from "lenis/react"; // Updated import
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register Plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectDetailPage() {
    const pathname = usePathname();
    const projectId = pathname.split("/").pop();
    const project = projectData.find((p) => p.id === projectId);

    const container = useRef(null);
    const lenisRef = useRef(null);

    useGSAP(() => {
        // Create a MatchMedia instance
        let mm = gsap.matchMedia();

        // Only run these animations on screens 960px and wider
        mm.add("(min-width: 960px)", () => {

            // 1. Vertical Animation (Parallax Image)
            const col_left = document.querySelector(".col_left");
            gsap.fromTo(col_left,
                { y: 0 },
                {
                    y: '50vh', // Reduced for better visual flow within the sticky container
                    ease: 'none',
                    scrollTrigger: {
                        trigger: lenisRef.current, // Use the Lenis container as the trigger
                        start: 'top top',
                        end: 'bottom center',
                        scrub: true
                    }
                }
            );

            // 2. Horizontal Animation
            // const section_2 = document.getElementById("horizontal");
            // const box_items = gsap.utils.toArray(".horizontal__item");

            // if (box_items.length > 0) {
            //     gsap.to(box_items, {
            //         xPercent: -100 * (box_items.length - 1),
            //         ease: "sine.out",
            //         scrollTrigger: {
            //             trigger: section_2,
            //             pin: true,
            //             scrub: 3,
            //             snap: 1 / (box_items.length - 1),
            //             end: () => `+=${section_2?.offsetWidth}`,
            //         }
            //     });
            // }

            // Cleanup function for this specific media query
            return () => {
                gsap.killTweensOf(".col_left");
                ScrollTrigger.getAll().forEach(t => t.kill());
            };
        });

    }, { scope: container });

    const galleryImages = [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    ];

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
            <div ref={container} className="bg-background-dark px-4 md:px-8 text-slate-200 font-display transition-colors duration-300 selection:bg-primary/30">

                {/* HERO */}
                <section className="relative pt-44 pb-20">
                    <div className="px-0 md:px-8">
                        <nav className="hidden md:flex items-center gap-2 mb-8 text-sm text-slate-500">
                            <a href="/portfolio" className="hover:text-white">Projects</a>
                            <span className="material-icons text-xs">chevron_right</span>
                            <span className="text-primary">{project?.title}</span>
                        </nav>

                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight text-white mb-8">
                            {project?.title}
                        </h1>
                    </div>
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-xl md:text-2xl text-slate-400 mb-10">
                                {project?.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project?.tags.map((tag) => (
                                    <span key={tag} className="px-4 py-2 text-xs font-bold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="relative rounded-2xl overflow-hidden glass-card">
                                {project?.mainImage && (
                                    <img
                                        src={project?.mainImage && project.mainImage}
                                        alt={project?.title || "Project Image"}
                                        className="object-cover"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* OVERVIEW */}
                <section className="py-24 border-t border-white/5">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-7">
                            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary mb-6">Overview</h2>
                            <h3 className="text-3xl font-bold text-white mb-6">{project?.overview.Heading}</h3>
                            <div className="space-y-6 text-slate-400 text-lg">
                                {project?.overview.text.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="glass-card rounded-2xl p-10 h-full">
                                <h4 className="text-xl font-bold text-white mb-10">Core Results</h4>
                                {project?.stats?.map(([label, value]) => (
                                    <div key={label} className="flex items-center gap-6 mb-8">
                                        <span className="text-2xl font-extrabold gradient-text">{value}</span>
                                        <p className="text-sm font-bold uppercase tracking-widest text-white">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CHALLENGE & SOLUTION (VERTICAL SCROLL SECTION) */}
                <section ref={lenisRef} id="vertical" className="py-24 bg-charcoal h-full md:h-[120vh] w-full overflow-hidden">
                    <div className="vertical__container max-w-7xl mx-auto md:sticky md:top-96 md:h-screen flex items-center">
                        <div className="vertical__content flex-col md:flex-row flex justify-center items-start w-full gap-12">
                            {/* Animated Column */}
                            <div className="col col_left w-full md:w-1/2 glass-card rounded-2xl overflow-hidden aspect-video">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                                    className="w-full h-full object-cover opacity-70"
                                    alt="Challenge"
                                />
                            </div>

                            {/* Content Column */}
                            <div className="col col_right w-full md:w-2/5 space-y-8 md:space-y-80">
                                <div className="vertical__item">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-4xl text-red-400">error_outline</span>
                                        <h2 className="text-4xl font-extrabold text-white">The Challenge.</h2>
                                    </div>
                                    {project?.challenges.split('\n').map((challenge, index) => (
                                        <p key={index} className="text-lg text-slate-400">
                                            {challenge}
                                        </p>
                                    ))}
                                </div>

                                <div className="vertical__item">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-4xl text-accent-cyan">auto_awesome</span>
                                        <h2 className="text-4xl font-extrabold text-white">The Solution.</h2>
                                    </div>
                                    <ul className="mt-6">
                                        <li className="flex gap-3 text-slate-400">
                                            {project?.solution}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="py-24 px-6 pt-10">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-white mb-4">Powerful Features.</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project?.features.map((feature, index) => (
                            <div key={index} className="glass-card p-8 rounded-2xl">
                                <h4 className="font-bold text-white mb-3">{feature.title}</h4>
                                <p className="text-sm text-slate-500">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {project?.imageGallery == null ? null :
                    <>
                        <div className="hidden md:inline">
                            <ProjectGallery className="hidden" images={project?.imageGallery} />
                        </div>
                        <div className="md:hidden">
                            <section
                                className={`relative px-6 bg-charcoal border-t border-white/5 h-auto py-12"`}
                            >
                                <div
                                    className="relative h-auto max-w-7xl mx-auto flex flex-col items-center"
                                >
                                    <h2 className="text-4xl font-bold text-white text-center mb-12 mt-12">
                                        Project Gallery
                                    </h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                        {project?.imageGallery.map((img: any, index: number) => (
                                            <div
                                                key={index}
                                                className="relative w-full h-full">
                                                <div
                                                    className={`group relative overflow-hidden rounded-xl border border-white/10 w-full `}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={`Project image ${index + 1}`}
                                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </>
                }

                {/* CTA */}
                <section className="py-24 px-6 bg-charcoal text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
                        Ready to build your own <span className="gradient-text">AI solution?</span>
                    </h2>
                    <div className="flex justify-center gap-4">
                        <button className="bg-primary px-10 py-4 rounded-full text-white font-bold">Start a Project</button>
                        <button className="glass-card px-10 py-4 rounded-full font-bold">View Our Process</button>
                    </div>
                </section>
            </div>
        </ReactLenis>
    );
}