"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Music, Sparkles, Star } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";

const events = [
    {
        id: 1,
        name: "NEON NOIR",
        date: "December 31, 2024",
        venue: "Club Zenith, Kolhapur",
        type: "New Year's Eve Bash",
        description:
            "An electrifying New Year's Eve celebration that brought Kolhapur's finest together for a night of neon lights, heavy bass, and pure energy.",
        highlights: ["500+ Attendees", "Live DJ Set", "LED Light Show", "Open Bar"],
        image: "/portfolio/event-1.svg",
        accent: "#7C3AED",
    },
    {
        id: 2,
        name: "BASS ODYSSEY",
        date: "October 5, 2024",
        venue: "The Grand Arena, Kolhapur",
        type: "Concert Night",
        description:
            "A full-scale concert night featuring back-to-back DJ performances, massive sound systems, and a crowd that never stopped moving.",
        highlights: ["800+ Crowd", "3 DJs", "Pro Sound Setup", "VIP Zone"],
        image: "/portfolio/event-2.svg",
        accent: "#FAB520",
    },
    {
        id: 3,
        name: "PURPLE HAZE",
        date: "August 15, 2024",
        venue: "Skyline Terrace, Kolhapur",
        type: "Private Rooftop Party",
        description:
            "An exclusive rooftop party with curated playlists, ambient lighting, and a 360° view of the city skyline under the stars.",
        highlights: ["Invite Only", "Rooftop Venue", "Curated Setlist", "Gourmet Catering"],
        image: "/portfolio/event-3.svg",
        accent: "#7C3AED",
    },
    {
        id: 4,
        name: "RISE FEST",
        date: "March 22, 2024",
        venue: "KIT College Grounds, Kolhapur",
        type: "College Festival",
        description:
            "The biggest college festival of 2024 featuring live performances, DJ battles, cultural acts and thousands of energized students.",
        highlights: ["2000+ Students", "DJ Battle", "Live Acts", "Stall Fest"],
        image: "/portfolio/event-4.svg",
        accent: "#FAB520",
    },
    {
        id: 5,
        name: "AFTERGLOW",
        date: "February 14, 2024",
        venue: "Moonlight Banquet, Kolhapur",
        type: "Valentine's Night",
        description:
            "A romantic yet electric Valentine's night celebration that combined fine dining with a pulsating dance floor and live saxophone.",
        highlights: ["300+ Couples", "Live Saxophone", "Dinner & Dance", "Photo Booth"],
        image: "/portfolio/event-5.svg",
        accent: "#7C3AED",
    },
    {
        id: 6,
        name: "VOLTAGE",
        date: "January 1, 2024",
        venue: "Infinity Lounge, Kolhapur",
        type: "Corporate Gala",
        description:
            "A premium corporate gala blending professional networking with high-energy entertainment, custom branding, and a full production setup.",
        highlights: ["Corporate Brand", "Full Production", "Networking Zone", "Award Night"],
        image: "/portfolio/event-6.svg",
        accent: "#FAB520",
    },
];

const typeIcons: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
    "New Year's Eve Bash": Sparkles,
    "Concert Night": Music,
    "Private Rooftop Party": Star,
    "College Festival": Sparkles,
    "Valentine's Night": Star,
    "Corporate Gala": Star,
};

export default function Portfolio() {
    return (
        <SectionWrapper id="portfolio" className="bg-gradient-to-b from-transparent via-vybex-purple/[0.02] to-transparent">
            <motion.div variants={itemVariants} className="text-center mb-16">
                <span className="text-vybex-purple font-inter text-sm font-semibold tracking-widest uppercase mb-4 block">
                    Previous Events
                </span>
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter-custom mb-4">
                    Nights we{" "}
                    <span className="gradient-text">made legendary</span>
                </h2>
                <p className="font-inter text-gray-400 text-lg max-w-2xl mx-auto">
                    Every event carries a story. Here are the moments we&apos;ve curated.
                </p>
            </motion.div>

            {/* Event Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => {
                    const TypeIcon = typeIcons[event.type] || Sparkles;
                    return (
                        <motion.div
                            key={event.id}
                            variants={itemVariants}
                            custom={index}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="group relative rounded-2xl overflow-hidden glass-strong border border-vybex-purple/20 hover:border-vybex-purple/50 transition-all duration-500"
                        >
                            {/* Cover Image */}
                            <div className="relative h-48 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={event.image}
                                    alt={event.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                {/* Event Type Badge */}
                                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-vybex-purple/80 backdrop-blur-sm">
                                    <TypeIcon size={12} className="text-white" />
                                    <span className="font-inter text-[10px] font-semibold text-white uppercase tracking-wider">
                                        {event.type}
                                    </span>
                                </div>
                                {/* Event Name on Image */}
                                <div className="absolute bottom-3 left-4 right-4">
                                    <h3 className="font-syne font-extrabold text-2xl text-white tracking-tighter-custom text-glow">
                                        {event.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                {/* Date & Venue */}
                                <div className="flex flex-col gap-2 mb-3">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Calendar size={13} className="text-vybex-purple flex-shrink-0" />
                                        <span className="font-inter text-xs">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <MapPin size={13} className="text-vybex-purple flex-shrink-0" />
                                        <span className="font-inter text-xs">{event.venue}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="font-inter text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {event.description}
                                </p>

                                {/* Key Highlights */}
                                <div className="flex flex-wrap gap-2">
                                    {event.highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="font-inter text-[10px] px-2 py-1 rounded-full border border-vybex-purple/30 text-vybex-purple bg-vybex-purple/5 uppercase tracking-wider"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Neon divider */}
            <motion.div variants={itemVariants} className="neon-line mt-24 opacity-50" />
        </SectionWrapper>
    );
}
