import React from "react";
import LINKS from '../assets/links';
import { ExternalLink, Github, Layers, CheckCircle2, Lock, Sparkles, Smartphone, Play, Code2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const projects = [
    {
        title: "TOGA & Skynet — Aviation Intelligence & Operations",
        category: "Mission-Critical Aviation & Real-Time Systems",
        origin: "AIRMAN Aeronautics",
        badge: "Live on Play Store",
        badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
        demoLink: LINKS.togaAppPlayStore,
        demoText: "View on Play Store",
        codeLink: null, // Proprietary IP - under NDA
        isProprietary: true,
        featured: true,
        features: [
            "Owned and shipped the Community Module and User Profile Module on TOGA — an AI-powered Flutter aviation intelligence app live on Google Play Store serving pilots and flight schools.",
            "Architected Skynet Dispatch & Roster modules with strict state-machine workflows, aviation compliance validation, and immutable audit logging on every state transition.",
            "Engineered low-latency persistent real-time messaging engine with WebSockets, supporting direct, group, and channel communication with server-side RBAC.",
            "Architected scalable FastAPI + PostgreSQL backend with multi-tenant data isolation, query tuning, AWS S3 media asset storage, and EC2 deployment."
        ],
        techStack: ["FastAPI", "Python", "WebSockets", "Flutter", "PostgreSQL", "AWS EC2", "AWS S3", "Docker", "State Machines"]
    },
    {
        title: "Gradiator — Student Utility & Academic Platform",
        category: "Cloud-Native Containerized Application",
        origin: "Production Platform",
        badge: "CI/CD Pipeline",
        badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
        demoLink: LINKS.gradiatorDemo,
        demoText: "Live Demo",
        codeLink: LINKS.gradiatorLink,
        isProprietary: false,
        featured: false,
        features: [
            "Automated academic calculator with dynamic regulation support, arrear reconciliation, and grade conversion algorithms.",
            "Secure session management and authentication utilizing JSON Web Tokens (JWT) and Bcrypt cryptographic hashing.",
            "End-to-end automated CI/CD pipeline built with Jenkins for continuous builds, Docker containerization, and Nginx reverse proxy.",
            "Responsive, mobile-first design architecture built with modern React.js and Tailwind CSS."
        ],
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "Nginx", "Jenkins", "Tailwind CSS"]
    },
    {
        title: "GestoCraft — Gesture-Controlled Surgical Robotic Arm",
        category: "AI, Computer Vision & Embedded Hardware",
        origin: "Hardware Robotics & AI",
        badge: "AI & Embedded",
        badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
        demoLink: LINKS.gestocraftDemo,
        demoText: "Watch Demo Video",
        codeLink: LINKS.gestocraftLink,
        isProprietary: false,
        featured: false,
        features: [
            "AI-driven robotic arm utilizing a 21-keypoint 3D hand tracking neural model with TensorFlow.js in the browser.",
            "Achieved 95% gesture-recognition accuracy during real-time multi-angle camera tracking evaluations.",
            "Integrated Johnny-Five framework for real-time servo motor kinematics, reducing mechanical response latency below 100ms.",
            "End-to-end hardware-software bridge connecting browser-based computer vision to Arduino microcontrollers."
        ],
        techStack: ["TensorFlow.js", "Computer Vision", "Johnny-Five", "Express.js", "Node.js", "Arduino"]
    },
    {
        title: "Symplora — Enterprise Event Management Platform",
        category: "Full-Stack Web & Automation",
        origin: "Automated Platform",
        badge: "Event Architecture",
        badgeColor: "bg-slate-500/10 text-slate-300 border-slate-700/60",
        demoLink: null,
        demoText: null,
        codeLink: LINKS.symploraLink,
        isProprietary: false,
        featured: false,
        features: [
            "End-to-end event lifecycle management platform for multi-track technical and academic symposiums.",
            "Automated transactional notification pipelines integrated with Brevo and NodeMailer for instant ticketing and confirmations.",
            "Real-time analytics dashboard tracking attendee registrations, revenue, and coordinator permission boundaries.",
            "Containerized deployment architecture configured with Docker and Nginx reverse proxying."
        ],
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "Nginx", "Tailwind CSS"]
    }
];

const Projects = () => {
    return (
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white z-10 overflow-hidden" id="projectsid">
            {/* Subtle Parallax Watermark Depth Layer */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[60px] sm:text-[130px] lg:text-[160px] font-mono font-black text-white/[0.015] select-none pointer-events-none tracking-widest whitespace-nowrap -z-10">
                04 // PROJECTS
            </div>

            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-xl laser-highlight">
                        <Layers className="w-4 h-4 text-blue-400" />
                        <span>Featured Deployments</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Production <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto">
                        Aviation intelligence, real-time WebSocket messaging engines, AI computer vision robotics, and cloud-native containerized platforms.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="flex flex-col gap-6 sm:gap-8">
                    {projects.map((proj, index) => {
                        const isFeatured = proj.featured;
                        const glowVariant = index === 0 
                            ? "card-glow-emerald" 
                            : index === 1 
                            ? "card-glow-blue" 
                            : index === 2 
                            ? "card-glow-purple" 
                            : "card-glow-cyan";
                        const spotlightColor = index === 0 
                            ? "rgba(16, 185, 129, 0.18)" 
                            : index === 1 
                            ? "rgba(59, 130, 246, 0.16)" 
                            : index === 2 
                            ? "rgba(168, 85, 247, 0.16)" 
                            : "rgba(6, 182, 212, 0.16)";

                        return (
                            <SpotlightCard
                                key={index}
                                spotlightColor={spotlightColor}
                                glowVariant={glowVariant}
                                className={`rounded-3xl p-4 sm:p-8 backdrop-blur-2xl laser-highlight ${
                                    isFeatured 
                                        ? 'bg-slate-900/70 border-2 border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20' 
                                        : 'bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 shadow-xl'
                                }`}
                            >
                                {/* Glow Accent for Featured Project */}
                                {isFeatured && (
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-24 -mt-24"></div>
                                )}

                                {/* Top Meta Row */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
                                        <span className="text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                                            {proj.origin}
                                        </span>
                                        <span className={`text-[11px] sm:text-xs font-mono px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border ${proj.badgeColor}`}>
                                            {proj.badge}
                                        </span>
                                        {proj.isProprietary && (
                                            <span className="text-[10px] sm:text-xs font-mono px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                                                <Lock className="w-3 h-3 text-amber-400" />
                                                <span>Proprietary IP</span>
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons Top */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        {proj.demoLink && (
                                            <a
                                                href={proj.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-emerald-500/20"
                                            >
                                                <Smartphone className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                                                <span>{proj.demoText}</span>
                                                <ExternalLink className="w-3 h-3 ml-0.5" />
                                            </a>
                                        )}
                                        {proj.codeLink && (
                                            <a
                                                href={proj.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-medium transition-all"
                                            >
                                                <Github className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Title & Category */}
                                <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight mb-1 group-hover:text-blue-300 transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-xs sm:text-sm font-medium text-slate-400 mb-4 sm:mb-6 font-mono">
                                    {proj.category}
                                </p>

                                {/* Features List */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                                    {proj.features.map((feat, fIdx) => (
                                        <div 
                                            key={fIdx}
                                            className="p-3 sm:p-3.5 rounded-2xl bg-slate-950/50 border border-slate-800/80 flex items-start gap-2 sm:gap-2.5 group-hover:border-slate-700 transition-colors"
                                        >
                                            <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                                {feat}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack Pills */}
                                <div className="pt-3.5 sm:pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 sm:gap-2">
                                    <span className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mr-1">Tech:</span>
                                    {proj.techStack.map((tech, tIdx) => (
                                        <span 
                                            key={tIdx}
                                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-slate-950/80 text-slate-300 border border-slate-800 text-[11px] sm:text-xs font-mono"
                                        >
                                            {tech}
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

export default Projects;
