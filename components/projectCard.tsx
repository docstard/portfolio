"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';


interface ProjectCardProps {
    project: any;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`portfolio/${project.id}`)} key={project.id} className="group relative flex flex-col">
            <div className="relative overflow-hidden rounded-xl aspect-16/10 bg-slate-200 dark:bg-slate-800">
                <img
                    
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.mainImage}
                />

                <div className="absolute inset-0 bg-linear-to-t from-charcoal to-transparent opacity-60"></div>

                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {project.categories.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md rounded border border-white/20 text-white"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                </p>

                <a
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary"
                    href={project.github}
                >
                    View Project{" "}
                    <span className="material-icons text-sm">
                        arrow_forward
                    </span>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard