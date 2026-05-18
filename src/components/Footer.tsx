"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";

const socials = [
    { icon: Instagram, href: "https://www.instagram.com/vybex.co_/", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
    { icon: Mail, href: "mailto:shouryyp@gmail.com", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="relative py-16 px-6 border-t border-white/5">
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-vybex-purple/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
                {/* Social Links */}
                <div className="flex items-center gap-5">
                    {socials.map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-vybex-purple hover:shadow-glow-sm transition-all duration-300"
                            aria-label={social.label}
                        >
                            <social.icon size={18} strokeWidth={1.5} />
                        </motion.a>
                    ))}
                </div>

                {/* Brand Statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="font-syne text-sm md:text-base font-bold tracking-[0.3em] text-gray-500 uppercase text-center"
                >
                    VYBEXX ⚡ — Where Kolhapur Celebrates.
                </motion.p>

                {/* Copyright */}
                <p className="font-inter text-xs text-gray-600">
                    © {new Date().getFullYear()} VYBEXX. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
