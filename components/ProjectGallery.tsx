"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ProjectGallery({ images }: any ) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0.1 start", "end end"]
  })

  const scale = [
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
    useTransform(scrollYProgress, [0, 1], [1, 7]),
    useTransform(scrollYProgress, [0, 1], [1, 8]),
    useTransform(scrollYProgress, [0, 1], [1, 9]),
  ]

  return (
    <section ref={container} className="py-24 px-6 bg-charcoal border-t border-white/5 h-[300vh]">
      <div className="max-w-7xl mx-auto sticky top-0 h-screen  overflow-hidden">

        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Project Gallery
        </h2>

        {/* <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16">
          A visual walkthrough of the product, user flows, and core interfaces.
        </p> */}


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img : any, index : number) => (
            <motion.div style={{scale : scale[index]}} key={index} id={`element`} className="w-full h-full absolute top-35 flex items-center justify-center">
              <div

                key={index}
                className="project-details-image-container group relative overflow-hidden cursor-pointer w-96 h-96 "
                // style={{ scale: scale[index] }}
              >
                <img
                  src={img}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-auto object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
