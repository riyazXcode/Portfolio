import React from 'react';
import ParallaxBackground from "./components/ParallaxBackground";
import Header from "./components/Header";
import Hero from './components/Hero';
import Experience from "./components/Experience";
import InfrastructureSection from "./components/InfrastructureSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/dist/react';

const App = () => {
    return (
        <div className="relative min-h-screen bg-[#090D16] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden font-sans">
            <ParallaxBackground />
            <Header />
            <Hero />
            <Experience />
            <InfrastructureSection />
            <Skills />
            <Projects />
            <Certifications />
            <Services />
            <Footer />
            <Analytics />
        </div>
    );
};

export default App;
