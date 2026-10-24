import React from "react";
import LINKS from '../assets/links';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Sparkles, Cpu, Cloud, Terminal } from 'lucide-react';

const certifications = [
    {
        title: "Claude Certified Developer - Foundations",
        issuer: "Anthropic",
        year: "2026",
        highlight: true,
        badge: "Official Anthropic Credential",
        badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/40",
        description: "Official credential from Anthropic validating proficiency in architecting, prompting, and integrating advanced Claude AI capabilities and operational tool-calling into modern systems.",
        link: LINKS.claudeCertLink,
        icon: Cpu,
        iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/30"
    },
    {
        title: "HashiCorp Certified: Terraform Associate 2026",
        issuer: "HashiCorp",
        year: "2026",
        highlight: true,
        badge: "Infrastructure as Code",
        badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/40",
        description: "Validates proficiency in infrastructure-as-code principles, multi-cloud resource provisioning, managing modular Terraform codebases, state locking, and drift management.",
        link: LINKS.terraformCertLink,
        icon: Cloud,
        iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/30"
    },
    {
        title: "Build with Amazon EC2",
        issuer: "Amazon Web Services (AWS)",
        year: "2026",
        highlight: false,
        badge: "AWS Compute Engineering",
        badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
        description: "Hands-on implementation of Amazon EC2 instance families, virtual security groups, elastic block storage (EBS), auto-scaling, and production workload orchestration.",
        link: LINKS.awsCertLink,
        icon: Cloud,
        iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/30"
    },
    {
        title: "GitHub Actions - The Complete Guide",
        issuer: "GitHub / DevOps Mastery",
        year: "2026",
        highlight: false,
        badge: "CI/CD Pipeline Mastery",
        badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
        description: "Comprehensive engineering of continuous delivery workflows, self-hosted and cloud runners, matrix test builds, secret security, and automated GHCR image publishing.",
        link: LINKS.githubLink,
        icon: Terminal,
        iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
    },
    {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        year: "June 2023",
        highlight: false,
        badge: "Cloud Governance & SLA",
        badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
        description: "Foundational architecture, Azure Resource Manager (ARM), enterprise identity management, networking, governance, privacy, and compliance frameworks.",
        link: LINKS.AZ900Link,
        icon: ShieldCheck,
        iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
    },
    {
        title: "IBM - Introduction to DevOps",
        issuer: "IBM",
        year: "November 2022",
        highlight: false,
        badge: "DevOps Practices & Culture",
        badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
        description: "Continuous integration paradigms, test-driven development (TDD), agile culture, automated deployment pipelines, and modern operational reliability principles.",
        link: LINKS.IBMDevOpsLink,
        icon: Award,
        iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30"
    }
];

const Certifications = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white z-10" id="certificationsid">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-xl laser-highlight">
                        <Award className="w-4 h-4 text-blue-400" />
                        <span>Verified Credentials</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Certifications & <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Honors</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Official enterprise industry credentials validating expertise across Anthropic AI tooling, Infrastructure-as-Code (Terraform), AWS, and DevOps.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => {
                        const IconComponent = cert.icon;
                        const isHighlight = cert.highlight;
                        return (
                            <div
                                key={index}
                                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-2xl laser-highlight transition-all duration-300 group ${
                                    isHighlight 
                                        ? 'bg-slate-900/70 border-2 border-blue-500/40 shadow-[0_0_35px_rgba(15,98,254,0.18)] ring-1 ring-blue-500/20' 
                                        : 'bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 shadow-xl'
                                }`}
                            >
                                <div>
                                    {/* Top Row */}
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <div className={`p-2.5 rounded-xl border ${cert.iconColor}`}>
                                            <IconComponent className="w-4 h-4" />
                                        </div>
                                        <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${cert.badgeColor}`}>
                                            {cert.badge}
                                        </span>
                                    </div>

                                    {/* Title & Issuer */}
                                    <h3 className="font-bold text-lg text-white tracking-tight mb-1 group-hover:text-blue-300 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                                        <span className="font-semibold text-slate-300">{cert.issuer}</span>
                                        <span>•</span>
                                        <span>{cert.year}</span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>

                                {/* Footer Link */}
                                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        <span>Verified Status</span>
                                    </span>
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition"
                                        >
                                            <span>View Certificate</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Certifications;
