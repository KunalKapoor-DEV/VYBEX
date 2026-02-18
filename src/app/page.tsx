import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyVybex from "@/components/sections/WhyVybex";
import Conversion from "@/components/sections/Conversion";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <WhyVybex />
            <Conversion />
            <Footer />
        </main>
    );
}
