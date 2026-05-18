"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";

export default function About() {
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <div>
                    <motion.div variants={itemVariants}>
                        <span className="text-vybex-purple font-inter text-sm font-semibold tracking-widest uppercase mb-4 block">
                            The Identity
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter-custom mb-6 leading-tight"
                    >
                        Built for the youth.
                        <br />
                        <span className="gradient-text">Driven by energy.</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="font-inter text-gray-400 text-lg leading-relaxed mb-6"
                    >
                        Creating premium nightlife, party &amp; concert experiences with unmatched vibes,
                        music and energy. 🎶✨
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="font-inter text-vybex-purple font-bold text-lg mb-8"
                    >
                        • VYBEXX ⚡ Live The Night
                    </motion.p>

                    <motion.blockquote
                        variants={itemVariants}
                        className="relative pl-6 border-l-2 border-vybex-purple"
                    >
                        <p
                            className="font-syne text-xl md:text-2xl font-bold text-white italic"
                            style={{
                                textShadow:
                                    "0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.3)",
                            }}
                        >
                            &ldquo;We don&apos;t organize events. We create moments.&rdquo;
                        </p>
                    </motion.blockquote>
                </div>

                {/* Right: Visual Element */}
                <motion.div variants={itemVariants} className="relative">
                    <div className="relative aspect-square max-w-md mx-auto">
                        {/* Animated rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-vybex-purple/20 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border border-vybex-purple/15 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 border border-vybex-purple/10 rounded-full"
                        />

                        {/* Center element */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="glass-strong rounded-2xl p-8 text-center">
                                <span className="font-syne text-6xl md:text-7xl font-extrabold gradient-text block mb-2">
                                    V
                                </span>
                                <span className="font-inter text-xs tracking-[0.3em] text-gray-400 uppercase">
                                    VYBEXX Events
                                </span>
                            </div>
                        </div>

                        {/* Glow */}
                        <div className="absolute inset-0 bg-vybex-purple/5 rounded-full blur-[80px]" />
                    </div>
                </motion.div>
            </div>

            {/* Neon divider line */}
            <motion.div variants={itemVariants} className="neon-line mt-24 opacity-50" />
        </SectionWrapper>
    );
}
