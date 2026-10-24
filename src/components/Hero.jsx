import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import LINKS from '../assets/links';
import LetsConnectBtn from './LetsConnectBtn';
import ResumeBtn from './ResumeBtn';
import { 
    Server, Cpu, Cloud, Terminal, Sparkles, CheckCircle2, 
    ArrowRight, ShieldCheck, Copy, Check, Mail, ExternalLink
} from 'lucide-react';

const Photo = new URL('../assets/photo/photo.png', import.meta.url);

const Hero = () => {
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [copied, setCopied] = useState(false);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 30;
        const y = (e.clientY - rect.top - rect.height / 2) / 30;
        setMouseOffset({ x, y });
    };

    const handleMouseLeave = () => {
        setMouseOffset({ x: 0, y: 0 });
    };

    const copyTerminalCurl = () => {
        navigator.clipboard.writeText("curl -s https://riyazkhan.dev/status");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex flex-col items-center justify-center w-full px-4 pt-28 pb-16 overflow-hidden" 
            id="aboutid"
        >
            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
                
                {/* 1. Precise On-Premise Status Badge */}
                <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-semibold text-white">Hosted On-Prem:</span>
                    <span>Proxmox VE</span>
                    <span className="text-emerald-500/60">•</span>
                    <span>Docker</span>
                    <span className="text-emerald-500/60">•</span>
                    <span>GitHub Actions CI/CD</span>
                    <span className="text-emerald-500/60">•</span>
                    <span className="text-emerald-300 font-semibold">Cloudflare Tunnel</span>
                </div>

                {/* Main 2-Column Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
                    
                    {/* Left Column: Heading, Story & CTAs */}
                    <div className="lg:col-span-7 flex flex-col gap-4 text-center lg:text-left">
                        
                        <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase font-mono">
                            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                            <span>Cloud Migration Specialist @ IBM</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                            I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                                Mohammed Riyaz Khan
                            </span>
                        </h1>

                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-200">
                            Bringing Development Depth to <span className="text-blue-400">CloudOps</span>.
                        </h2>

                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                            Specializing in <strong className="text-white">Hybrid Cloud Application Migration</strong> and enterprise workload modernization at <strong className="text-white">IBM</strong>. Transitioning enterprise applications into scalable, cloud-native architectures with AWS, Terraform, Ansible, and Kubernetes—bringing true full-stack engineering depth (FastAPI, WebSockets, Python, MERN) to enterprise infrastructure.
                        </p>

                        {/* Credential Pills */}
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-1">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                                <Server className="w-3.5 h-3.5 text-blue-400" />
                                Cloud Migration Specialist @ IBM
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                                Claude™ Certified Developer (Anthropic)
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                                <Cloud className="w-3.5 h-3.5 text-amber-400" />
                                Terraform Associate 2026
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                                <Terminal className="w-3.5 h-3.5 text-slate-400" />
                                AWS · Ansible · OpenShift · K8s
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2">
                            <LetsConnectBtn />
                            <ResumeBtn />
                            <Link
                                to="experienceid"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="px-5 py-2.5 rounded-full border border-slate-700 bg-slate-800/60 text-slate-200 font-medium hover:bg-slate-700 hover:border-slate-500 transition duration-300 cursor-pointer text-sm sm:text-base backdrop-blur-sm flex items-center gap-2"
                            >
                                <span>View Experience</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: 100% Unobstructed Photo with Status Capsules Below */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center relative py-4">
                        
                        {/* Background Pulsing Halo */}
                        <div 
                            className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-emerald-500/20 blur-3xl -z-10 animate-glow-pulse"
                            style={{
                                transform: `translate3d(${mouseOffset.x * -1.5}px, ${mouseOffset.y * -1.5}px, 0)`
                            }}
                        />

                        {/* Central Avatar with 3D Tilt - 100% Completely Clear of Any Overlapping Badges */}
                        <div 
                            className="relative group transition-transform duration-300 ease-out mb-5"
                            style={{
                                transform: `perspective(1000px) rotateY(${mouseOffset.x * 0.8}deg) rotateX(${-mouseOffset.y * 0.8}deg) scale3d(1.02, 1.02, 1.02)`
                            }}
                        >
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>
                            <img
                                className="relative h-64 w-64 sm:h-76 sm:w-76 lg:h-88 lg:w-88 rounded-full object-cover shadow-[0_0_50px_rgba(20,101,255,0.3)] border-4 border-slate-900"
                                src={Photo}
                                alt="Mohammed Riyaz Khan"
                            />
                        </div>

                        {/* Clean Status Badges Neatly Positioned Below the Avatar (Zero Face Overlap) */}
                        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono shadow-md backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                <span>Proxmox Node: Online</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-mono shadow-md backdrop-blur-md">
                                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                                <span>Claude™ Certified</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. HIGH VISIBILITY SOCIALS DOCK (World-Class Clarity & Design) */}
                <div className="mt-10 w-full max-w-4xl">
                    <div className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                        Direct Connection & Social Profiles
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {/* LinkedIn */}
                        <a
                            href={LINKS.linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/40 hover:border-[#0A66C2] transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] backdrop-blur-sm"
                        >
                            <div className="p-2 rounded-xl bg-[#0A66C2] text-white shrink-0 group-hover:scale-105 transition-transform">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72Z"/>
                                </svg>
                            </div>
                            <div className="text-left min-w-0">
                                <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">LinkedIn</div>
                                <div className="text-[11px] text-slate-400 truncate font-mono">/riyaz-khan-dev</div>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href={LINKS.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-sm"
                        >
                            <div className="p-2 rounded-xl bg-slate-800 text-white border border-slate-700 shrink-0 group-hover:scale-105 transition-transform">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </div>
                            <div className="text-left min-w-0">
                                <div className="text-xs font-semibold text-white group-hover:text-slate-200 transition-colors">GitHub</div>
                                <div className="text-[11px] text-slate-400 truncate font-mono">@riyazXcode</div>
                            </div>
                        </a>

                        {/* X / Twitter */}
                        <a
                            href={LINKS.twitterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-sm"
                        >
                            <div className="p-2 rounded-xl bg-slate-800 text-white border border-slate-700 shrink-0 group-hover:scale-105 transition-transform">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </div>
                            <div className="text-left min-w-0">
                                <div className="text-xs font-semibold text-white group-hover:text-slate-200 transition-colors">X (Twitter)</div>
                                <div className="text-[11px] text-slate-400 truncate font-mono">@rizxcodes</div>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href={`mailto:${LINKS.email}`}
                            className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-950/20 hover:bg-blue-950/40 border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(37,99,235,0.25)] backdrop-blur-sm"
                        >
                            <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 group-hover:scale-105 transition-transform">
                                <Mail className="w-4 h-4" />
                            </div>
                            <div className="text-left min-w-0">
                                <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">Email</div>
                                <div className="text-[11px] text-slate-400 truncate font-mono">riyazkhan03.official</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* 3. Interactive Terminal Command */}
                <div className="mt-8 w-full max-w-4xl bg-slate-950/80 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                            <span className="ml-2 font-mono text-slate-300">live-node // riyazkhan.dev</span>
                        </div>
                        <button 
                            onClick={copyTerminalCurl}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition text-[11px] font-mono cursor-pointer"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-emerald-400 font-semibold">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                                    <span>copy curl</span>
                                </>
                            )}
                        </button>
                    </div>

                    <div className="pt-2.5 font-mono text-xs sm:text-sm text-left overflow-x-auto">
                        <div className="text-emerald-400 flex items-center gap-2">
                            <span className="text-blue-400 font-semibold">$</span>
                            <span className="text-slate-200">curl -s https://riyazkhan.dev/status</span>
                        </div>
                        <div className="text-slate-400 mt-1.5 pl-3 border-l border-slate-800 space-y-0.5">
                            <div>&#123;</div>
                            <div className="pl-4">
                                <span className="text-blue-400">"status"</span>: <span className="text-emerald-300">"online"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-400">"role"</span>: <span className="text-amber-300">"Cloud Migration Specialist @ IBM"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-400">"runtime"</span>: <span className="text-slate-300">"Docker on Proxmox VE (On-Premises)"</span>,
                            </div>
                            <div className="pl-4">
                                <span className="text-blue-400">"routing"</span>: <span className="text-slate-300">"Cloudflare Edge & SSL Termination"</span>
                            </div>
                            <div>&#125;</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
