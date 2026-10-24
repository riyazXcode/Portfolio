import React from "react";
import LINKS from '../assets/links';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const certifications = [
    {
        title: "Claude Certified Developer - Foundations",
        issuer: "Anthropic",
        year: "2026",
        highlight: true,
        badge: "AI & LLM Systems",
        description: "Official certification from Anthropic on developing, prompting, and integrating advanced Claude AI tooling into software and operational systems.",
        link: LINKS.claudeCertLink
    },
    {
        title: "HashiCorp Certified: Terraform Associate 2026",
        issuer: "HashiCorp",
        year: "2026",
        highlight: true,
        badge: "Infrastructure as Code",
        description: "Validates proficiency in infrastructure-as-code concepts, writing and managing Terraform modules, state management, and multi-cloud provisioning.",
        link: LINKS.terraformCertLink
    },
    {
        title: "Build with Amazon EC2",
        issuer: "Amazon Web Services (AWS)",
        year: "2026",
        highlight: false,
        badge: "Cloud Compute",
        description: "Hands-on implementation of Amazon EC2 instances, security groups, EBS storage, and scalable cloud architectures.",
        link: LINKS.awsCertLink
    },
    {
        title: "Introduction to Amazon EC2",
        issuer: "Amazon Web Services (AWS)",
        year: "2026",
        highlight: false,
        badge: "AWS Foundations",
        description: "Core compute services, instance types, virtual private clouds (VPC), and AWS cloud infrastructure management.",
        link: LINKS.awsCertLink
    },
    {
        title: "GitHub Actions - The Complete Guide",
        issuer: "GitHub / DevOps Mastery",
        year: "2026",
        highlight: false,
        badge: "CI/CD Automation",
        description: "Comprehensive mastery of GitHub Actions CI/CD workflows, runners, secrets management, Docker publishing, and release orchestration.",
        link: LINKS.githubLink
    },
    {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        year: "June 2023",
        highlight: false,
        badge: "Cloud Governance",
        description: "Foundational cloud services, Azure architecture, privacy, compliance, security, and cloud pricing models.",
        link: LINKS.AZ900Link
    },
    {
        title: "IBM - Introduction to DevOps",
        issuer: "IBM",
        year: "November 2022",
        highlight: false,
        badge: "DevOps Practices",
        description: "DevOps philosophies, continuous integration, test-driven development (TDD), agile culture, and automated delivery pipelines.",
        link: LINKS.IBMDevOpsLink
    }
];

const Certifications = () => {
    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 text-white z-10" id="certificationsid">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-md">
                        <Award className="w-4 h-4 text-blue-400" />
                        <span>Verified Credentials</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Certifications & <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Honors</span>
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                        Official industry certifications spanning AI development, Infrastructure as Code, AWS, and Cloud Operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between backdrop-blur-xl ${
                                cert.highlight 
                                    ? "bg-slate-900/85 border-blue-500/50 shadow-[0_0_35px_rgba(20,101,255,0.2)] ring-1 ring-blue-500/20" 
                                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-md hover:shadow-xl"
                            }`}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                                        cert.highlight ? "bg-blue-500/20 text-blue-300 border border-blue-400/30" : "bg-slate-800 text-slate-300"
                                    }`}>
                                        {cert.badge}
                                    </span>
                                    <span className="text-xs text-slate-500 font-mono">
                                        {cert.year}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
                                    {cert.title}
                                </h3>

                                <div className="text-xs font-semibold text-blue-400 mb-3 font-mono">
                                    Issuer: {cert.issuer}
                                </div>

                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="pt-3 border-t border-slate-800/80">
                                {cert.link ? (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
                                    >
                                        <span>View Credential</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                ) : (
                                    <span className="text-xs text-slate-500">Verified Credential</span>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Honors / Award Card */}
                    <div className="p-7 rounded-3xl border border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-slate-900/70 to-slate-900/60 shadow-xl backdrop-blur-xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                    Special Honor
                                </span>
                                <span className="text-xs text-amber-400 font-mono">Award</span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1.5">
                                Shield of Appreciation
                            </h3>

                            <div className="text-xs font-semibold text-amber-400 mb-3 font-mono">
                                Academic & Technical Excellence
                            </div>

                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                Awarded in recognition of outstanding contributions, engineering dedication, and leadership in technical initiatives.
                            </p>
                        </div>

                        <div className="pt-3 border-t border-amber-500/20 flex items-center gap-2 text-xs text-amber-300 font-medium">
                            <ShieldCheck className="w-4 h-4 text-amber-400" />
                            <span>Official Recognition</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
