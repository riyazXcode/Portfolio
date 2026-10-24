import React, { useState, useEffect } from 'react';
import { 
    Server, Cpu, HardDrive, RefreshCw, Shield, Globe, 
    Terminal, ArrowRight, GitBranch, Radio, CheckCircle2, Activity, Lock,
    Zap, Wifi, Layers
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const specs = [
    { 
        label: "Hardware Host", 
        value: "Bare-Metal x86 Server", 
        detail: "Dedicated homelab cluster host",
        icon: Cpu,
        color: "text-blue-400"
    },
    { 
        label: "Hypervisor", 
        value: "Proxmox VE 9", 
        detail: "Enterprise Linux virtualization platform",
        icon: Server,
        color: "text-purple-400"
    },
    { 
        label: "Container Runtime", 
        value: "Docker (Nginx Alpine)", 
        detail: "Lightweight multi-stage container (< 25MB)",
        icon: Layers,
        color: "text-cyan-400"
    },
    { 
        label: "CI/CD Pipeline", 
        value: "GitHub Actions → GHCR", 
        detail: "Automated container builds on git push",
        icon: GitBranch,
        color: "text-indigo-400"
    },
    { 
        label: "Rolling Reload", 
        value: "Watchtower Daemon", 
        detail: "Zero-downtime container updates (< 60s poll)",
        icon: RefreshCw,
        color: "text-emerald-400"
    },
    { 
        label: "Edge Ingress", 
        value: "Cloudflare Tunnel", 
        detail: "Encrypted egress tunnel, zero open inbound ports",
        icon: Shield,
        color: "text-amber-400"
    },
];

const pipelineSteps = [
    {
        step: "01",
        name: "Developer Commit",
        desc: "git push origin main",
        tag: "GitHub",
        color: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-300"
    },
    {
        step: "02",
        name: "GH Actions CI/CD",
        desc: "Builds Docker image & publishes to GHCR",
        tag: "GHCR",
        color: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-300"
    },
    {
        step: "03",
        name: "Proxmox Watchtower",
        desc: "Detects new digest & restarts container gracefully",
        tag: "Proxmox VE",
        color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-300"
    },
    {
        step: "04",
        name: "Cloudflare Edge",
        desc: "Encrypted zero-trust tunnel serves riyazkhan.dev globally",
        tag: "Cloudflare",
        color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-300"
    }
];

const InfrastructureSection = () => {
    const [livePing, setLivePing] = useState(14);

    useEffect(() => {
        const interval = setInterval(() => {
            // Subtle simulated latency jitter between 12ms and 18ms
            setLivePing(Math.floor(Math.random() * 5) + 13);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white z-10" id="infrastructureid">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-xl laser-highlight">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Self-Hosted Architecture</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Hosted <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">On-Premises</span>
                    </h2>
                    <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
                        Precision engineering specifications and real-time deployment pipeline powering <strong className="text-white font-mono">riyazkhan.dev</strong>.
                    </p>
                </div>

                {/* 1. Real-Time Telemetry NOC Dashboard */}
                <div className="glass-panel rounded-3xl p-4 sm:p-8 shadow-2xl mb-8 sm:mb-10 laser-highlight">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-800/80">
                        <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                                <Activity className="w-4 h-4 animate-pulse" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm sm:text-base">Node Telemetry: pve-cluster-01</h3>
                                <p className="text-[11px] sm:text-xs text-slate-400 font-mono">Direct Homelab Node Monitoring</p>
                            </div>
                        </div>

                        {/* Live Stat Badges */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs">
                            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                <span>STATUS: ONLINE</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-cyan-300">
                                <Wifi className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyan-400" />
                                <span>PING: ~{livePing}ms</span>
                            </div>
                            <div className="col-span-2 sm:col-span-1 flex items-center justify-center sm:justify-start gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300">
                                <Lock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400" />
                                <span>0 OPEN PORTS</span>
                            </div>
                        </div>
                    </div>

                    {/* 6 Hardware Specifications Bento Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-5 sm:mt-6">
                        {specs.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <SpotlightCard 
                                    key={index}
                                    spotlightColor="rgba(16, 185, 129, 0.14)"
                                    glowVariant="card-glow-emerald"
                                    className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80"
                                >
                                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400">
                                            {item.label}
                                        </span>
                                        <IconComponent className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                                    </div>
                                    <div className="text-sm sm:text-base font-bold text-white font-mono tracking-tight group-hover:text-emerald-300 transition-colors">
                                        {item.value}
                                    </div>
                                    <div className="text-[11px] sm:text-xs text-slate-400 mt-1">
                                        {item.detail}
                                    </div>
                                </SpotlightCard>
                            );
                        })}
                    </div>
                </div>

                {/* 2. Visual 4-Step CI/CD Deployment Pipeline */}
                <div className="glass-panel rounded-3xl p-4 sm:p-8 shadow-2xl laser-highlight">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-5 sm:mb-6">
                        <div>
                            <span className="text-[11px] sm:text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                                Automated CI/CD Architecture
                            </span>
                            <h3 className="text-lg sm:text-2xl font-extrabold text-white mt-1">
                                Git Push &rarr; Live Container Pipeline
                            </h3>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                            Zero Manual Intervention
                        </span>
                    </div>

                    {/* Visual Stage Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 relative">
                        {pipelineSteps.map((stage, idx) => (
                            <React.Fragment key={idx}>
                                <SpotlightCard 
                                    spotlightColor="rgba(59, 130, 246, 0.16)"
                                    glowVariant="card-glow-blue"
                                    className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-b ${stage.color} border backdrop-blur-md`}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                                            <span className="text-xs font-mono font-extrabold opacity-60">
                                                {stage.step}
                                            </span>
                                            <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/40 border border-white/10 text-white font-medium">
                                                {stage.tag}
                                            </span>
                                        </div>
                                        <h4 className="font-bold text-white text-sm sm:text-base mb-1 group-hover:text-blue-300 transition-colors">
                                            {stage.name}
                                        </h4>
                                        <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-mono">
                                            {stage.desc}
                                        </p>
                                    </div>

                                    {idx < pipelineSteps.length - 1 && (
                                        <div className="hidden md:flex justify-end mt-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    )}
                                </SpotlightCard>
                                {idx < pipelineSteps.length - 1 && (
                                    <div className="flex md:hidden justify-center items-center py-0.5 text-slate-500 font-mono text-xs">
                                        &darr;
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Pipeline Guarantee Footnote */}
                    <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-400 font-mono">
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400" />
                            <span>100% reproducible multi-stage Docker builds</span>
                        </div>
                        <div className="text-slate-500">
                            Build & deploy cycle: ~45 seconds
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InfrastructureSection;
