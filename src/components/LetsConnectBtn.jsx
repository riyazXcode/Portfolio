import React from 'react';
import LINKS from "../assets/links";
import { Send } from 'lucide-react';

const LetsConnectBtn = () => {
    return (
        <a 
            href={`mailto:${LINKS.email}`}
            className="font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center gap-2 rounded-full text-sm sm:text-base px-5 py-2.5 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition duration-300"
        >
            <span>Let’s Connect</span>
            <Send className="w-3.5 h-3.5" />
        </a>
    );
};

export default LetsConnectBtn;
