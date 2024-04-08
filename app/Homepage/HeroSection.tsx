import Image from 'next/image';
import React from 'react';
import Button from './Button';
import { FACEBOOK_URL } from '../constants';

const HeroSection: React.FC = () => {
    return (
        <section id="hero" className='relative h-screen'>
            {/* Background Images */}
            <div className="hidden mobile:block absolute inset-0 -z-50">
                <Image
                    src="/assets/images/bg1-desktop.png"
                    alt="Background Image for Desktop"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="mobile:hidden absolute inset-0 -z-50">
                <Image
                    src="/assets/images/bg1-mobile.png"
                    alt="Background Image for Mobile"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        
            {/* Text Image */}
            <div className="z-10 flex flex-col justify-center items-center w-full h-full px-[57.5px]">
                <div className="hidden mobile:block">
                    <Image
                        src="/assets/images/landing-text.png"
                        alt="Landing Text for Desktop"
                        width={375}
                        height={667}
                        priority
                    />
                </div>
                <div className="block mobile:hidden">
                    <Image
                        src="/assets/images/landing-text.png"
                        alt="Landing Text for Mobile"
                        width={260}
                        height={465}
                    />
                </div>
                <div className='flex justify-center mt-6 text-[#343434]'>
                    <Button targetId={FACEBOOK_URL} message='อยากรู้จักเรา' arrow />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
