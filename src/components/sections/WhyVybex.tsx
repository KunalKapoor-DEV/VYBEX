"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Eye, Sparkles } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";

const reasons = [
    {
        icon: Zap,
        title: "Youth Energy",
        description:
            "Built by the youth, for the youth. We understand what gets the crowd going because we are the crowd.",
    },
    {
        icon: Shield,
        title: "Professional Execution",
        description:
            "Every event runs like clockwork. From logistics to cueing, we handle the pressure so you don't have to.",
    },
    {
        icon: Eye,
        title: "Transparent Process",
        description:
            "No hidden costs, no surprise charges. Clear communication from concept to execution—always.",
    },
    {
        icon: Sparkles,
        title: "Complete Vibe Management",
        description:
            "We don't just set up events. We engineer the entire atmosphere—sound, light, energy, and emotion.",
    },
];

export default function WhyVybex() {
    return (
        <SectionWrapper id="why-vybex">
            <motion.div variants={itemVariants} className="text-center mb-16">
                <span className="text-vybex-purple font-inter text-sm font-semibold tracking-widest uppercase mb-4 block">
                    Why Choose Us
                </span>
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter-custom mb-4">
                    Why{" "}
                    <span className="gradient-text">VYBEXX</span>?
                </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        variants={itemVariants}
                        className="text-center group"
                    >
                        {/* Icon with glow */}
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-vybex-purple/10 flex items-center justify-center transition-all duration-300 group-hover:shadow-glow group-hover:bg-vybex-purple/20"
                        >
                            <reason.icon
                                size={28}
                                className="text-vybex-purple"
                                strokeWidth={1.5}
                            />
                        </motion.div>

                        {/* Title */}
                        <h3 className="font-syne font-bold text-lg mb-3 text-white">
                            {reason.title}
                        </h3>

                        {/* Description */}
                        <p className="font-inter text-gray-400 text-sm leading-relaxed">
                            {reason.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Neon divider */}
            <motion.div variants={itemVariants} className="neon-line mt-24 opacity-50" />
        </SectionWrapper>
    );
}
