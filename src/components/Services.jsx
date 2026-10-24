import React from 'react';
import { CloudCog, Server, Cpu, Layers, CheckCircle2 } from 'lucide-react';

const capabilities = [
    {
        id: "01",
        title: "Automated Cloud-Native Infrastructure & IaC",
        icon: CloudCog,
        color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
        description: "Designing and deploying production infrastructure with zero manual drift using Terraform, Ansible, and AWS. Containerizing workloads with Docker, Kubernetes, and Red Hat OpenShift for deterministic, self-healing deployments.",
        points: [
            "Modular, reusable Terraform modules & automated state management",
            "Continuous provisioning & configuration management with Ansible",
            "Multi-stage Docker containerization & Kubernetes manifests",
            "Cloud architecture on AWS (EC2, S3, IAM, VPC, AWS Transform)"
        ]
    },
    {
        id: "02",
        title: "Hybrid Cloud Application Migration & SRE",
        icon: Server,
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        description: "Migrating and modernizing enterprise applications into hybrid cloud environments. Replatforming workloads to containerized architectures (Kubernetes, OpenShift, AWS) while ensuring zero downtime and high availability.",
        points: [
            "Enterprise application migration & containerization (Docker, K8s, OpenShift)",
            "Automated cloud provisioning and zero-drift IaC with Terraform & Ansible",
            "Application runtime administration, Linux dependencies & security hardening",
            "End-to-end application telemetry, APM observability & post-migration cutover"
        ]
    },
    {
        id: "03",
        title: "Full-Stack Systems & Real-Time API Engineering",
        icon: Layers,
        color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
        description: "Bringing deep software development discipline to infrastructure. Architecting resilient APIs, multi-tenant databases, and low-latency real-time systems that integrate seamlessly with cloud platforms.",
        points: [
            "High-performance RESTful microservices with Python & FastAPI",
            "Low-latency real-time messaging with WebSockets & server-side RBAC",
            "Relational & document database modeling (PostgreSQL, MongoDB, DB2)",
            "End-to-end full-stack systems using MERN and cross-platform Flutter"
        ]
    },
    {
        id: "04",
        title: "AI-Augmented CloudOps & Intelligent Tooling",
        icon: Cpu,
        color: "text-purple-400 bg-purple-500/10 border-purple-500/30",
        description: "Applying cutting-edge AI capabilities to infrastructure and developer workflows as a Claude Certified Developer. Building automation scripts and intelligent telemetry analyzers.",
        points: [
            "Anthropic Claude API integration & automated workflow orchestration",
            "LLM-assisted incident analysis and operational runbook generation",
            "AI-powered computer vision & edge integrations (TensorFlow.js)",
            "Developer productivity toolchains and modern CLI automation"
        ]
    }
];

const Services = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white z-10" id="servicesid">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-md">
                        <CloudCog className="w-4 h-4 text-blue-400" />
                        <span>Core Capabilities</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        What I Bring to the <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Table</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Enterprise hybrid cloud application migration, infrastructure automation, and software engineering depth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap) => {
                        const Icon = cap.icon;
                        return (
                            <div 
                                key={cap.id}
                                className="bg-slate-900/60 rounded-3xl p-7 sm:p-8 border border-slate-800 hover:border-slate-700 shadow-xl hover:shadow-[0_0_30px_rgba(20,101,255,0.12)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-2xl border ${cap.color} group-hover:scale-105 transition-transform duration-300`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-2xl font-black text-slate-800 font-mono group-hover:text-slate-700 transition-colors">
                                            {cap.id}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {cap.title}
                                    </h3>

                                    <p className="text-sm text-slate-300 leading-relaxed mb-5">
                                        {cap.description}
                                    </p>

                                    <ul className="space-y-2.5">
                                        {cap.points.map((pt, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                                                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
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
