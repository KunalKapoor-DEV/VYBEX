"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/SectionWrapper";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { sendEmail } from "@/actions/sendEmail";

export default function Conversion() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("idle");
        const result = await sendEmail(data);

        if (result.success) {
            setStatus("success");
            reset();
            setTimeout(() => setStatus("idle"), 5000);
        } else {
            setStatus("error");
            setErrorMessage(result.error || "Something went wrong.");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const inputStyles = (fieldName: keyof ContactFormData) =>
        `w-full bg-white/5 border ${errors[fieldName] ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-vybex-purple/50"
        } rounded-xl px-5 py-3.5 text-white font-inter text-sm placeholder:text-gray-500 focus:outline-none focus:shadow-glow-sm transition-all duration-300`;

    return (
        <SectionWrapper id="contact" className="bg-gradient-to-b from-transparent via-vybex-purple/[0.03] to-transparent">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Content */}
                <div>
                    <motion.div variants={itemVariants}>
                        <span className="text-vybex-purple font-inter text-sm font-semibold tracking-widest uppercase mb-4 block">
                            Get Started
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tighter-custom mb-6 leading-tight"
                    >
                        Ready to create
                        <br />
                        <span className="gradient-text">something epic?</span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="font-inter text-gray-400 text-lg leading-relaxed mb-8"
                    >
                        Tell us about your event and we&apos;ll craft a custom package that
                        matches your vision, scale, and budget. No templates—just pure VYBEXX energy.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-vybex-purple shadow-glow-sm" />
                            <span className="font-inter text-gray-300 text-sm">
                                Response within 2 hours
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-vybex-purple shadow-glow-sm" />
                            <span className="font-inter text-gray-300 text-sm">
                                Free consultation call
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-vybex-purple shadow-glow-sm" />
                            <span className="font-inter text-gray-300 text-sm">
                                Custom pricing — no hidden fees
                            </span>
                        </div>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <motion.div variants={itemVariants} className="mt-8 grid grid-cols-2 gap-3">
                        <a
                            href="tel:+918446467701"
                            className="flex items-center gap-3 p-3 rounded-xl glass border border-vybex-purple/20 hover:border-vybex-purple/50 transition-all duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-vybex-purple/15 flex items-center justify-center flex-shrink-0 group-hover:bg-vybex-purple/25 transition-colors">
                                <span className="text-base">📞</span>
                            </div>
                            <div>
                                <p className="font-inter text-[10px] text-gray-500 uppercase tracking-wider">Phone</p>
                                <p className="font-inter text-xs text-white font-medium">+91 84464 67701</p>
                            </div>
                        </a>

                        <a
                            href="mailto:shouryyp@gmail.com"
                            className="flex items-center gap-3 p-3 rounded-xl glass border border-vybex-purple/20 hover:border-vybex-purple/50 transition-all duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-vybex-purple/15 flex items-center justify-center flex-shrink-0 group-hover:bg-vybex-purple/25 transition-colors">
                                <span className="text-base">📧</span>
                            </div>
                            <div>
                                <p className="font-inter text-[10px] text-gray-500 uppercase tracking-wider">Email</p>
                                <p className="font-inter text-xs text-white font-medium">shouryyp@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/918446467701"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-xl glass border border-vybex-purple/20 hover:border-vybex-purple/50 transition-all duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-vybex-purple/15 flex items-center justify-center flex-shrink-0 group-hover:bg-vybex-purple/25 transition-colors">
                                <span className="text-base">💬</span>
                            </div>
                            <div>
                                <p className="font-inter text-[10px] text-gray-500 uppercase tracking-wider">WhatsApp</p>
                                <p className="font-inter text-xs text-white font-medium">+91 84464 67701</p>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/vybex.co_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-xl glass border border-vybex-purple/20 hover:border-vybex-purple/50 transition-all duration-300 group"
                        >
                            <div className="w-8 h-8 rounded-lg bg-vybex-purple/15 flex items-center justify-center flex-shrink-0 group-hover:bg-vybex-purple/25 transition-colors">
                                <span className="text-base">📸</span>
                            </div>
                            <div>
                                <p className="font-inter text-[10px] text-gray-500 uppercase tracking-wider">Instagram</p>
                                <p className="font-inter text-xs text-white font-medium">@vybex.co_</p>
                            </div>
                        </a>
                    </motion.div>
                </div>

                {/* Right: Form */}
                <motion.div variants={itemVariants}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="glass-strong rounded-3xl p-8 md:p-10"
                    >
                        <div className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block font-inter text-xs text-gray-400 uppercase tracking-wider mb-2"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    {...register("name")}
                                    className={inputStyles("name")}
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block font-inter text-xs text-gray-400 uppercase tracking-wider mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    {...register("phone")}
                                    className={inputStyles("phone")}
                                />
                                {errors.phone && (
                                    <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="eventType"
                                    className="block font-inter text-xs text-gray-400 uppercase tracking-wider mb-2"
                                >
                                    Event Type
                                </label>
                                <select
                                    id="eventType"
                                    {...register("eventType")}
                                    className={inputStyles("eventType")}
                                >
                                    <option value="">Select event type</option>
                                    <option value="DJ Night">DJ Night</option>
                                    <option value="Private Party">Private Party</option>
                                    <option value="Birthday">Birthday Celebration</option>
                                    <option value="Corporate">Corporate Event</option>
                                    <option value="College">College Festival</option>
                                    <option value="Wedding">Wedding Function</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.eventType && (
                                    <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.eventType.message}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="date"
                                    className="block font-inter text-xs text-gray-400 uppercase tracking-wider mb-2"
                                >
                                    Preferred Date
                                </label>
                                <input
                                    id="date"
                                    type="date"
                                    {...register("date")}
                                    className={inputStyles("date")}
                                />
                                {errors.date && (
                                    <p className="text-red-400 text-[10px] mt-1 ml-1">{errors.date.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`w-full mt-2 py-4 rounded-xl font-inter font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${isSubmitting
                                    ? "bg-vybex-purple/50 cursor-not-allowed"
                                    : "bg-vybex-purple hover:shadow-glow-lg active:bg-vybex-purple-dark"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                        Sending Inquiry...
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} />
                                        Submit Request
                                    </>
                                )}
                            </motion.button>

                            {/* Status Messages */}
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-green-400 text-sm font-inter mt-3"
                                >
                                    <CheckCircle size={16} />
                                    Request submitted! We&apos;ll reach out shortly.
                                </motion.div>
                            )}

                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-red-400 text-sm font-inter mt-3"
                                >
                                    <AlertCircle size={16} />
                                    {errorMessage}
                                </motion.div>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
