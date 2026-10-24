import React from 'react';
import { CloudCog, Server, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

const capabilities = [
    {
        id: "01",
        title: "Hybrid Cloud Application Migration & Modernization",
        icon: Server,
        color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
        description: "Specializing in transitioning enterprise applications into hybrid cloud environments at IBM. Replatforming legacy monolithic workloads to containerized architectures (Kubernetes, Red Hat OpenShift, AWS Transform) while guaranteeing high-availability operations and zero-downtime cutovers.",
        points: [
            "Enterprise application migration & containerization (Docker, K8s, OpenShift)",
            "AWS Transform workload assessments and cloud replatforming",
            "Application runtime administration, Linux dependencies & security hardening",
            "APM observability baselining and post-migration synthetic cutover validation"
        ]
    },
    {
        id: "02",
        title: "Automated Cloud-Native Infrastructure & IaC",
        icon: CloudCog,
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        description: "Architecting and provisioning deterministic, zero-drift production infrastructure across AWS and hybrid environments with Terraform and Ansible. Eliminating manual configuration errors through immutable Infrastructure as Code.",
        points: [
            "Modular, reusable Terraform modules & automated state locking",
            "Continuous configuration management & host orchestration with Ansible",
            "Multi-stage Docker containerization & Kubernetes manifests",
            "Enterprise cloud networking: VPCs, IAM least-privilege, and Cloudflare Tunnels"
        ]
    },
    {
        id: "03",
        title: "Full-Stack Systems & Real-Time API Engineering",
        icon: Layers,
        color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
        description: "Infusing deep software engineering discipline directly into cloud infrastructure. Building resilient asynchronous microservices, state-machine-driven compliance workflows, and low-latency real-time messaging engines.",
        points: [
            "High-throughput asynchronous microservices with Python & FastAPI",
            "Persistent real-time bi-directional messaging with WebSockets & server-side RBAC",
            "Relational & document database modeling (PostgreSQL, MongoDB, IBM DB2)",
            "Cross-platform Flutter mobile architecture (shipped TOGA on Play Store)"
        ]
    },
    {
        id: "04",
        title: "AI-Augmented CloudOps & Intelligent Tooling",
        icon: Cpu,
        color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
        description: "Applying advanced AI engineering and operational tool-calling as a Claude Certified Developer (Anthropic). Designing intelligent automation agents, runbook analyzers, and computer vision models.",
        points: [
            "Anthropic Claude API integration, prompt engineering & tool orchestration",
            "Automated incident analysis and intelligent operational telemetry summarization",
            "Edge computer vision with TensorFlow.js (95% 3D hand tracking accuracy)",
            "Modern developer productivity toolchains & automated CI/CD release loops"
        ]
    }
];

const Services = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white z-10" id="servicesid">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-xl laser-highlight">
                        <CloudCog className="w-4 h-4 text-blue-400" />
                        <span>Core Capabilities</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        What I Bring to the <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Table</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Enterprise hybrid cloud application migration expertise, automated infrastructure as code, and production full-stack engineering depth.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap) => {
                        const Icon = cap.icon;
                        return (
                            <div 
                                key={cap.id}
                                className="glass-panel rounded-3xl p-7 sm:p-8 shadow-xl flex flex-col justify-between laser-highlight transition-all duration-300 group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className={`p-3 rounded-2xl border ${cap.color} group-hover:scale-105 transition-transform duration-300`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-2xl font-black text-slate-700 font-mono group-hover:text-slate-500 transition-colors">
                                            {cap.id}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-blue-300 transition-colors">
                                        {cap.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                                        {cap.description}
                                    </p>

                                    {/* Points */}
                                    <div className="space-y-2.5">
                                        {cap.points.map((pt, pIdx) => (
                                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                                <span>{pt}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
