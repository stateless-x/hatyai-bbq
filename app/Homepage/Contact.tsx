'use client';
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { FACEBOOK_URL, IG_URL, TIKTOK_URL, GMAP_URL, GMAP_IFRAME } from "../constants";

const Contact: React.FC = () =>{
    const width = useWindowSize();
    const [mapHeight, setMapHeight] = useState<number>(350);
    const [mapWidth, setMapdWidth] = useState<number>(623);

    useEffect(() => {
        // mobile
        if (width <= 480) {
            setMapHeight(343);
            setMapdWidth(326);
        } else {
            setMapHeight(576);
            setMapdWidth(576);
        }
    }, []);
    return (
        <div 
            id="contact" 
            className="flex flex-col justify-center py-10 px-4
            mobile:flex-row mobile:text-left mobile:items-center 
            mobile:justify-center
            mobile:mx-[80px] mobile:px-0"
        >
            <div className="mobile:mr-[204px]">
                <div className="text-[16px] font-[300]">
                    <h1 id="contact-header" className="font-chonburi text-2xl mb-4">หมูย่างแกล้มเบียร์ 18/3</h1>
                    <p>ที่ตั้ง: 29 กาญจนวนิช ซ.18/3 ต. หาดใหญ่</p>
                    <p>อ. หาดใหญ่ จ.สงขลา 90110 </p>
                    <p>ติดต่อ: <u>086-698-5518</u></p>
                </div>
                <div className='flex mt-2 text-[#343434]'>
                    <Button targetId={GMAP_URL} message="เปิดดูแผนที่ใน Google Map" />
                </div>
                <div className="text-[16px] font-[300] my-3">
                    <h1  className="font-chonburi text-2xl mb-4">เวลาทำการ</h1>
                    <p className="mb-2">เปิดทำการทุกวัน 18:00น. - 1.00น.</p>
                </div>

                <div className="text-[16px] font-[300] mb-5">
                    <h1 className="font-chonburi text-2xl mb-4">ช่องทางติดต่อออนไลน์</h1>
                    <div className="flex">
                        <a href={FACEBOOK_URL}>
                            <Image src="/assets/facebook.svg" alt="facebook" width={32} height={32} />
                        </a>
                        <a className="mx-2" href={IG_URL}>
                            <Image src="/assets/ig.svg" alt="instagram" width={32} height={32} />
                        </a>
                        <a href={TIKTOK_URL}>
                            <Image src="/assets/tiktok.svg" alt="tiktok" width={32} height={32} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <iframe 
                    src={GMAP_IFRAME} 
                    width={`${mapWidth}px`}
                    height={`${mapHeight}px`}
                    loading="lazy" 
                />
            </div>
        </div>
    )
} 
export default Contact;