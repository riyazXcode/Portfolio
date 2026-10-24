import React from 'react';
import Logo from 'url:../assets/icons/Logo.svg';
import { Link } from 'react-scroll';

const PortfolioLogo = () => {
    return (
        <Link 
            to="aboutid" 
            smooth={true} 
            duration={500} 
            offset={-100} 
            className="cursor-pointer flex items-center gap-2 group"
        >
            <img className="h-7 w-7 md:h-8 md:w-8 group-hover:rotate-12 transition-transform duration-300" src={Logo} alt="website logo" />
            <span className="font-mono font-extrabold text-base md:text-lg text-white tracking-tight">
                riyaz<span className="text-blue-400">.dev</span>
            </span>
        </Link>
    );
};

export default PortfolioLogo;
