import React, { useState } from 'react';
import { 
    Cloud, Server, Container, Terminal, Database, 
    Code2, Cpu, Wrench, Shield, CheckCircle2, Sparkles, Filter
} from 'lucide-react';

const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'cloud', name: 'Cloud & IaC' },
    { id: 'containers', name: 'Containers & Linux' },
    { id: 'backend', name: 'Backend & Systems' },
    { id: 'ai', name: 'AI & Platforms' }
];

const skillGroups = [
    {
        category: 'cloud',
        title: 'Cloud, IaC & Hybrid Migration',
        icon: Cloud,
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
        skills: [
            { name: 'Hybrid Cloud App Migration', tag: 'AWS Transform, OpenShift, Modernization', highlight: true },
            { name: 'Amazon Web Services (AWS)', tag: 'EC2, S3, IAM, Transform', highlight: false },
            { name: 'Terraform (IaC)', tag: 'HashiCorp Certified Associate 2026', highlight: true },
            { name: 'Ansible', tag: 'Configuration Management & Zero Drift', highlight: false },
            { name: 'Proxmox VE 8', tag: 'Bare-Metal KVM / LXC Virtualization', highlight: true },
            { name: 'Cloudflare Zero Trust', tag: 'DNS, Encrypted Tunnels, Edge SSL', highlight: false },
        ]
    },
    {
        category: 'containers',
        title: 'Containers & Enterprise Orchestration',
        icon: Container,
        color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
        skills: [
            { name: 'Docker Engine & Compose', tag: 'Multi-stage Builds, Lean Alpine Images', highlight: false },
            { name: 'Kubernetes (K8s)', tag: 'Deployments, Services, ConfigMaps', highlight: false },
            { name: 'Red Hat OpenShift', tag: 'Enterprise Hybrid Cloud Container Platform', highlight: true },
            { name: 'Linux Administration', tag: 'RHEL, Ubuntu, Systemd, Hardening', highlight: true },
            { name: 'Enterprise App Servers', tag: 'IBM WebSphere, Apache Tomcat, IHS', highlight: false },
            { name: 'NGINX', tag: 'Reverse Proxy, Load Balancing, Caching', highlight: false },
        ]
    },
    {
        category: 'backend',
        title: 'Backend, DevOps & Telemetry',
        icon: Code2,
        color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
        skills: [
            { name: 'Python & FastAPI', tag: 'High-Throughput Async REST APIs, RBAC', highlight: true },
            { name: 'WebSockets Engine', tag: 'Persistent Real-Time Bi-Directional Messaging', highlight: true },
            { name: 'GitHub Actions CI/CD', tag: 'Automated Multi-Arch GHCR Builds', highlight: true },
            { name: 'Jenkins CI/CD', tag: 'Automated Build & Test Pipelines', highlight: false },
            { name: 'Node.js & Express.js', tag: 'Microservices & Middleware Architecture', highlight: false },
            { name: 'ASP.NET Core (C#)', tag: 'Enterprise Asset Management & Razor Pages', highlight: false },
            { name: 'APM Observability', tag: 'Telemetry, Latency Baselines, Synthetic Audits', highlight: false },
        ]
    },
    {
        category: 'backend',
        title: 'Databases & Storage Architecture',
        icon: Database,
        color: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
        skills: [
            { name: 'PostgreSQL', tag: 'Multi-Tenant Relational Isolation, Query Tuning', highlight: true },
            { name: 'MongoDB', tag: 'Document Store, Indexing, Aggregations', highlight: false },
            { name: 'IBM DB2', tag: 'Enterprise Relational Systems & Workload Modernization', highlight: true },
            { name: 'AWS S3', tag: 'Scalable Cloud Object Storage Pipelines', highlight: false },
        ]
    },
    {
        category: 'ai',
        title: 'AI Tooling, Mobile & Frontend',
        icon: Cpu,
        color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
        skills: [
            { name: 'Anthropic Claude AI', tag: 'Certified Developer - Foundations (Anthropic)', highlight: true },
            { name: 'TensorFlow.js', tag: 'In-Browser 21-Keypoint 3D Hand Tracking', highlight: true },
            { name: 'Flutter & Dart', tag: 'Production Mobile Engineering (TOGA Play Store)', highlight: true },
            { name: 'React.js & Tailwind CSS', tag: 'Modern Component Systems & Responsive UI', highlight: false },
        ]
    }
];

const Skills = () => {
    const [selectedTab, setSelectedTab] = useState('all');

    const filteredGroups = selectedTab === 'all' 
        ? skillGroups 
        : skillGroups.filter(g => g.category === selectedTab);

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white z-10" id="skillsid">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-xl laser-highlight">
                        <Terminal className="w-4 h-4 text-blue-400" />
                        <span>Technical Arsenal</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Core <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Competencies</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Enterprise hybrid cloud application migration tooling, infrastructure as code, container runtimes, and full-stack systems engineering.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedTab(cat.id)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer backdrop-blur-md ${
                                    selectedTab === cat.id
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400 font-semibold'
                                        : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skill Groups Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredGroups.map((group, gIdx) => {
                        const IconComponent = group.icon;
                        return (
                            <div 
                                key={gIdx}
                                className="glass-panel rounded-3xl p-6 sm:p-7 shadow-xl laser-highlight"
                            >
                                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-800/80">
                                    <div className={`p-2.5 rounded-xl border ${group.color}`}>
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-extrabold text-lg text-white tracking-tight">
                                        {group.title}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {group.skills.map((skill, sIdx) => (
                                        <div 
                                            key={sIdx}
                                            className={`p-3.5 rounded-2xl transition-all border ${
                                                skill.highlight 
                                                    ? 'bg-blue-950/20 border-blue-500/30 hover:border-blue-500/60' 
                                                    : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                                            }`}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-bold text-sm text-white flex items-center gap-2">
                                                    {skill.highlight && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                                    )}
                                                    {skill.name}
                                                </span>
                                                {skill.highlight && (
                                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                                        Specialized
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-xs text-slate-400 font-mono">
                                                {skill.tag}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Skills;
