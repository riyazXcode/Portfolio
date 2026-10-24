import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles } from 'lucide-react';

const experiences = [
    {
        company: "IBM",
        role: "Cloud Migration Specialist",
        period: "June 2026 – Present",
        location: "Bangalore Urban, Karnataka, India",
        type: "Hybrid Cloud Application Migration",
        summary: "Specializing in enterprise application migrations across hybrid cloud environments, automating infrastructure as code, and containerizing workloads onto modern cloud platforms.",
        skills: [
            "Hybrid Cloud App Migration", "AWS Transform", "Terraform (IaC)", "Ansible",
            "Docker", "Kubernetes", "Red Hat OpenShift", "Linux Administration",
            "App Modernization", "DB2", "MongoDB", "APM Observability"
        ],
        highlights: [
            "Executing enterprise application migrations across hybrid cloud environments, transitioning legacy workloads into scalable, cloud-native architectures.",
            "Replatforming and containerizing enterprise applications onto Red Hat OpenShift, Kubernetes, and AWS using AWS Transform.",
            "Automating application deployment pipelines and Infrastructure-as-Code (IaC) with Terraform and Ansible for zero-drift hybrid environments.",
            "Managing application runtime environments, system configurations, and database integrations across SQL (DB2) and NoSQL (MongoDB).",
            "Implementing application telemetry, performance baselining, and APM observability to ensure seamless cutovers and high-availability operations."
        ],
        featured: true
    },
    {
        company: "AIRMAN Aeronautics",
        role: "Full Stack Engineer Intern",
        period: "March 2026 – May 2026 (3 months)",
        location: "Chennai, Tamil Nadu, India",
        type: "Aviation & Intelligence Systems",
        summary: "Engineered production flight management modules and real-time messaging backends for aviation intelligence platforms.",
        skills: [
            "FastAPI", "PostgreSQL", "WebSockets", "Flutter", 
            "AWS EC2 & S3", "State Machines", "RBAC", "Python"
        ],
        highlights: [
            "Owned and shipped the Community Module and User Profile Module on TOGA, an AI-integrated aviation intelligence mobile app built with Flutter — live on Google Play Store serving pilots and flight training organizations.",
            "Owned and shipped the Dispatch Module and Roster & Schedule Module on Skynet, building state-machine-driven workflows, compliance block enforcement, and full audit logging on every state mutation.",
            "Engineered a real-time messaging system using WebSockets, supporting one-to-one, group, and channel communication with server-side RBAC and persistent message delivery.",
            "Built and maintained a scalable FastAPI + PostgreSQL backend with multi-tenant isolation, query tuning, AWS S3 media storage, and EC2 deployment."
        ],
        featured: false
    },
    {
        company: "Infinit Solutions",
        role: "Software Development Intern",
        period: "November 2025 – November 2025 (1 month)",
        location: "Coimbatore, Tamil Nadu, India",
        type: "Enterprise Asset Systems",
        summary: "Contributed to internal enterprise asset tracking and performance optimization.",
        skills: ["ASP.NET Core", "C#", "Razor Pages", "System Reliability"],
        highlights: [
            "Worked on an internal asset management system using ASP.NET Core, C#, and Razor Pages.",
            "Implemented new features and resolved bugs to enhance both frontend and backend performance.",
            "Collaborated with team members to ensure efficient resource tracking and system reliability."
        ],
        featured: false
    },
    {
        company: "Neuronest AI Pvt Ltd",
        role: "Full Stack Developer Intern",
        period: "August 2025 – August 2025 (1 month)",
        location: "Coimbatore, Tamil Nadu, India",
        type: "AI & SaaS Solutions",
        summary: "Architected project management workflows and data visualization pipelines.",
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Data Visualization"],
        highlights: [
            "Designed and developed a project management system from the ground up using the MERN stack.",
            "Enhanced client project features in React, Node.js, and Express.js to streamline order handling.",
            "Improved performance data visualization for better decision-making among team members."
        ],
        featured: false
    },
    {
        company: "Tarcin Robotic LLP",
        role: "Software Engineering Intern",
        period: "July 2023 – September 2023 (3 months)",
        location: "Madurai, Tamil Nadu, India",
        type: "Robotics & Hardware Integration",
        summary: "Managed Linux server deployments and created interactive embedded web platforms.",
        skills: ["Linux Server Deployment", "HTML/CSS/JS", "Arduino", "Figma", "UI/UX"],
        highlights: [
            "Contributed to the revamping of a website focused on Arduino applications using HTML, CSS, and JavaScript.",
            "Designed user interfaces and documentation with Figma, Adobe Illustrator, and Adobe InDesign.",
            "Managed the deployment of applications on a Linux server, enhancing operational efficiency."
        ],
        featured: false
    }
];

const Experience = () => {
    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white z-10" id="experienceid">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-md shadow-sm">
                        <Briefcase className="w-4 h-4 text-blue-400" />
                        <span>Career Timeline</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Work <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Enterprise hybrid cloud application migration at IBM and production full-stack engineering track record.
                    </p>
                </div>

                {/* Timeline Container with Glowing Beam */}
                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
                    <div className="absolute top-0 bottom-0 -left-[2px] w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 opacity-60"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 group">
                            
                            {/* Glowing Timeline Node Dot */}
                            <div className={`absolute -left-[17px] top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg ${
                                exp.featured 
                                    ? "bg-blue-600 border-blue-300 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)]" 
                                    : "bg-slate-900 border-slate-700 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-300"
                            }`}>
                                <Building2 className="w-4 h-4" />
                            </div>

                            {/* Card Content with Futuristic Glassmorphism */}
                            <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-xl ${
                                exp.featured 
                                    ? "bg-slate-900/80 border-blue-500/40 shadow-[0_0_35px_rgba(20,101,255,0.15)] ring-1 ring-blue-500/20" 
                                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-md hover:shadow-xl"
                            }`}>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2.5 flex-wrap">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                                {exp.role}
                                            </h3>
                                            {exp.featured && (
                                                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 border border-blue-400/40 text-blue-300 shadow-sm flex items-center gap-1 font-mono">
                                                    <Sparkles className="w-3 h-3 text-blue-300" />
                                                    Current Role
                                                </span>
                                            )}
                                        </div>
                                        <h4 className="text-lg font-semibold text-blue-400 mt-0.5 font-mono">
                                            {exp.company} • {exp.type}
                                        </h4>
                                    </div>

                                    <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-400 gap-1 font-mono">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-slate-500" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-slate-300 text-sm sm:text-base mb-5 italic border-l-2 border-slate-800 pl-3">
                                    {exp.summary}
                                </p>

                                {/* Highlights list */}
                                <ul className="space-y-2.5 mb-6">
                                    {exp.highlights.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                            <span className="leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Skill tags */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                                    {exp.skills.map((skill, sIdx) => (
                                        <span 
                                            key={sIdx} 
                                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono hover:border-slate-500 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
