"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowDown } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";
import GlowButton from "@/components/GlowButton";

export default function Booking() {
    return (
        <SectionWrapper id="booking" className="bg-gradient-to-b from-transparent via-vybex-purple/[0.03] to-transparent">
            <motion.div variants={itemVariants} className="relative max-w-3xl mx-auto text-center">
                {/* Background glow */}
                <div className="absolute inset-0 -z-10 bg-vybex-purple/5 rounded-3xl blur-3xl" />

                <div className="glass-strong rounded-3xl p-10 md:p-16 border border-vybex-purple/25 relative overflow-hidden">
                    {/* Decorative background circles */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-vybex-purple/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-vybex-purple/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Coming Soon Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="font-inter text-xs font-semibold text-yellow-400 uppercase tracking-widest">
                            Coming Soon
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-4">
                        <Calendar size={28} className="text-vybex-purple" />
                        <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter-custom">
                            Book Your{" "}
                            <span className="gradient-text">Event</span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="font-inter text-gray-400 text-lg leading-relaxed mb-4 max-w-xl mx-auto"
                    >
                        We&apos;re building a seamless online booking experience for your next premium event.
                        Reserve your date, choose your package, and let VYBEXX ⚡ handle the rest.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="font-inter text-gray-500 text-sm mb-10"
                    >
                        Until then, reach out to us directly — we respond within 2 hours.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <GlowButton variant="primary" href="#contact">
                            <ArrowDown size={16} />
                            Contact Us Now
                        </GlowButton>
                        <GlowButton variant="secondary" href="https://wa.me/918446467701?text=Hey%20VYBEXX%2C%20I%27d%20like%20to%20book%20an%20event!">
                            WhatsApp Us
                        </GlowButton>
                    </motion.div>
                </div>
            </motion.div>

            {/* Neon divider */}
            <motion.div variants={itemVariants} className="neon-line mt-24 opacity-50" />
        </SectionWrapper>
    );
}
