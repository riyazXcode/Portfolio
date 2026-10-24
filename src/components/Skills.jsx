import React from 'react';
import { Cloud, Server, Container, Terminal, Database, Code2, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
    {
        id: 'cloud',
        title: 'Cloud, IaC & Hybrid Migration',
        icon: Cloud,
        color: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
        skills: [
            { name: 'Hybrid Cloud App Migration', tag: 'AWS Transform, OpenShift, Modernization' },
            { name: 'Amazon Web Services (AWS)', tag: 'EC2, S3, IAM, Transform' },
            { name: 'Terraform (IaC)', tag: 'Certified Associate 2026' },
            { name: 'Ansible', tag: 'Configuration Management & Automation' },
            { name: 'Proxmox VE', tag: 'Bare-Metal Virtualization' },
            { name: 'Cloudflare', tag: 'DNS, Tunnel, Edge SSL' },
        ]
    },
    {
        id: 'containers',
        title: 'Containers & Orchestration',
        icon: Container,
        color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
        skills: [
            { name: 'Docker', tag: 'Multi-stage Builds, Compose' },
            { name: 'Kubernetes (K8s)', tag: 'Deployments, Services' },
            { name: 'Red Hat OpenShift', tag: 'Enterprise Container Platform' },
        ]
    },
    {
        id: 'os-middleware',
        title: 'Linux & Application Operations',
        icon: Server,
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
        skills: [
            { name: 'Linux Administration', tag: 'Troubleshooting, Systemd, Security' },
            { name: 'Enterprise App Servers', tag: 'WebSphere, Apache Tomcat, IHS' },
            { name: 'NGINX', tag: 'Reverse Proxy, SSL, Caching' },
        ]
    },
    {
        id: 'cicd-obs',
        title: 'DevOps, CI/CD & Observability',
        icon: Wrench,
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
        skills: [
            { name: 'GitHub Actions', tag: 'Complete Guide Certified' },
            { name: 'Jenkins', tag: 'Automated Build Pipelines' },
            { name: 'Git & GitHub', tag: 'Version Control, PR Workflows' },
            { name: 'APM & Telemetry', tag: 'Observability & Monitoring' },
        ]
    },
    {
        id: 'backend',
        title: 'Backend & Systems Engineering',
        icon: Code2,
        color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
        skills: [
            { name: 'Python & FastAPI', tag: 'Scalable Microservices, RBAC' },
            { name: 'WebSockets', tag: 'Real-time Messaging Engine' },
            { name: 'Node.js & Express.js', tag: 'RESTful API Engineering' },
            { name: 'ASP.NET Core (C#)', tag: 'Enterprise Applications' },
        ]
    },
    {
        id: 'databases',
        title: 'Databases & Storage',
        icon: Database,
        color: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
        skills: [
            { name: 'PostgreSQL', tag: 'Relational, Multi-Tenant, Query Tuning' },
            { name: 'MongoDB', tag: 'NoSQL Document Store' },
            { name: 'IBM DB2', tag: 'Enterprise Relational DB' },
            { name: 'AWS S3', tag: 'Cloud Object Storage' },
        ]
    },
    {
        id: 'ai-frontend',
        title: 'AI Tooling, Mobile & Frontend',
        icon: Cpu,
        color: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
        skills: [
            { name: 'Anthropic Claude', tag: 'Certified Developer - Foundations' },
            { name: 'TensorFlow.js', tag: 'Keypoint Detection & ML' },
            { name: 'Flutter', tag: 'Cross-Platform Mobile (TOGA)' },
            { name: 'React.js & Tailwind CSS', tag: 'Modern Frontend Architecture' },
        ]
    }
];

const Skills = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white z-10" id="skillsid">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-md">
                        <Terminal className="w-4 h-4 text-blue-400" />
                        <span>Core Competencies</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Technical <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Arsenal</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Hybrid cloud migration, infrastructure automation, container orchestration, and backend systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <div 
                                key={cat.id} 
                                className="bg-slate-900/60 rounded-3xl p-6 sm:p-7 border border-slate-800 hover:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group"
                            >
                                <div>
                                    <div className="flex items-center gap-3.5 mb-4">
                                        <div className={`p-3 rounded-2xl border ${cat.color} group-hover:scale-105 transition-transform duration-300`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-white text-lg leading-snug">
                                            {cat.title}
                                        </h3>
                                    </div>

                                    <ul className="space-y-3 mt-2">
                                        {cat.skills.map((skill, sIdx) => (
                                            <li key={sIdx} className="flex flex-col border-b border-slate-800/80 pb-2.5 last:border-b-0 last:pb-0">
                                                <span className="font-semibold text-slate-200 text-sm">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs text-slate-400 font-mono mt-0.5">
                                                    {skill.tag}
                                                </span>
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

export default Skills;
