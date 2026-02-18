"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function GlassCard({
    children,
    className = "",
    hover = true,
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`glass rounded-2xl p-6 transition-all duration-300 ${hover ? "hover:shadow-glow hover:border-vybex-purple/30" : ""
                } ${className}`}
        >
            {children}
        </motion.div>
    );
}
