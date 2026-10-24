import React, { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import LINKS from '../assets/links';
import LetsConnectBtn from './LetsConnectBtn';
import ResumeBtn from './ResumeBtn';
import { 
    Server, Cpu, Cloud, Terminal, Sparkles, CheckCircle2, 
    ArrowRight, ShieldCheck, Copy, Check, Mail, ExternalLink,
    Activity, Globe, Radio, Play
} from 'lucide-react';

const Photo = new URL('../assets/photo/photo.png', import.meta.url);

const Hero = () => {
    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
    const [copied, setCopied] = useState(false);
    const [activeTab, setActiveTab] = useState('status');
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 32;
        const y = (e.clientY - rect.top - rect.height / 2) / 32;
        setMouseOffset({ x, y });
    };

    const handleMouseLeave = () => {
        setMouseOffset({ x: 0, y: 0 });
    };

    const copyTerminalCmd = (cmd) => {
        navigator.clipboard.writeText(cmd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden" 
            id="aboutid"
        >
            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
                
                {/* 1. Precision Status Badge (Responsive Homelab Telemetry) */}
                <div className="mb-6 sm:mb-8 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs sm:text-sm font-medium backdrop-blur-xl shadow-[0_0_25px_rgba(16,185,129,0.12)] laser-highlight text-center">
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-semibold text-white tracking-wide">HOSTED ON-PREM:</span>
                    <span className="text-emerald-300 font-mono">Proxmox VE 8</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-300 font-mono">Docker Alpine</span>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <span className="hidden sm:inline text-slate-300 font-mono">GH Actions CI/CD</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-cyan-300 font-mono font-semibold">Cloudflare Tunnel</span>
                </div>

                {/* Main 2-Column Hero Grid (Avatar shows first on mobile for immediate personal connection) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                    
                    {/* Right Column (Avatar & Telemetry): Order-1 on mobile, Order-2 on Desktop */}
                    <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center relative py-2">
                        
                        {/* Ambient Pulsing Aura */}
                        <div 
                            className="absolute w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-blue-600/25 via-indigo-600/15 to-emerald-500/15 blur-2xl sm:blur-3xl -z-10 animate-glow-pulse"
                            style={{
                                transform: `translate3d(${mouseOffset.x * -1.2}px, ${mouseOffset.y * -1.2}px, 0)`
                            }}
                        />

                        {/* Avatar Container with Dual Concentric Cyber Rings */}
                        <div 
                            className="relative group transition-transform duration-300 ease-out mb-4 sm:mb-5"
                            style={{
                                transform: `perspective(1000px) rotateY(${mouseOffset.x * 0.7}deg) rotateX(${-mouseOffset.y * 0.7}deg)`
                            }}
                        >
                            {/* Outer Slow Rotating Gradient Ring */}
                            <div className="absolute -inset-2.5 sm:-inset-3 rounded-full bg-gradient-to-r from-blue-500/30 via-emerald-400/20 to-purple-500/30 blur-sm animate-spin-slow pointer-events-none"></div>

                            {/* Inner Shimmer Border */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-400 to-cyan-300 opacity-70 group-hover:opacity-100 transition duration-500"></div>

                            {/* User Photo - 100% Unobstructed Face */}
                            <img
                                className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-84 lg:w-84 rounded-full object-cover shadow-[0_0_50px_rgba(15,98,254,0.3)] border-4 border-[#07090e]"
                                src={Photo}
                                alt="Mohammed Riyaz Khan - Cloud Migration Specialist @ IBM"
                            />
                        </div>

                        {/* Telemetry Hardware Dock Neatly Placed Beneath Avatar */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 w-full max-w-sm">
                            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-mono shadow-md backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span>Node: pve-01</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-mono shadow-md backdrop-blur-md">
                                <Radio className="w-3 h-3 text-cyan-400" />
                                <span>Edge: Cloudflare</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/90 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono shadow-md backdrop-blur-md">
                                <Cpu className="w-3 h-3 text-purple-400" />
                                <span>Anthropic Certified</span>
                            </div>
                        </div>
                    </div>

                    {/* Left Column (Heading, Pitch & CTAs): Order-2 on mobile, Order-1 on Desktop */}
                    <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-center lg:text-left">
                        
                        <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-blue-400 font-semibold text-xs sm:text-sm tracking-wider uppercase font-mono">
                            <span className="p-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                                <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                            </span>
                            <span>Cloud Migration Specialist @ IBM</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                            I'm <span className="bg-gradient-to-r from-white via-slate-100 to-blue-300 bg-clip-text text-transparent">
                                Mohammed Riyaz Khan
                            </span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-tight">
                            Bringing Development Depth to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Enterprise CloudOps</span>.
                        </h2>

                        <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Specializing in <strong className="text-white font-medium">Hybrid Cloud Application Migration</strong> and workload modernization at <strong className="text-white font-medium">IBM</strong>. Transitioning complex enterprise applications onto scalable, cloud-native architectures with AWS, Terraform, Ansible, and Kubernetes—backed by full-stack engineering depth (FastAPI, WebSockets, Python, MERN).
                        </p>

                        {/* Credential Pills Grid */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-md">
                                <Server className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                <span>Cloud Migration Specialist @ IBM</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-md">
                                <Cpu className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                                <span>Claude™ Certified Developer</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md">
                                <Cloud className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span>HashiCorp Terraform 2026</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-xl bg-slate-900/70 border border-slate-700/80 text-slate-300 text-xs sm:text-sm font-mono backdrop-blur-md">
                                <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>AWS · OpenShift · Ansible · Docker</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mt-1 sm:mt-2">
                            <LetsConnectBtn />
                            <ResumeBtn />
                            <Link
                                to="infrastructureid"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="px-4 sm:px-5 py-2.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 font-medium hover:bg-slate-800 hover:border-slate-500 hover:text-white transition duration-300 cursor-pointer text-xs sm:text-base backdrop-blur-md flex items-center gap-2 group shadow-sm"
                            >
                                <Activity className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 group-hover:animate-pulse" />
                                <span>Homelab Architecture</span>
                                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 2. HIGH-VISIBILITY SOCIAL DOCK (Responsive 2x2 Grid on Mobile, 4 Columns on Desktop) */}
                <div className="mt-10 sm:mt-12 w-full max-w-5xl">
                    <div className="flex items-center justify-between mb-3 px-1">
                        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-400">
                            Verified Profiles & Direct Contact
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            Available
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                        {/* LinkedIn */}
                        <a
                            href={LINKS.linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/60 hover:bg-[#0A66C2]/15 border border-slate-800 hover:border-[#0A66C2]/60 transition-all duration-300 group shadow-sm backdrop-blur-xl laser-highlight"
                        >
                            <div className="p-2 sm:p-2.5 rounded-xl bg-[#0A66C2] text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72-.77-1.72-1.72-1.72Z"/>
                                </svg>
                            </div>
                            <div className="text-left min-w-0">
                                <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1">
                                    <span>LinkedIn</span>
                                    <ExternalLink className="w-2.5 h-2.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" />
                                </div>
                                <div className="text-[10px] sm:text-[11px] text-slate-400 truncate font-mono">/riyaz-khan-dev</div>
                            </div>
                        </a>

                        {/* GitHub */}
                        <a
                            href={LINKS.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-600 transition-all duration-300 group shadow-sm backdrop-blur-xl laser-highlight"
                        >
                            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-current" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </div>
                            <div className="text-left min-w-0">
                                <div className="text-xs font-semibold text-white group-hover:text-slate-200 transition-colors flex items-center gap-1">
                                    <span>GitHub</span>
                                    <ExternalLink className="w-2.5 h-2.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" />
                                </div>
                                <div className="text-[10px] sm:text-[11px] text-slate-400 truncate font-mono">@riyazXcode</div>
                            </div>
                        </a>

                        {/* X / Twitter */}
                        <a
                            href={LINKS.twitterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-600 transition-all duration-300 group shadow-sm backdrop-blur-xl laser-highlight"
                        >
                            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </div>
                            <div className="text-left min-w-0">
                                <div className="text-xs font-semibold text-white group-hover:text-slate-200 transition-colors flex items-center gap-1">
                                    <span>X (Twitter)</span>
                                    <ExternalLink className="w-2.5 h-2.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" />
                                </div>
                                <div className="text-[10px] sm:text-[11px] text-slate-400 truncate font-mono">@rizxcodes</div>
                            </div>
                        </a>

                        {/* Direct Email */}
                        <a
                            href={`mailto:${LINKS.email}`}
                            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-slate-900/60 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group shadow-sm backdrop-blur-xl laser-highlight"
                        >
                            <div className="p-2 sm:p-2.5 rounded-xl bg-blue-600 text-white shrink-0 group-hover:scale-105 transition-transform shadow-md">
                                <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                            </div>
                            <div className="text-left min-w-0">
                                <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1">
                                    <span>Email</span>
                                    <ExternalLink className="w-2.5 h-2.5 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline" />
                                </div>
                                <div className="text-[10px] sm:text-[11px] text-slate-400 truncate font-mono">riyazkhan03</div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* 3. INTERACTIVE CYBER TERMINAL / NOC INSPECTOR (Mobile Optimized with Horizontal Scroll Tabs) */}
                <div className="mt-8 w-full max-w-5xl glass-panel rounded-3xl p-4 sm:p-5 shadow-2xl laser-highlight">
                    {/* Terminal Header with Swipeable Tabs on Mobile */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500/80 inline-block"></span>
                            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/80 inline-block"></span>
                            <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                            <div className="hidden xs:flex items-center gap-1.5 ml-2 pl-2 border-l border-slate-800 text-[11px] sm:text-xs font-mono text-slate-400">
                                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                                <span>riyazkhan.dev</span>
                            </div>
                        </div>

                        {/* Interactive Console Tabs (Horizontal Swiping on Narrow Screens) */}
                        <div className="flex items-center gap-1 bg-slate-950/90 p-1 rounded-xl border border-slate-800 text-xs font-mono overflow-x-auto no-scrollbar">
                            <button
                                onClick={() => setActiveTab('status')}
                                className={`px-2.5 py-1 rounded-lg transition cursor-pointer shrink-0 ${
                                    activeTab === 'status' 
                                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 font-semibold' 
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                curl status
                            </button>
                            <button
                                onClick={() => setActiveTab('docker')}
                                className={`px-2.5 py-1 rounded-lg transition cursor-pointer shrink-0 ${
                                    activeTab === 'docker' 
                                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 font-semibold' 
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                docker ps
                            </button>
                            <button
                                onClick={() => setActiveTab('iac')}
                                className={`px-2.5 py-1 rounded-lg transition cursor-pointer shrink-0 ${
                                    activeTab === 'iac' 
                                        ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40 font-semibold' 
                                        : 'text-slate-400 hover:text-slate-200'
                                }`}
                            >
                                terraform plan
                            </button>
                        </div>

                        {/* Copy Button */}
                        <button 
                            onClick={() => {
                                const cmd = activeTab === 'status' 
                                    ? 'curl -s https://riyazkhan.dev/status' 
                                    : activeTab === 'docker' 
                                    ? 'docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"' 
                                    : 'terraform plan -target=module.hybrid_cloud_migration';
                                copyTerminalCmd(cmd);
                            }}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 transition text-[11px] sm:text-xs font-mono cursor-pointer border border-slate-700/60 shrink-0"
                            aria-label="Copy terminal command"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span className="text-emerald-400 font-semibold">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3 h-3 text-slate-400" />
                                    <span>copy</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Terminal Body Content */}
                    <div className="pt-3 font-mono text-xs sm:text-sm text-left overflow-x-auto min-h-[110px]">
                        {activeTab === 'status' && (
                            <div>
                                <div className="text-emerald-400 flex items-center gap-2">
                                    <span className="text-blue-400 font-bold">$</span>
                                    <span className="text-slate-200">curl -s https://riyazkhan.dev/status</span>
                                </div>
                                <div className="text-slate-400 mt-2 pl-3 border-l-2 border-emerald-500/30 space-y-0.5">
                                    <div>&#123;</div>
                                    <div className="pl-3 sm:pl-4">
                                        <span className="text-blue-400">"engineer"</span>: <span className="text-white">"Mohammed Riyaz Khan"</span>,
                                    </div>
                                    <div className="pl-3 sm:pl-4">
                                        <span className="text-blue-400">"role"</span>: <span className="text-amber-300">"Cloud Migration Specialist @ IBM"</span>,
                                    </div>
                                    <div className="pl-3 sm:pl-4">
                                        <span className="text-blue-400">"focus"</span>: <span className="text-slate-300">"Enterprise Hybrid Cloud Application Migration"</span>,
                                    </div>
                                    <div className="pl-3 sm:pl-4">
                                        <span className="text-blue-400">"infrastructure"</span>: <span className="text-emerald-300">"Bare-Metal Proxmox VE 8 + Docker Alpine"</span>,
                                    </div>
                                    <div className="pl-3 sm:pl-4">
                                        <span className="text-blue-400">"edge_security"</span>: <span className="text-cyan-300">"Cloudflare Tunnel (Zero Inbound Open Ports)"</span>
                                    </div>
                                    <div>&#125;</div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'docker' && (
                            <div>
                                <div className="text-emerald-400 flex items-center gap-2">
                                    <span className="text-blue-400 font-bold">$</span>
                                    <span className="text-slate-200">docker ps --format "table &#123;&#123;.Names&#125;&#125;\t&#123;&#123;.Status&#125;&#125;\t&#123;&#123;.Ports&#125;&#125;"</span>
                                </div>
                                <div className="text-slate-400 mt-2 pl-3 border-l-2 border-blue-500/30 space-y-0.5 text-[11px] sm:text-xs">
                                    <div className="text-slate-500">NAMES                          STATUS                     PORTS</div>
                                    <div className="text-emerald-400">riyazkhan-portfolio            Up 14 days (healthy)       0.0.0.0:8080-&gt;80/tcp</div>
                                    <div className="text-purple-400">portfolio-watchtower           Up 14 days                 (daemon poll 60s)</div>
                                    <div className="text-cyan-400">cloudflared-tunnel             Up 14 days                 zero-trust edge tunnel</div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'iac' && (
                            <div>
                                <div className="text-emerald-400 flex items-center gap-2">
                                    <span className="text-blue-400 font-bold">$</span>
                                    <span className="text-slate-200">terraform plan -target=module.hybrid_cloud_migration</span>
                                </div>
                                <div className="text-slate-400 mt-2 pl-3 border-l-2 border-amber-500/30 space-y-0.5 text-[11px] sm:text-xs">
                                    <div className="text-blue-400"># module.hybrid_cloud_migration.aws_instance.app_workload will be modernized</div>
                                    <div>+ resource "aws_ecs_cluster" "enterprise_modernized" &#123;</div>
                                    <div className="pl-3 sm:pl-4 text-emerald-400">+ container_insights = "enabled"</div>
                                    <div className="pl-3 sm:pl-4 text-emerald-400">+ workload_type      = "hybrid_cloud_migrated"</div>
                                    <div>&#125;</div>
                                    <div className="text-emerald-300 font-semibold mt-1">Plan: 4 to add, 0 to change, 0 to destroy. (Zero drift detected)</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
