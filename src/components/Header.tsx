'use client';

import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsMedium } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Header = () => {
    return (
        <header className="bg-primary text-white rounded-2xl mx-4 my-8 p-8 md:p-12 bg-[#D76C82] justify-center items-center">
        <div className="max-w-2xl mx-auto text-center justify-center items-center justify-items-center">
            <Image 
                src="/assets/avatar.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full border-4 border-white mb-4 justify-center items-center"
                onError={({ currentTarget }) => currentTarget.style.display = 'none'}
                priority
            />
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Nur Yaumi</h1>
            <p className="text-sm sm:text-lg mb-6">
                Backend Developer with 5+ years experience who currently love learning about data
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/nuryaumi/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="w-8 h-8 hover:text-secondary transition-colors" />
            </a>
            <a href="https://github.com/yaumianwar" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="w-8 h-8 hover:text-secondary transition-colors" />
            </a>
            <a href="https://medium.com/@nuryaumi10" target="_blank" rel="noopener noreferrer">
                <BsMedium className="w-8 h-8 hover:text-secondary transition-colors" />
            </a>
            <a href="mailto:youremail@example.com">
                <HiOutlineMail className="w-8 h-8 hover:text-secondary transition-colors" />
            </a>
            </div>
            <div className='flex flex-row space-x-4 items-center justify-center justify-items-center text-center'>
            <a 
                href="/assets/resume.pdf" 
                download 
                className="bg-secondary hover:bg-opacity-90 text-white px-3 md:px-6 py-3 rounded-lg transition-colors bg-[#3D0301]"
            >
                <span className="inline sm:hidden">Resume</span>
                <span className="hidden sm:inline">Download Resume</span>
            </a>
            <a 
                href="/portfolio" 
                className="bg-secondary hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-colors bg-[#B03052] items-center justify-center justify-items-center"
            >
                Portfolio
            </a>
            </div>
            
        </div>
        </header>
    );
};

export default Header;