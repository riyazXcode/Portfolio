import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { 
    Menu, X, Server, Activity, User, Briefcase, 
    HardDrive, Terminal, Layers, Award, Sparkles, Send, Mail
} from 'lucide-react';
import LINKS from '../assets/links';
import LetsConnectBtn from "./LetsConnectBtn";
import PortfolioLogo from "./PortfolioLogo";

const navItems = [
    { name: "Abou", to: "aboutid", offset: -100, icon: User },
    { name: "Experience", to: "experienceid", offset: -80, icon: Briefcase },
    { name: "Homelab", to: "infrastructureid", offset: -80, badge: "On-Prem", icon: HardDrive },
    { name: "Skills", to: "skillsid", offset: -80, icon: Terminal },
    { name: "Projects", to: "projectsid", offset: -80, icon: Layers },
    { name: "Certifications", to: "certificationsid", offset: -80, icon: Award },
    { name: "Capabilities", to: "servicesid", offset: -80, icon: Sparkles },
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
                if (window.scrollY > 120 && window.scrollY > lastScrollY && !isOpen) {
                    setShowHeader(false);
                } else {
                    setShowHeader(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY, isOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header className={`bg-[#07090e]/85 backdrop-blur-2xl px-4 lg:px-8 py-3 fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/[0.08] ${
            showHeader ? "translate-y-0 shadow-xl shadow-black/40" : "-translate-y-full shadow-none"
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Brand / Logo + On-Prem Status */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                    <PortfolioLogo />
                    <Link
                        to="infrastructureid"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-mono font-medium hover:border-emerald-400 transition cursor-pointer backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="hidden xs:inline">Node:</span>
                        <span>Online</span>
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
                            className="text-slate-300 hover:text-white font-medium text-sm px-3 py-1.5 rounded-xl hover:bg-slate-800/60 transition duration-200 cursor-pointer flex items-center gap-1.5"
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
                            <path d="M19 3a2 2ff 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72Z"/>
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

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden flex items-center gap-2">
                    <button
                        onClick={toggleNavbar}
                        className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white focus:outline-none transition"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Full-Screen Glass Navigation Sheet */}
            {isOpen && (
                <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 bg-[#07090e]/98 backdrop-blur-3xl z-50 flex flex-col justify-between p-6 overflow-y-auto animate-fade-in border-t border-white/[0.08]">
                    <div className="flex flex-col gap-2">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2 px-3">
                            Navigation
                        </div>

                        {navItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={item.offset}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-200 hover:text-white font-medium text-base py-3 px-4 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/80 transition cursor-pointer flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-slate-800 text-blue-400 group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                        <span>{item.name}</span>
                                    </div>
                                    {item.badge && (
                                        <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-mono">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Bottom Drawer Actions */}
                    <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col gap-4">
                        <div className="grid grid-cols-4 gap-2">
                            <a
                                href={LINKS.linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72Z"/>
                                </svg>
                            </a>
                            <a
                                href={LINKS.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-white hover:text-black transition"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </a>
                            <a
                                href={LINKS.twitterLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-800 hover:text-white transition"
                                aria-label="X (Twitter)"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a
                                href={`mailto:${LINKS.email}`}
                                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>

                        <a 
                            href={`mailto:${LINKS.email}`}
                            onClick={() => setIsOpen(false)}
                            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                        >
                            <span>Let’s Connect</span>
                            <Send className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
