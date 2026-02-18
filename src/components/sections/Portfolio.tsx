"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";

const portfolioItems = [
    {
        id: 1,
        type: "image" as const,
        src: "/portfolio/event-1.svg",
        alt: "DJ Night Event",
        span: "col-span-1 row-span-1",
        aspectClass: "aspect-square",
    },
    {
        id: 2,
        type: "image" as const,
        src: "/portfolio/event-2.svg",
        alt: "Private Party Setup",
        span: "col-span-1 row-span-2",
        aspectClass: "aspect-[9/16]",
    },
    {
        id: 3,
        type: "image" as const,
        src: "/portfolio/event-3.svg",
        alt: "College Festival",
        span: "col-span-1 row-span-1",
        aspectClass: "aspect-square",
    },
    {
        id: 4,
        type: "image" as const,
        src: "/portfolio/event-4.svg",
        alt: "Corporate Event",
        span: "col-span-1 row-span-1",
        aspectClass: "aspect-square",
    },
    {
        id: 5,
        type: "image" as const,
        src: "/portfolio/event-5.svg",
        alt: "Stage Setup",
        span: "col-span-1 row-span-1",
        aspectClass: "aspect-square",
    },
    {
        id: 6,
        type: "image" as const,
        src: "/portfolio/event-6.svg",
        alt: "Crowd Energy",
        span: "col-span-1 row-span-2",
        aspectClass: "aspect-[9/16]",
    },
];

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <SectionWrapper id="portfolio" className="bg-gradient-to-b from-transparent via-vybex-purple/[0.02] to-transparent">
            <motion.div variants={itemVariants} className="text-center mb-16">
                <span className="text-vybex-purple font-inter text-sm font-semibold tracking-widest uppercase mb-4 block">
                    Our Work
                </span>
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter-custom mb-4">
                    The proof is in the{" "}
                    <span className="gradient-text">vibe</span>
                </h2>
                <p className="font-inter text-gray-400 text-lg max-w-2xl mx-auto">
                    Moments we&apos;ve created. Energy we&apos;ve delivered.
                </p>
            </motion.div>

            {/* Masonry Grid */}
            <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]"
            >
                {portfolioItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
                        onClick={() => setSelectedImage(item.src)}
                    >
                        <div className={`w-full h-full relative`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="font-inter text-sm text-white font-medium">
                                    {item.alt}
                                </span>
                            </div>
                            {/* Purple tint on hover */}
                            <div className="absolute inset-0 bg-vybex-purple/0 group-hover:bg-vybex-purple/10 transition-colors duration-300" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="relative max-w-4xl max-h-[85vh] w-full"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={selectedImage}
                                alt="Event photo"
                                className="w-full h-auto rounded-2xl object-contain max-h-[85vh]"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-4 -right-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:bg-vybex-purple/20 transition-colors"
                                aria-label="Close lightbox"
                            >
                                <X size={20} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
}
