"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles/Navbar.module.scss';
import useClientSide from '../../hooks/useClientSide';
import { useMediaQuery } from 'react-responsive';

const NavDesktop: React.FC = () => {
    return (
        <nav className={` ${styles.navbar} flex items-center justify-between flex-wrap bg-navbar-gray py-4 px-6 fixed top-0 left-0 right-0 z-50 h-[80px]`}>
            <div className="flex items-center">
                <Image src="/assets/icon.png" alt="Logo" width={52} height={52} />
            </div>
            <div className={`flex justify-between  text-base`}>
                <a href="#about">
                    <div className='flex justify-between items-center h-[44px] text-nav-text'>
                        <p>เกี่ยวกับเรา</p>
                    </div>
                </a>
                <a href="#menu">
                    <div className='flex justify-between items-center h-[44px] px-[34px] text-nav-text'>
                        <p>เมนูอาหาร</p>
                    </div>
                </a>
                <a href="#contact">
                    <div className='flex justify-between items-center h-[44px] text-nav-text'>
                        <p>ติดต่อ</p>
                    </div>
                </a>
            </div>
        </nav>
    );
}


const NavMobile: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={` ${styles.navbar} flex items-center justify-between flex-wrap bg-navbar-gray p-4 fixed top-0 left-0 right-0 z-50 }`}>
            {/* Logo */}
            <Image src="/assets/icon.png" alt="Logo" width={33} height={33} />

            {/* Hamburger Menu */}
            <button onClick={() => setIsOpen(!isOpen)} >
                {isOpen ? (
                    <Image src="/assets/x.svg" alt="Close Icon" width={24} height={24} />
                ) : (
                    <Image src="/assets/hamburger.svg" alt="Hamburger Icon" width={24} height={24} />
                )}
            </button>

            {/* Menu Items */}
            <div className={`w-full block flex-grow text-base  ${isOpen ? 'mt-4 opened' : 'hidden'}`}>
                <a href="#about">
                    <div className='flex justify-between items-center h-[44px] text-nav-text'>
                        <p>เกี่ยวกับเรา</p>
                        <Image
                            src="/assets/arrowRight2.svg"
                            alt="My SVG"
                            width={24}
                            height={24}
                        />
                    </div>
                </a>
                <a href="#menu">
                    <div className='flex justify-between items-center h-[44px] text-nav-text my-2'>
                        <p>เมนูอาหาร</p>
                        <Image
                            src="/assets/arrowRight2.svg"
                            alt="My SVG"
                            width={24}
                            height={24}
                        />
                    </div>
                </a>
                <a href="#contact">
                    <div className='flex justify-between items-center h-[44px] text-nav-text'>
                        <p>ติดต่อ</p>
                        <Image
                            src="/assets/arrowRight2.svg"
                            alt="My SVG"
                            width={24}
                            height={24}
                        />
                    </div>
                </a>
            </div>
        </nav>
    );
}

const Navbar: React.FC = () => {
    const isClientSide = useClientSide(); //prevent hydration
    const isMobile = useMediaQuery({ maxWidth: 1024 });

    if (!isClientSide) {
        return null;
    }

    return (
        <>
            {isMobile ? <NavMobile /> : <NavDesktop />}
        </>
    );
}

export default Navbar;
