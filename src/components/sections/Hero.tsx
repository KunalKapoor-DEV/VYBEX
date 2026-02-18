"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlowButton from "@/components/GlowButton";

const words = "KOLHAPUR'S MOST ENERGETIC EVENT EXPERIENCE".split(" ");

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <section
            ref={ref}
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/hero-poster.jpg"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70" />
                {/* Gradient fade to black at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-vybex-black to-transparent" />
            </div>

            {/* Ambient Glow Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vybex-purple/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-vybex-purple/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Content */}
            <motion.div
                style={{ opacity, scale, y }}
                className="relative z-10 text-center max-w-5xl mx-auto px-6"
            >
                {/* Split-text headline */}
                <h1 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter-custom leading-[0.95] mb-6">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 50, rotateX: -40 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3 + i * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                            className={`inline-block mr-3 md:mr-4 ${word === "ENERGETIC" ? "text-glow text-vybex-purple" : ""
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="font-inter text-lg md:text-xl text-gray-400 mb-10 tracking-wide"
                >
                    We plan. We execute. You celebrate.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <GlowButton variant="primary" href="tel:+919999999999">
                        Book Your Event
                    </GlowButton>
                    <GlowButton variant="secondary" href="mailto:vybex@email.com?subject=Custom%20Package%20Request">
                        Request Custom Package
                    </GlowButton>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2"
                    >
                        <motion.div className="w-1 h-2 rounded-full bg-vybex-purple" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
