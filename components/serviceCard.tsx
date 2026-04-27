"use client"
import { useTransform, motion } from 'framer-motion';

interface FeatureCardInterface {
    card_logo: string;
    title: string;
    description: string;
    range: [number, number];
    targetScale: any;
    progress: any;
    i: any;
}

const ServiceCard = ({ i, range, targetScale, progress, card_logo, title, description }: FeatureCardInterface) => {
    
    // As the user scrolls through the 400vh container, this card will scale down
    const scaleCard = useTransform(progress, range, [1, targetScale]);

    return (
        /* This div stays stuck at the top of the viewport.
           Because it's h-screen, the next card will appear 100vh below it.
        */
        <div className="h-screen flex items-center justify-center sticky -top-10">
            <motion.div 
                style={{
                    scale: scaleCard, 
                    // Stagger the cards slightly so they look like a physical stack
                    top: `calc(5% + ${i * 25}px)`, 
                    backgroundColor: "#1e293b" 
                }} 
                className='card w-full max-w-2xl h-80 shadow-2xl border border-white/10 rounded-[40px] p-12 relative'
            >
                <div className="flex flex-col h-full">
                    <span className="material-symbols-outlined text-5xl text-primary mb-8 block">
                        {card_logo}
                    </span>
                    <h4 className="text-4xl font-bold mb-6 text-white">{title}</h4>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                        {description}
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default ServiceCard