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
    title: "VYBEX – Kolhapur's Most Energetic Event Experience",
    description:
        "VYBEX is an elite, youth-driven event brand redefining how Kolhapur celebrates. DJ Nights, Private Parties, Corporate Events — we create moments.",
    keywords: [
        "VYBEX",
        "Kolhapur events",
        "DJ Night",
        "event management",
        "party planning",
        "corporate events",
        "college events",
    ],
    openGraph: {
        title: "VYBEX – Kolhapur's Most Energetic Event Experience",
        description: "We don't organize events. We create moments.",
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
