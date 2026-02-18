import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                vybex: {
                    black: "#050505",
                    purple: "#A855F7",
                    "purple-dark": "#7C3AED",
                    "purple-light": "#C084FC",
                    "purple-glow": "rgba(168, 85, 247, 0.4)",
                },
            },
            fontFamily: {
                syne: ["var(--font-syne)", "sans-serif"],
                inter: ["var(--font-inter)", "sans-serif"],
            },
            boxShadow: {
                "glow": "0 0 20px rgba(168, 85, 247, 0.4)",
                "glow-lg": "0 0 40px rgba(168, 85, 247, 0.5)",
                "glow-sm": "0 0 10px rgba(168, 85, 247, 0.3)",
            },
            backgroundImage: {
                "glass-gradient": "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(168, 85, 247, 0.05))",
            },
            animation: {
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" },
                    "50%": { boxShadow: "0 0 40px rgba(168, 85, 247, 0.7)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
