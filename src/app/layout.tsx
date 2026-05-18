import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-syne",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "VYBEXX ⚡ – Premium Parties, Concerts & Nightlife Experiences",
    description:
        "VYBEXX – Creating premium nightlife, party & concert experiences with unmatched vibes, music and energy. 🎶✨ DJ Nights, Private Parties, Concerts — we create unforgettable moments.",
    keywords: [
        "VYBEXX",
        "premium nightlife",
        "Kolhapur events",
        "DJ Night",
        "concert events",
        "event management",
        "party planning",
        "corporate events",
        "college events",
    ],
    openGraph: {
        title: "VYBEXX ⚡ – Premium Parties, Concerts & Nightlife",
        description: "Premium parties, concerts & unforgettable nightlife experiences. 🎶✨",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${syne.variable} ${inter.variable}`}>
            <body className="font-inter antialiased">
                <SmoothScroll>
                    <Navbar />
                    {children}
                    <WhatsAppFAB />
                </SmoothScroll>
            </body>
        </html>
    );
}
