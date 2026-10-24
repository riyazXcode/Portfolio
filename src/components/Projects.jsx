import React from "react";
import LINKS from '../assets/links';
import { ExternalLink, Github, Layers, CheckCircle, Lock } from 'lucide-react';

const projects = [
    {
        title: "TOGA & Skynet — Aviation Intelligence & Operations",
        category: "Production Aerospace & Mobile Platform",
        badge: "Live on Play Store",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        demoLink: LINKS.togaAppPlayStore,
        demoText: "View on Play Store",
        codeLink: null, // Proprietary company IP (no public source code)
        isProprietary: true,
        features: [
            "Owned and shipped the Community Module and User Profile Module on TOGA (Flutter app live on Google Play Store for pilots and flight training organizations).",
            "Built Skynet Dispatch Module and Roster & Schedule Module with state-machine-driven compliance enforcement and full audit logging on all state mutations.",
            "Engineered low-latency real-time messaging engine with WebSockets, supporting one-to-one, group, and channel communication with server-side RBAC.",
            "Architected scalable FastAPI + PostgreSQL backend with multi-tenant isolation, query optimization, AWS S3 media storage, and AWS EC2 deployment."
        ],
        techStack: ["FastAPI", "Python", "WebSockets", "Flutter", "PostgreSQL", "AWS EC2", "AWS S3", "Docker"]
    },
    {
        title: "Gradiator — Student Utility & Academic Platform",
        category: "Cloud-Native Containerized Application",
        badge: "Production / CI-CD",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        demoLink: LINKS.gradiatorDemo,
        demoText: "Live Demo",
        codeLink: LINKS.gradiatorLink,
        isProprietary: false,
        features: [
            "Automated academic calculator with dynamic regulation support, arrear handling, and grade conversion algorithms.",
            "Secure user authentication and session management using JSON Web Tokens (JWT) and Bcrypt hashing.",
            "Fully automated CI/CD pipeline leveraging Jenkins for continuous builds, Docker for containerization, and Nginx as reverse proxy.",
            "Built with responsive, mobile-first design system using modern React and Tailwind CSS."
        ],
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Docker", "Nginx", "Jenkins", "Tailwind CSS"]
    },
    {
        title: "GestoCraft — Gesture-Controlled Surgical Robotic Arm",
        category: "AI, Computer Vision & Embedded Hardware",
        badge: "Hardware & AI",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
        demoLink: LINKS.gestocraftDemo,
        demoText: "Watch Demo Video",
        codeLink: LINKS.gestocraftLink,
        isProprietary: false,
        features: [
            "Built an AI-driven surgical robotic arm utilizing a 21-keypoint 3D hand tracking model with TensorFlow.js.",
            "Achieved 95% gesture-recognition accuracy in real-time camera tracking tests.",
            "Integrated Johnny-Five framework for real-time servo motor control, reducing mechanical response latency to under 100ms.",
            "Full hardware-software integration bridging browser computer vision to embedded microcontroller hardware."
        ],
        techStack: ["TensorFlow.js", "Computer Vision", "Johnny-Five", "Express.js", "Node.js", "Arduino"]
    },
    {
        title: "Symplora — Enterprise Event Management Platform",
        category: "Full-Stack Web & Automation",
        badge: "Completed",
        badgeColor: "bg-slate-700/30 text-slate-300 border-slate-700/60",
        demoLink: null,
        demoText: null,
        codeLink: LINKS.symploraLink,
        isProprietary: false,
        features: [
            "End-to-end event lifecycle platform for managing complex multi-track technical and non-technical symposiums.",
            "Automated notification pipelines integrated with NodeMailer and Brevo for confirmations, schedule updates, and ticketing.",
            "Real-time management dashboard with attendee analytics, registration tracking, and coordinator permissions.",
            "Containerized deployment architecture configured with Docker and Nginx reverse proxying."
        ],
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker", "Nginx", "Tailwind CSS"]
    }
];

const Projects = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white z-10" id="projectsid">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-md">
                        <Layers className="w-4 h-4 text-blue-400" />
                        <span>Featured Work</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Production <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Aviation intelligence, real-time messaging engines, robotics, and containerized web platforms.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {projects.map((proj, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/60 rounded-3xl border border-slate-800 hover:border-slate-700 p-6 sm:p-8 shadow-xl hover:shadow-[0_0_30px_rgba(20,101,255,0.1)] transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group"
                        >
                            <div>
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-2.5 flex-wrap">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
                                            {proj.category}
                                        </span>
                                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${proj.badgeColor}`}>
                                            {proj.badge}
                                        </span>
                                    </div>

                                    {/* Action links */}
                                    <div className="flex items-center gap-2">
                                        {proj.isProprietary && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-mono">
                                                <Lock className="w-3.5 h-3.5 text-slate-400" />
                                                <span>Proprietary / Company IP</span>
                                            </span>
                                        )}
                                        {proj.codeLink && (
                                            <a
                                                href={proj.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                        {proj.demoLink && (
                                            <a
                                                href={proj.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition shadow-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>{proj.demoText || "Live Demo"}</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                    {proj.title}
                                </h3>

                                <ul className="space-y-2.5 mb-5">
                                    {proj.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300">
                                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono mr-1">
                                    Stack:
                                </span>
                                {proj.techStack.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/70 text-slate-300 border border-slate-700/60 font-mono"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
