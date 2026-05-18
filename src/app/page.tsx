import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import WhyVybex from "@/components/sections/WhyVybex";
import Booking from "@/components/sections/Booking";
import Conversion from "@/components/sections/Conversion";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Timeline />
            <Gallery />
            <WhyVybex />
            <Booking />
            <Conversion />
            <Footer />
        </main>
    );
}
