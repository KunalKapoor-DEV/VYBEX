"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
    return (
        <motion.a
            href="https://wa.me/918446467701?text=Hey%20VYBEX%2C%20I%27m%20interested%20in%20booking%20an%20event!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5, ease: "backOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse-glow"
            aria-label="Chat on WhatsApp"
            style={{
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
            }}
        >
            <MessageCircle size={26} className="text-white" fill="white" />
        </motion.a>
    );
}
