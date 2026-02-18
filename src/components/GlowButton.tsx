"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary";
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    className?: string;
    disabled?: boolean;
}

export default function GlowButton({
    children,
    variant = "primary",
    href,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}: GlowButtonProps) {
    const baseStyles =
        "relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-inter font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden";

    const variants = {
        primary:
            "bg-vybex-purple text-white hover:shadow-glow-lg active:scale-95",
        secondary:
            "bg-transparent text-white border border-vybex-purple/50 hover:border-vybex-purple hover:shadow-glow active:scale-95",
    };

    const content = (
        <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
        >
            {/* Glow background effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-vybex-purple/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">{children}</span>
        </motion.span>
    );

    if (href) {
        return (
            <a href={href} className="inline-block">
                {content}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
            {content}
        </button>
    );
}
