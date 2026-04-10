import React from 'react'

const DefaultTechStack = [
    "Next.js",
    "Artificial Intelligence",
    "OpenAI",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Tailwind",
]

interface TechStackProps {
    heading?: string;
    techstacks?: string[];
}

const TechStack = ({ heading = "Our Tech Stack", techstacks = DefaultTechStack }: TechStackProps) => {
    return (
        <section className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-slate-500 font-medium mb-12 uppercase tracking-widest text-xs">
                    {heading}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    {techstacks?.map((tech) => (
                        <span key={tech} className="text-2xl font-bold">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack