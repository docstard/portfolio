import React from 'react'

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
    return (
        <section className={`py-24 ${variant === "light" ? "bg-white/5" : ""} relative`} id="process">
            <div className=" mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-xl mb-4">
                        {mainHeading || "Our Method"}
                    </h2>
                    <h3 className="text-4xl font-bold text-white">
                        {subHeading || "How we bring ideas to life"}
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent z-0"></div>

                    {processStepsData.map((step) => (
                        variant === "light" ? (
                        <div key={step.num} className="relative z-10 text-center">
                            <div className="size-24 bg-background-dark border-2 border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 glass-card">
                                <span className="text-2xl font-black text-primary">
                                    {step.num}
                                </span>
                            </div>
                            <h4 className="font-bold mb-2">{step.title}</h4>
                            <p className="text-sm text-slate-400">{step.desc}</p>
                        </div>
                        ) : (
                            <div key={step.num} className="relative z-10 text-center">
                            <div
                                className={`size-24 rounded-full bg-background-dark border-4 mx-auto flex items-center justify-center mb-6 transition-colors
                                     `}
                            >
                                <span className="text-2xl font-black">{step.num}</span>
                            </div>

                            <h4 className="font-bold mb-2">{step.title}</h4>
                            <p className="text-slate-400 text-xs">{step.desc}</p>
                        </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessSteps