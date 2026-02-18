"use client";

import { motion } from "framer-motion";
import { Music, PartyPopper, Building2 } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import GlowButton from "@/components/GlowButton";

const services = [
    {
        icon: Music,
        title: "DJ Night Management",
        description:
            "End-to-end DJ night production — premium sound systems, intelligent lighting design, and top artist bookings that transform any venue into an electric dance floor.",
        features: ["Sound Engineering", "Dynamic Lighting", "Artist Booking", "Crowd Management"],
    },
    {
        icon: PartyPopper,
        title: "Private Party Setup",
        description:
            "Bespoke private celebrations crafted to perfection. From birthdays to couples' nights, every detail is curated to match your vision and vibe.",
        features: ["Birthday Celebrations", "Couples' Events", "Themed Décor", "Custom Ambiance"],
    },
    {
        icon: Building2,
        title: "Corporate & College",
        description:
            "Full-scale event production for corporate gatherings and college festivals. Professional planning, seamless production, and unforgettable energy.",
        features: ["Event Planning", "Stage Production", "Artist Coordination", "Technical Setup"],
    },
];

export default function Services() {
    return (
        <SectionWrapper id="services">
            <motion.div variants={itemVariants} className="text-center mb-16">
                <span className="text-vybex-purple font-inter text-sm font-semibold tracking-widest uppercase mb-4 block">
                    What We Do
                </span>
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter-custom mb-4">
                    Services that{" "}
                    <span className="gradient-text">hit different</span>
                </h2>
                <p className="font-inter text-gray-400 text-lg max-w-2xl mx-auto">
                    No fixed packages. Every event is custom-built to your vision, your vibe, your budget.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div key={service.title} variants={itemVariants}>
                        <GlassCard className="h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-vybex-purple/10 flex items-center justify-center mb-6">
                                <service.icon
                                    size={24}
                                    className="text-vybex-purple"
                                    strokeWidth={1.5}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-syne font-bold text-xl mb-3 text-white">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="text-xs font-inter text-vybex-purple/80 bg-vybex-purple/10 px-3 py-1 rounded-full"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <GlowButton
                                variant="secondary"
                                href="mailto:shouryyp@gmail.com?subject=Custom%20Quote%20Request"
                                className="w-full text-center"
                            >
                                Request Custom Quote
                            </GlowButton>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
