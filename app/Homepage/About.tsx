'use client';
import useWindowSize from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";

const About: React.FC = () => {
    const width = useWindowSize();
    const [vidHeight, setVidHeight] = useState<number>(350);
    const [vidWidth, setVidWidth] = useState<number>(623);

    useEffect(() => {
        // mobile
        if (width <= 480) {
            setVidHeight(223);
            setVidWidth(343);
        } else {
            setVidHeight(350);
            setVidWidth(623);
        }
    }, []);

    return (
        <>
            <section id='about' className='
                flex flex-col text-center
                justify-center
                mobile:flex-row-reverse mobile:text-left
                py-10 px-4'>
                <video width={vidWidth} height={vidHeight} controls>
                    <source src="/assets/videos/video.mp4" type="video/mp4" />
                </video>
                <div className="mobile:mr-[158px] flex flex-col justify-center">
                    <header>
                        <h1 className="font-chonburi text-2xl mb-4">เกี่ยวกับหมูย่างแกล้มเบียร์</h1>
                    </header>
                    <div className="max-w-[500px]">
                        <p className="font-[300] text-base leading-6">
                            ที่นี่เราไม่แค่ขายหมูกระทะอร่อยๆ แต่ยังมีเบียร์เย็นๆ รอคุณอยู่! 
                            แล้วคุณจะได้ลิ้มลองหมูกระทะที่เราคัดสรรคุณภาพและความสดใหม่
                            มาเสิร์ฟที่นี่เราสร้างสรรค์บรรยากาศให้เหมือนกับคุณมานั่งชิลล์ที่
                            บ้านเพื่อน ตกแต่งสไตล์โดดเด่น บริการเป็นกันเอง จะมาคนเดียว
                            หรือมากับเพื่อนๆก็รู้สึกสบายใจ
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;