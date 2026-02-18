"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    stagger?: boolean;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export default function SectionWrapper({
    children,
    id,
    className = "",
    stagger = true,
}: SectionWrapperProps) {
    return (
        <motion.section
            id={id}
            variants={stagger ? containerVariants : undefined}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className={`relative py-24 md:py-32 px-6 ${className}`}
        >
            <div className="max-w-7xl mx-auto">{children}</div>
        </motion.section>
    );
}
