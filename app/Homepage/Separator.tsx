'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

interface SeparatorProps {
    im1: string;
    im2: string;
};

const Separator:React.FC<SeparatorProps> = ({im1, im2}) => {
    const windowSize = useWindowSize();
    const isMobile = windowSize <= 480;
    const defaultImageSize = { 
        item1: { width: 950, height: 500} ,
        item2: { width: 490, height: 500}
    }
    const [imageSize, setImageSize] = useState(defaultImageSize);

    const updateImageSize = () => {
        if (isMobile) {
            setImageSize({ item1: { width: 375, height: 250 }, item2: { width: 375, height: 250 } });
        }else{
            setImageSize(defaultImageSize)
        }
    };

    useEffect(() => {
        updateImageSize();
    }, [windowSize]);

    return (
        <>
            <div className='mobile:flex mobile:w-screen'>
                <Image src={`/assets/images/${im1}.png`} alt="food1" width={imageSize.item1.width} height={imageSize.item1.height} className={`${isMobile ? 'max-h-[250px] w-full' : ''}`} />
                <Image src={`/assets/images/${im2}.png`} alt="food2" width={imageSize.item2.width} height={imageSize.item2.height} style={{objectFit: "cover"}} className={`${isMobile ? 'max-h-[250px] w-full' : 'w-full'}`} />
            </div>
        </>
    )
} 
export default Separator;