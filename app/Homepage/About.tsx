const About: React.FC = () => {

    const aboutText = [`ที่นี่เราไม่แค่ขายหมูกระทะอร่อยๆ`,
        `แต่ยังมีเบียร์เย็นๆ รอคุณอยู่!`,
        `แล้วคุณจะได้ลิ้มลองหมูกระทะที่เราคัดสรร`,
        `คุณภาพและความสดใหม่มาเสิร์ฟที่นี่เราสร้างสรรค์`,
        `บรรยากาศให้เหมือนกับคุณมานั่งชิลล์ที่บ้านเพื่อน`,
        `ตกแต่งสไตล์โดดเด่น บริการเป็นกันเอง`,
        `จะมาคนเดียวหรือมากับเพื่อนๆก็รู้สึกสบายใจ`]

    return (
        <>
            <section id='about' className='
                flex flex-col text-center
                mobile:flex-row mobile:text-left
                justify-center 
                py-10 px-4'>
                <video width="343" height="223" controls>
                    <source src="/assets/videos/video.mp4" type="video/mp4" />
                </video>
                <div>
                    <header>
                        <h1 className="font-chonburi text-2xl mb-4">เกี่ยวกับหมูย่างแกล้มเบียร์</h1>
                    </header>
                    <div>
                        {
                            aboutText.map((paragraph, index) => (
                                <p key={index} className="font-[300] text-base leading-6">
                                    {paragraph}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;