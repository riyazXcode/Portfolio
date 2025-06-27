import React from "react";
import GestoCraft from "url:../assets/photo/gestocraftimg.png";
import Symplora from "url:../assets/photo/Symploraimg.jpeg";
import Gradiator from "url:../assets/photo/Gradiator.svg";

import LINKS from '../assets/links';

const projects = [
    {
        title: "Gradiator - A Student Utility Platform",
        codeLink: LINKS.gradiatorLink,
        demoLink: LINKS.gradiatorDemo,
        features: [
            "CGPA Calculator with arrear handling and grade conversion.",
            "JWT-based authentication and secure user profiles.",
            "Seamless deployment with Docker, Nginx, and CI/CD pipeline via Jenkins.",
            "Tech Stack: MongoDB • Express.js • React.js • Node.js • Parcel • Docker • Nginx • Jenkins • Tailwind CSS"
        ],
        status: "Completed",
        statusColor: "text-green-500",
        imageAlt: Gradiator,
    },
    {
        title: "Symplora - A Full-Scale Event Management Platform",
        codeLink: LINKS.symploraLink,
        demoLink: "#",
        features: [
            "Full-stack web app for college symposiums.",
            "Create and manage symposiums with details like event schedules, event types (tech/non-tech), and rules.",
            "Allows participants to register for individual and group events. Stores entries securely with validation and status tracking.",
            "Secure login and access control for admins, coordinators, and participants using JSON Web Tokens.",
            "Integrated with NodeMailer and Brevo (formerly Sendinblue) for sending confirmations, event updates, and reminders to registered participants.",
            "Real-time management panel for overseeing registrations, event stats, and participant data.",
            "Tech Stack: MongoDB • Express.js • React.js • Node.js • Parcel • Docker • Nginx • Jenkins • Tailwind CSS"
        ],
        status: "On-Going",
        statusColor: "text-yellow-500",
        imageAlt: Symplora,
    },

    {
        title: "GestoCraft - Gesture Controlled Surgical Robotic Arm",
        codeLink: LINKS.gestocraftLink,
        demoLink: LINKS.gestocraftDemo,
        features: [
            "Built a surgical robotic arm which utilizes 21-keypoint hand-gesture model with TensorFlow.js, achieving 95% gesture-recognition accuracy in tests.",
            "Integrated Johnny-Five for real-time servo control, reducing latency to under 100 ms.",
            "Tech Used: TensorFlow.js - 3D Hand points Detection Model, Express.js, Johnny-Five.",
        ],
        status: "Completed",
        statusColor: "text-green-500",
        imageAlt: GestoCraft,
    },
];

const Projects = () => {
    return (
        <section className="pb-16 px-6 bg-white text-gray-800" id='projectsid'>
            <h2 className="font-bold text-center mb-10 text-3xl sm:text-4xl text-[#1465FF]">
                Projects
            </h2>

            <div className="flex flex-col gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border-gray-200 hover:shadow-md transition border rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 p-6"
                    >
                        <div
                            className="shadow-sm transition flex-shrink-0 w-full md:w-1/3 flex items-center justify-center  rounded-xl min-h-[20vw] bg-gray-50">
                            <img className="rounded-xl" src={project.imageAlt}></img>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <div className="flex gap-3 mb-3">
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-1 border border-gray-500 rounded-full text-sm hover:bg-gray-100 transition"
                                >
                                    Code
                                </a>
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-1 border border-gray-500 rounded-full text-sm hover:bg-gray-100 transition"
                                >
                                    Demo
                                </a>
                            </div>

                            <ul className="list-disc ml-5 text-lg text-gray-700 space-y-1 mb-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>

                            <p className="text-md">
                                Project Status:{" "}
                                <span className={project.statusColor}>{project.status}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
