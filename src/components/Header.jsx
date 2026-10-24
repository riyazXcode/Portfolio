import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Server } from 'lucide-react';
import LINKS from '../assets/links';
import LetsConnectBtn from "./LetsConnectBtn";
import PortfolioLogo from "./PortfolioLogo";

const navItems = [
    { name: "About", to: "aboutid", offset: -100 },
    { name: "Experience", to: "experienceid", offset: -80 },
    { name: "Homelab", to: "infrastructureid", offset: -80, badge: "On-Prem" },
    { name: "Skills", to: "skillsid", offset: -80 },
    { name: "Projects", to: "projectsid", offset: -80 },
    { name: "Certifications", to: "certificationsid", offset: -80 },
    { name: "Capabilities", to: "servicesid", offset: -80 },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > 120 && window.scrollY > lastScrollY) {
                    setShowHeader(false);
                } else {
                    setShowHeader(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY]);

    return (
        <header className={`bg-[#090D16]/85 backdrop-blur-xl px-4 lg:px-8 py-3 fixed top-0 w-full z-50 transition-all duration-300 border-b border-slate-800/80 ${
            showHeader ? "translate-y-0 shadow-lg shadow-black/20" : "-translate-y-full shadow-none"
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Brand / Logo + On-Prem Status */}
                <div className="flex items-center gap-3">
                    <PortfolioLogo />
                    <Link
                        to="infrastructureid"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium hover:border-emerald-400 transition cursor-pointer"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Proxmox Node // Online</span>
                    </Link>
                </div>

                {/* Desktop Nav Items */}
                <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={item.offset}
                            className="text-slate-300 hover:text-white font-medium text-sm px-3 py-1.5 rounded-xl hover:bg-slate-800/50 transition duration-200 cursor-pointer flex items-center gap-1.5"
                        >
                            <span>{item.name}</span>
                            {item.badge && (
                                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded-md font-mono">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Right Call To Action + Quick Socials */}
                <div className="hidden lg:flex items-center gap-2.5">
                    <a
                        href={LINKS.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-400 hover:text-[#0A66C2] hover:bg-slate-800/60 transition"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72Z"/>
                        </svg>
                    </a>
                    <a
                        href={LINKS.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition"
                        aria-label="GitHub"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                    </a>
                    <LetsConnectBtn />
                </div>

                {/* Mobile Hamburger Button */}
                <div className="lg:hidden flex items-center gap-2">
                    <button
                        onClick={toggleNavbar}
                        className="p-2 text-slate-300 hover:text-white focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-2 pb-4 bg-[#090D16]/95 backdrop-blur-2xl">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={item.offset}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-300 hover:text-white font-medium text-base py-2.5 px-3 rounded-xl hover:bg-slate-800/60 transition cursor-pointer flex items-center justify-between"
                        >
                            <span>{item.name}</span>
                            {item.badge && (
                                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    ))}
                    <div className="mt-3 pt-3 border-t border-slate-800 flex justify-center">
                        <LetsConnectBtn />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
