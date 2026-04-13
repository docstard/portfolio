"use client"

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const processStepsData = [
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
]

interface ProcessStepsProps {
    mainHeading?: string;
    subHeading?: string;
    variant?: "light" | "dark";
}

const ProcessSteps = ({ mainHeading, subHeading, variant }: ProcessStepsProps) => {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger, useGSAP);

 useGSAP(() => {
    const mm = gsap.matchMedia();

    // 1024px is the standard Tailwind 'lg' breakpoint
    mm.add("(min-width: 1024px)", () => {
      
      // Everything inside this function only runs on 'lg' screens
      gsap.fromTo(sectionRef.current, {
        translateX: 0
      }, {
        translateX: "-100%",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top", // Increased for better feel
          scrub: 1.5,
          pin: true,
          anticipatePin: 1, // Smooths out pinning on some browsers
        }
      });
    });

    // Clean up is handled automatically by useGSAP + matchMedia!
  }, { scope: triggerRef }); // Optional scope for better performance

    return (
        <section ref={triggerRef} className={`py-24 ${variant === "light" ? "bg-white/5" : ""} lg:h-screen overflow-hidden`} id="process">
            <div className="mx-auto px-6 flex flex-col gap-24">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-xl mb-4">
                        {mainHeading || "Our Method"}
                    </h2>
                    <h3 className="text-4xl font-bold text-white">
                        {subHeading || "How we bring ideas to life"}
                    </h3>
                </div>
                {/* <div className='scroll-section-outer'> */}
                <div>

                    {/* <div ref={sectionRef} className='scroll-section-inner w-[400vw] flex flex-row items-center h-full'>
                        <div className='scroll-section h-full w-screen flex justify-center items-center'>
                            <h1>Section 1</h1>
                        </div>
                        <div className='scroll-section h-full w-screen flex justify-center items-center'>
                            <h1>Section 2</h1>
                        </div>
                        <div className='scroll-section h-full w-screen flex justify-center items-center'>
                            <h1>Section 3</h1>
                        </div>
                        <div className='scroll-section h-full w-screen flex justify-center items-center'>
                            <h1>Section 4</h1>
                        </div>
                        <div className='scroll-section h-full w-screen flex justify-center items-center'>
                            <h1>Section 5</h1>
                        </div>
                    </div> */}
                    <div ref={sectionRef} className="scroll-section-inner lg:w-[500vw] grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                        <div className="hidden md:block absolute top-20 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent z-0"></div>

                        {processStepsData.map((step) => (
                            variant === "light" ? (
                                <div key={step.num} className="relative z-10 text-center items-center self-center">
                                    <div className="size-24 lg:size-40 bg-background-dark border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 glass-card">
                                        <span className="text-2xl lg:text-4xl font-black text-primary">
                                            {step.num}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-2xl lg:text-4xl mb-2">{step.title}</h4>
                                    <p className="text-lg text-slate-400">{step.desc}</p>
                                </div>
                            ) : (
                                <div key={step.num} className="relative z-10 text-center">
                                    <div
                                        className={`size-24 lg:size-40 rounded-full bg-background-dark border-4 mx-auto flex items-center justify-center mb-6 transition-colors
                                     `}
                                    >
                                        <span className="text-2xl lg:text-2xl font-black">{step.num}</span>
                                    </div>

                                    <h4 className="font-bold text-2xl lg:text-4xl mb-2">{step.title}</h4>
                                    <p className="text-slate-400 text-lg">{step.desc}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                {/* </div> */}


            </div>
        </section>
    )
}

export default ProcessSteps