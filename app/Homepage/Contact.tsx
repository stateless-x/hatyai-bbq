import React from "react";
import Image from "next/image";
import Button from "./Button";
import { FACEBOOK_URL, IG_URL, TIKTOK_URL, GMAP_URL, GMAP_IFRAME } from "../constants";
const Contact: React.FC = () =>{
    return (
        <div 
            id="contact" 
            className="flex flex-col mobile:flex-row mobile:text-left justify-center py-10 px-4"
        >
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
            <iframe 
                src={GMAP_IFRAME} 
                width="343" 
                height="326" 
                loading="lazy" 
            >
            </iframe>
        </div>
    )
} 
export default Contact;