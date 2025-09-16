import React, {useRef} from 'react';
import LetsConnectBtn from "./LetsConnectBtn";
import ResumeBtn from "./ResumeBtn";
import GitHubSocialMediaLogo from "url:../assets/socials/github.svg";
import XSocialMediaLogo from "url:../assets/socials/x.svg";
import LinkedInSocialMediaLogo from "url:../assets/socials/linkedin.svg";
import { Link } from "react-router";
import LINKS from "../assets/links";

const Photo = new URL('../assets/photo/photo.png', import.meta.url);

const Hero = () => {
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        const img = imgRef.current;
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 40;
        const y = e.clientY - rect.top - rect.height / 40;

        const rotateX = (-y / 30).toFixed(1);
        const rotateY = (x / 30).toFixed(1);

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        imgRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div className="flex flex-col items-center w-full px-4 z-40 md:mt-20" id='aboutid'>
            <div className="flex flex-col lg:flex-row justify-between  items-center w-full max-w-7xl mt-25">
                <div className="flex flex-col gap-3 text-center lg:text-left lg:w-1/2">
                    <h1 className="text-2xl font-light">Hello There!</h1>
                    <h1 className="text-4xl sm:text-4xl font-medium">I'm <span className="underline text-[#1465FF]">Mohammed Riyaz Khan,</span></h1>
                    <h1 className="text-4xl sm:text-5xl font-semibold">Full Stack Web Developer & DevOps Rookie</h1>

                    <div className="flex justify-center lg:justify-start mt-5 gap-4">
                        <LetsConnectBtn />
                        <ResumeBtn />
                    </div>
                </div>


                <div className="mt-10 lg:mt-0 z-40"
                     onMouseMove={handleMouseMove}
                     onMouseLeave={handleMouseLeave}>
                    <img
                        className="transition-transform duration-400 ease-out mx-auto lg:mr-20 h-48 sm:h-60 lg:h-95 drop-shadow-2xl rounded-full"
                        src={Photo}
                        alt="photo"
                        ref={imgRef}
                    />
                </div>
            </div>

            <div className="mt-16 text-[#7F7F7F] text-lg sm:text-xl w-full flex-col text-center">
                <p>I cook code for a living and try to make a small impact on trillions of binaries streaming-in today’s digital era.</p>
                <p className="mt-2">
                    Trying different things and implementing them along the way.
                    <b className="text-black"> “Jack of All Trades”</b> - Subtle enough to describe about me.
                </p>
            </div>
            <div className="mt-10 flex flex-col items-center gap-3">
                <h1 className="text-lg sm:text-xl text-[#7F7F7F]">Let’s chat! Follow me on my socials</h1>
                <div className="flex gap-6 items-center">
                    <Link to={LINKS.twitterLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 duration-300">
                        <img className="h-6 sm:h-8" src={XSocialMediaLogo} alt="X logo" />
                    </Link>
                    <Link to={LINKS.githubLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 duration-300">
                        <img className="h-6 sm:h-8" src={GitHubSocialMediaLogo} alt="GitHub logo" />
                    </Link>
                    <Link to={LINKS.linkedinLink} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 duration-300">
                        <img className="h-8 sm:h-10" src={LinkedInSocialMediaLogo} alt="LinkedIn logo" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
