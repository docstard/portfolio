"use client"
import React, { useEffect, useRef } from 'react'
import ServiceCard from './serviceCard'
import { useScroll } from 'framer-motion'
import Lenis from 'lenis'

interface seriveCardProps {
    serviceData: Array<any>
}

const MainPageServiceSection = ({ serviceData }: seriveCardProps) => {
    const container = useRef(null)
    
    // We target the container. 
    // "start start" means the animation starts when the top of the container hits the top of the viewport.
    // "end end" means it finishes when the bottom of the container hits the bottom of the viewport.
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => lenis.destroy()
    }, [])

    return (
        /* FIX: We give the container a height (e.g., 400vh for 4 cards). 
           This creates the 'scroll room' needed to animate the scale 
           while the cards stay sticky top-0.
        */
        <div ref={container} className="relative h-[400vh]">
            
            {serviceData.slice(0, 4).map((service: any, index: number) => {
                // Determine target scale (e.g., 0.8, 0.85, 0.9, 1)
                const targetScale = 1 - ((4 - index) * 0.05);
                
                return (
                    <ServiceCard 
                        key={service.id} 
                        i={index}
                        // Range is critical: 
                        // Card 0 starts scaling at 0% scroll, Card 1 at 25%, etc.
                        range={[index * 0.25, 1]} 
                        progress={scrollYProgress} 
                        targetScale={targetScale} 
                        {...service}
                    />
                )
            })}
        </div>
    )
}

export default MainPageServiceSection