"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";

const galleryItems = [
    {
        id: 1,
        src: "/portfolio/event-1.svg",
        alt: "NEON NOIR – New Year's Eve DJ Night",
        span: "col-span-1 row-span-1",
    },
    {
        id: 2,
        src: "/portfolio/event-2.svg",
        alt: "BASS ODYSSEY – Concert Night Energy",
        span: "col-span-1 row-span-2",
    },
    {
        id: 3,
        src: "/portfolio/event-3.svg",
        alt: "PURPLE HAZE – Rooftop Private Party",
        span: "col-span-1 row-span-1",
    },
    {
        id: 4,
        src: "/portfolio/event-4.svg",
        alt: "RISE FEST – College Festival Crowd",
        span: "col-span-1 row-span-1",
    },
    {
        id: 5,
        src: "/portfolio/event-5.svg",
        alt: "AFTERGLOW – Valentine's Night",
        span: "col-span-1 row-span-1",
    },
    {
        id: 6,
        src: "/portfolio/event-6.svg",
        alt: "VOLTAGE – Corporate Gala Setup",
        span: "col-span-1 row-span-2",
    },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <SectionWrapper id="gallery" className="bg-gradient-to-b from-transparent via-vybex-purple/[0.02] to-transparent">
            <motion.div variants={itemVariants} className="text-center mb-16">
                <span className="text-vybex-purple font-inter text-sm font-semibold tracking-widest uppercase mb-4 block">
                    Photo Gallery
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
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ scale: 1.02 }}
                        className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
                        onClick={() => setSelectedImage({ src: item.src, alt: item.alt })}
                    >
                        <div className="w-full h-full relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="font-inter text-sm text-white font-medium">{item.alt}</span>
                            </div>
                            {/* Zoom icon */}
                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ZoomIn size={14} className="text-white" />
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
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-auto rounded-2xl object-contain max-h-[85vh]"
                            />
                            <p className="text-center font-inter text-gray-400 text-sm mt-3">{selectedImage.alt}</p>
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

            {/* Neon divider */}
            <motion.div variants={itemVariants} className="neon-line mt-24 opacity-50" />
        </SectionWrapper>
    );
}
