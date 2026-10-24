import React, { useState } from 'react';
import { 
    Briefcase, Calendar, MapPin, CheckCircle2, Building2, 
    Sparkles, ArrowUpRight, Terminal, Shield, ChevronRight, Layers
} from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const experiences = [
    {
        company: "IBM",
        role: "Cloud Migration Specialist",
        period: "June 2026 – Present",
        location: "Bangalore Urban, Karnataka, India",
        type: "Hybrid Cloud Application Migration",
        tag: "Current Role",
        tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/40",
        brandColor: "from-blue-600 to-indigo-600",
        summary: "Leading enterprise application migrations across complex hybrid cloud environments, replatforming legacy enterprise workloads into resilient, containerized cloud-native platforms.",
        pillars: [
            {
                title: "Application Migration & Modernization",
                desc: "Executing hybrid cloud transitions using AWS Transform, replatforming monolithic applications into containerized microservices orchestrated on Red Hat OpenShift and Kubernetes."
            },
            {
                title: "Infrastructure as Code & Automation",
                desc: "Standardizing IaC pipelines using Terraform and Ansible to provision, configure, and maintain multi-tier hybrid infrastructure with zero configuration drift."
            },
            {
                title: "Enterprise Runtime & Data Layers",
                desc: "Managing high-throughput Linux runtimes, WebSphere/Tomcat application servers, and hybrid database interconnects across IBM DB2 and MongoDB."
            },
            {
                title: "APM Telemetry & Seamless Cutover",
                desc: "Configuring end-to-end observability, telemetry baselines, and synthetic transaction monitoring to guarantee zero-downtime cutovers and SLA adherence."
            }
        ],
        skills: [
            "Hybrid Cloud App Migration", "AWS Transform", "Terraform (IaC)", "Ansible",
            "Red Hat OpenShift", "Kubernetes", "Docker", "Linux Administration",
            "App Modernization", "IBM DB2", "MongoDB", "APM Observability"
        ],
        featured: true
    },
    {
        company: "AIRMAN Aeronautics",
        role: "Full Stack Engineer Intern",
        period: "March 2026 – May 2026 (3 months)",
        location: "Chennai, Tamil Nadu, India",
        type: "Aviation & Mission-Critical Systems",
        tag: "Aviation Platforms",
        tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/40",
        brandColor: "from-emerald-600 to-teal-600",
        summary: "Engineered production aviation intelligence modules and real-time messaging backends for pilots and flight training organizations.",
        pillars: [
            {
                title: "TOGA Aviation Intelligence (Play Store Live)",
                desc: "Owned and shipped the Community and User Profile modules on TOGA, an AI-powered Flutter aviation intelligence app actively serving flight schools and pilots."
            },
            {
                title: "Skynet Dispatch & Roster Operations",
                desc: "Architected Skynet's Dispatch and Roster modules featuring strict state-machine workflows, regulatory compliance checks, and immutable mutation audit logs."
            },
            {
                title: "Real-Time WebSocket Engine",
                desc: "Built a persistent, low-latency WebSocket messaging system supporting direct, group, and channel communication with server-side Role-Based Access Control (RBAC)."
            },
            {
                title: "High-Performance Backend",
                desc: "Engineered FastAPI + PostgreSQL backend with multi-tenant isolation, database query optimization, AWS S3 asset pipelines, and EC2 deployment."
            }
        ],
        skills: [
            "FastAPI", "Python", "WebSockets", "Flutter", 
            "PostgreSQL", "AWS EC2 & S3", "State Machines", "RBAC"
        ],
        featured: false
    },
    {
        company: "Infinit Solutions",
        role: "Software Development Intern",
        period: "November 2025 – November 2025 (1 month)",
        location: "Coimbatore, Tamil Nadu, India",
        type: "Enterprise Asset Systems",
        tag: "Enterprise Systems",
        tagColor: "bg-purple-500/10 text-purple-300 border-purple-500/40",
        brandColor: "from-purple-600 to-indigo-600",
        summary: "Optimized enterprise resource tracking and internal inventory data workflows.",
        pillars: [
            {
                title: "Asset Management Architecture",
                desc: "Maintained and enhanced core enterprise asset tracking modules built on ASP.NET Core and C# Razor Pages."
            },
            {
                title: "Performance Optimization",
                desc: "Resolved latency bottlenecks in database querying, boosting internal resource reconciliation speeds."
            }
        ],
        skills: ["ASP.NET Core", "C#", "Razor Pages", "System Reliability"],
        featured: false
    },
    {
        company: "Neuronest AI Pvt Ltd",
        role: "Full Stack Developer Intern",
        period: "August 2025 – August 2025 (1 month)",
        location: "Coimbatore, Tamil Nadu, India",
        type: "AI & SaaS Solutions",
        tag: "SaaS Workflow",
        tagColor: "bg-amber-500/10 text-amber-300 border-amber-500/40",
        brandColor: "from-amber-600 to-orange-600",
        summary: "Architected modular project management workflows and dynamic performance dashboards.",
        pillars: [
            {
                title: "End-to-End MERN Stack Architecture",
                desc: "Architected and implemented project management modules from ground zero utilizing React, Node.js, and Express.js."
            },
            {
                title: "Operational Analytics",
                desc: "Built interactive dashboard data visualizations to accelerate sprint planning and resource forecasting."
            }
        ],
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Data Visualization"],
        featured: false
    },
    {
        company: "Tarcin Robotic LLP",
        role: "Software Engineering Intern",
        period: "July 2023 – September 2023 (3 months)",
        location: "Madurai, Tamil Nadu, India",
        type: "Robotics & Hardware Systems",
        tag: "Embedded Systems",
        tagColor: "bg-slate-500/10 text-slate-300 border-slate-500/40",
        brandColor: "from-slate-600 to-slate-800",
        summary: "Configured Linux server deployments and integrated interactive microcontroller interfaces.",
        pillars: [
            {
                title: "Linux Server Operations",
                desc: "Managed application deployments and web server configurations on Linux environments."
            },
            {
                title: "Embedded Web Interface",
                desc: "Developed frontend interfaces for Arduino hardware applications and designed technical user documentation."
            }
        ],
        skills: ["Linux Server Deployment", "HTML/CSS/JS", "Arduino", "Figma", "UI/UX"],
        featured: false
    }
];

const Experience = () => {
    const [selectedExp, setSelectedExp] = useState(0);

    return (
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white z-10" id="experienceid">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-xl laser-highlight">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        <span>Professional Trajectory</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Engineering <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
                        Track record of enterprise hybrid cloud application migrations at <strong className="text-white">IBM</strong> and mission-critical aviation platforms at <strong className="text-white">AIRMAN</strong>.
                    </p>
                </div>

                {/* Modern Interactive Experience Timeline */}
                <div className="space-y-6 sm:space-y-8">
                    {experiences.map((exp, index) => {
                        const isIBM = exp.company === "IBM";
                        const isAirman = exp.company === "AIRMAN Aeronautics";
                        return (
                            <SpotlightCard
                                key={index}
                                spotlightColor={
                                    isIBM 
                                        ? "rgba(59, 130, 246, 0.18)" 
                                        : isAirman 
                                        ? "rgba(16, 185, 129, 0.16)" 
                                        : "rgba(168, 85, 247, 0.14)"
                                }
                                glowVariant={
                                    isIBM 
                                        ? "card-glow-blue" 
                                        : isAirman 
                                        ? "card-glow-emerald" 
                                        : "card-glow-purple"
                                }
                                className={`rounded-3xl p-4 sm:p-8 backdrop-blur-2xl laser-highlight ${
                                    isIBM 
                                        ? 'bg-slate-900/70 border-2 border-blue-500/40 shadow-[0_0_40px_rgba(15,98,254,0.18)] ring-1 ring-blue-500/20' 
                                        : 'bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 shadow-xl'
                                }`}
                            >
                                {/* Glow Accent for IBM */}
                                {isIBM && (
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
                                )}

                                {/* Header Info Bar */}
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-800/80">
                                    <div className="space-y-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                                                {exp.company}
                                                {isIBM && (
                                                    <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 font-mono font-medium">
                                                        Leader
                                                    </span>
                                                )}
                                            </span>
                                            <span className={`text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full font-mono border ${exp.tagColor}`}>
                                                {exp.tag}
                                            </span>
                                        </div>

                                        <div className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
                                            {exp.role}
                                        </div>

                                        <div className="text-xs sm:text-sm font-medium text-slate-400">
                                            {exp.type}
                                        </div>
                                    </div>

                                    {/* Date & Location Badges */}
                                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400">
                                        <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-800">
                                            <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-400" />
                                            <span className="text-slate-200">{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-slate-800">
                                            <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-400" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Summary */}
                                <p className="mt-4 sm:mt-5 text-slate-200 text-xs sm:text-base leading-relaxed">
                                    {exp.summary}
                                </p>

                                {/* Architectural Pillars / Highlights */}
                                <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
                                    {exp.pillars.map((pillar, pIdx) => (
                                        <div 
                                            key={pIdx}
                                            className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-start group-hover:border-slate-700"
                                        >
                                            <div className="flex items-start gap-2 mb-1">
                                                <span className="mt-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 shrink-0"></span>
                                                <span className="font-semibold text-xs sm:text-sm text-white">{pillar.title}</span>
                                            </div>
                                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-3.5">
                                                {pillar.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Skills Grid */}
                                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 sm:gap-2">
                                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
                                        <Terminal className="w-3.5 h-3.5 text-blue-400" />
                                        Stack:
                                    </span>
                                    {exp.skills.map((skill, sIdx) => (
                                        <span 
                                            key={sIdx}
                                            className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl text-[11px] sm:text-xs font-mono font-medium backdrop-blur-md transition ${
                                                isIBM 
                                                    ? 'bg-blue-950/40 text-blue-200 border border-blue-500/30 hover:border-blue-400' 
                                                    : 'bg-slate-950/60 text-slate-300 border border-slate-800 hover:border-slate-600'
                                            }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
