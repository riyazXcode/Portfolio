import React from "react";
import LINKS from '../assets/links';
import { Server, Heart, GitBranch, Shield, ArrowUp, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-2xl tracking-tight">
                            <span>Mohammed Riyaz Khan</span>
                        </div>
                        <p className="text-sm text-slate-400 mt-1 font-mono">
                            Cloud Migration Specialist @ IBM • Hybrid Cloud Application Migration
                        </p>
                    </div>

                    {/* Back to top */}
                    <Link
                        to="aboutid"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white transition cursor-pointer px-4 py-2 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900 shadow-sm"
                    >
                        <span>Back to top</span>
                        <ArrowUp className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* High-Visibility Social Links Row */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <a
                        href={LINKS.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#0A66C2]/15 hover:bg-[#0A66C2] text-blue-300 hover:text-white border border-[#0A66C2]/40 transition duration-300 text-xs sm:text-sm font-medium"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72Z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href={LINKS.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-white text-slate-200 hover:text-black border border-slate-700 transition duration-300 text-xs sm:text-sm font-medium"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>

                    <a
                        href={LINKS.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition duration-300 text-xs sm:text-sm font-medium"
                    >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                        <span>X (Twitter)</span>
                    </a>

                    <a
                        href={`mailto:${LINKS.email}`}
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-blue-950/30 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 transition duration-300 text-xs sm:text-sm font-medium"
                    >
                        <Mail className="w-4 h-4" />
                        <span>Email Directly</span>
                    </a>
                </div>

                {/* On-Prem & Infrastructure Callout */}
                <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono">
                    <div className="flex items-center gap-3">
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <div className="text-slate-300">
                            <strong className="text-white">Proxmox VE (On-Prem)</strong> • Docker Container • GitHub Actions CI/CD • Cloudflare Tunnel
                        </div>
                    </div>
                    <div className="text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-lg border border-emerald-800/80">
                        riyazkhan.dev
                    </div>
                </div>

                {/* Bottom Rights */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-slate-800/60 pt-6">
                    <div>
                        © {new Date().getFullYear()} Mohammed Riyaz Khan. All rights reserved.
                    </div>
                    <div className="font-mono text-slate-400">
                        Built with React 19 & Tailwind CSS • Containerized on Proxmox VE
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
