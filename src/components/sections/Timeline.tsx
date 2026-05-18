"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";

const timelineEvents = [
    {
        id: 1,
        title: "VOLTAGE",
        date: "January 1, 2024",
        location: "Infinity Lounge, Kolhapur",
        description:
            "Kicked off 2024 with a premium corporate gala featuring full production, award presentations, and a high-energy networking environment.",
        image: "/portfolio/event-6.svg",
        tag: "Corporate Gala",
    },
    {
        id: 2,
        title: "AFTERGLOW",
        date: "February 14, 2024",
        location: "Moonlight Banquet, Kolhapur",
        description:
            "A stunning Valentine's night blending romance with a pulsating dance floor — live saxophone, intimate lighting, and unforgettable vibes.",
        image: "/portfolio/event-5.svg",
        tag: "Valentine's Night",
    },
    {
        id: 3,
        title: "RISE FEST",
        date: "March 22, 2024",
        location: "KIT College Grounds, Kolhapur",
        description:
            "The biggest college festival of 2024 — DJ battles, live cultural acts, 2000+ students, and a festival atmosphere unlike any other.",
        image: "/portfolio/event-4.svg",
        tag: "College Festival",
    },
    {
        id: 4,
        title: "PURPLE HAZE",
        date: "August 15, 2024",
        location: "Skyline Terrace, Kolhapur",
        description:
            "An exclusive invite-only rooftop party under the stars — curated playlists, ambient purple lighting, and the city skyline as a backdrop.",
        image: "/portfolio/event-3.svg",
        tag: "Private Party",
    },
    {
        id: 5,
        title: "BASS ODYSSEY",
        date: "October 5, 2024",
        location: "The Grand Arena, Kolhapur",
        description:
            "A massive concert night with 3 back-to-back DJ performances, a professional sound system, and a crowd of 800+ that never stopped moving.",
        image: "/portfolio/event-2.svg",
        tag: "Concert Night",
    },
    {
        id: 6,
        title: "NEON NOIR",
        date: "December 31, 2024",
        location: "Club Zenith, Kolhapur",
        description:
            "The ultimate New Year's Eve celebration — neon lights, heavy bass, 500+ attendees, and a countdown to 2025 that Kolhapur won&apos;t forget.",
        image: "/portfolio/event-1.svg",
        tag: "New Year's Eve",
    },
];

export default function Timeline() {
    return (
        <SectionWrapper id="timeline">
            <motion.div variants={itemVariants} className="text-center mb-16">
                <span className="text-vybex-purple font-inter text-sm font-semibold tracking-widest uppercase mb-4 block">
                    Our Journey
                </span>
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter-custom mb-4">
                    A year of{" "}
                    <span className="gradient-text">unforgettable nights</span>
                </h2>
                <p className="font-inter text-gray-400 text-lg max-w-2xl mx-auto">
                    Every milestone, every crowd, every electrifying moment — in chronological order.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Center Line (desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vybex-purple/40 to-transparent -translate-x-1/2" />

                {/* Mobile Line */}
                <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vybex-purple/40 to-transparent" />

                <div className="flex flex-col gap-12">
                    {timelineEvents.map((event, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={event.id}
                                variants={itemVariants}
                                custom={index}
                                className={`relative flex items-center gap-6 md:gap-0 ${
                                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                            >
                                {/* Card — desktop takes half width */}
                                <div
                                    className={`flex-1 md:w-[calc(50%-2rem)] ${
                                        isLeft ? "md:pr-12" : "md:pl-12"
                                    } pl-14 md:pl-0`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        transition={{ duration: 0.3 }}
                                        className="glass-strong rounded-2xl overflow-hidden border border-vybex-purple/20 hover:border-vybex-purple/50 transition-all duration-500 group"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative h-36 overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                            <span className="absolute bottom-3 left-3 font-syne font-extrabold text-xl text-white tracking-tighter-custom text-glow">
                                                {event.title}
                                            </span>
                                            <span className="absolute top-3 right-3 font-inter text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-vybex-purple/80 text-white backdrop-blur-sm">
                                                {event.tag}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            <div className="flex flex-wrap gap-3 mb-3">
                                                <div className="flex items-center gap-1.5 text-gray-400">
                                                    <Calendar size={12} className="text-vybex-purple" />
                                                    <span className="font-inter text-xs">{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-gray-400">
                                                    <MapPin size={12} className="text-vybex-purple" />
                                                    <span className="font-inter text-xs">{event.location}</span>
                                                </div>
                                            </div>
                                            <p className="font-inter text-gray-400 text-sm leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute md:left-1/2 left-6 md:-translate-x-1/2 flex-shrink-0 z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                                        className="w-5 h-5 rounded-full bg-vybex-purple shadow-glow-sm border-2 border-vybex-black"
                                    />
                                </div>

                                {/* Empty opposite side on desktop */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Neon divider */}
            <motion.div variants={itemVariants} className="neon-line mt-24 opacity-50" />
        </SectionWrapper>
    );
}
