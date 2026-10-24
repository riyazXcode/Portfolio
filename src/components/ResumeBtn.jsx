import React from 'react';
import LINKS from "../assets/links";
import { FileText } from 'lucide-react';

const ResumeBtn = () => {
    return (
        <a 
            href={LINKS.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center gap-2 rounded-full text-sm sm:text-base px-5 py-2.5 transition duration-300 backdrop-blur-sm"
        >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Resume</span>
        </a>
    );
};

export default ResumeBtn;
