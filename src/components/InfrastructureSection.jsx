import React from 'react';
import { 
    Server, Cpu, HardDrive, RefreshCw, Shield, Globe, 
    Terminal, ArrowRight, GitBranch, Radio, CheckCircle, Activity, Lock
} from 'lucide-react';

const specs = [
    { label: "Hardware Host", value: "Bare-Metal x86 Server", note: "Homelab cluster node" },
    { label: "Hypervisor", value: "Proxmox VE 8", note: "Dedicated resource allocation" },
    { label: "Runtime", value: "Docker (Nginx Alpine)", note: "Lean multi-stage container (~25MB)" },
    { label: "CI/CD Pipeline", value: "GitHub Actions → GHCR", note: "Automated container builds" },
    { label: "Auto-Reload", value: "Watchtower Daemon", note: "Zero-downtime rolling reload (<60s)" },
    { label: "Edge & SSL", value: "Cloudflare Tunnel", note: "Zero open router ports, DDoS protected" },
];

const stages = [
    {
        num: "01",
        name: "Git Push",
        desc: "Commit pushed to main triggers GitHub Actions.",
        tech: "GitHub Actions",
        icon: GitBranch,
        color: "text-blue-400 bg-blue-500/10 border-blue-500/30"
    },
    {
        num: "02",
        name: "Image Build",
        desc: "Compiles Parcel bundle and publishes to GHCR.",
        tech: "GHCR / Docker",
        icon: RefreshCw,
        color: "text-purple-400 bg-purple-500/10 border-purple-500/30"
    },
    {
        num: "03",
        name: "Proxmox Reload",
        desc: "Watchtower detects digest and restarts container.",
        tech: "Proxmox VE + Watchtower",
        icon: Server,
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
    },
    {
        num: "04",
        name: "Cloudflare Edge",
        desc: "Encrypted Cloudflare Tunnel serves domain globally.",
        tech: "Cloudflare Tunnel",
        icon: Shield,
        color: "text-amber-400 bg-amber-500/10 border-amber-500/30"
    }
];

const InfrastructureSection = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white z-10" id="infrastructureid">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Homelab Infrastructure</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Hosted <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">On-Premises</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Technical specifications and deployment architecture behind <strong className="text-white font-mono">riyazkhan.dev</strong>.
                    </p>
                </div>

                {/* 1. Technical Specs Sheet (Precise Facts) */}
                <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl backdrop-blur-xl mb-8">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-emerald-400" />
                            <span className="text-slate-300 font-bold uppercase tracking-wider">System Specifications</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-400">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>STATUS: OPERATIONAL</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
                        {specs.map((item, index) => (
                            <div key={index} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-1">
                                    {item.label}
                                </div>
                                <div className="text-sm sm:text-base font-bold text-white font-mono">
                                    {item.value}
                                </div>
                                <div className="text-[11px] text-slate-500 mt-0.5">
                                    {item.note}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Precise 4-Step Pipeline Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stages.map((stage) => {
                        const Icon = stage.icon;
                        return (
                            <div 
                                key={stage.num}
                                className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition duration-300 flex flex-col justify-between backdrop-blur-md"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className={`p-2.5 rounded-xl border ${stage.color}`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-slate-500">
                                            0{stage.num}
                                        </span>
                                    </div>

                                    <h4 className="text-base font-bold text-white mb-1.5">
                                        {stage.name}
                                    </h4>

                                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                                        {stage.desc}
                                    </p>
                                </div>

                                <div className="pt-2.5 border-t border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                                    <span className="text-slate-500">Stack:</span>
                                    <span>{stage.tech}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InfrastructureSection;
