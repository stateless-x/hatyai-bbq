const Menu: React.FC = () => {
    return(
        <div 
            id="menu" 
            className="mobile:text-left justify-center py-10 px-4
            mobile:mx-[80px] mobile:px-0"
        >
                <div className="mobile:max-w-[500px] mobile:mb-[80px]">
                    <h1 className="font-chonburi text-2xl mb-4">เมนูอาหารของร้าน</h1>
                    <p className="font-[300]">
                        เราพัฒนาเมนูอาหารของเราด้วยความพิถีพิถัน 
                        เราเตรียมและปรุงอาหารทุกจานในร้านเราทุกวัน
                        เพื่อรับประกันคุณภาพและรสชาติที่สุดยอด 
                        แล้วก็เบียร์ที่เราเสนอที่ทุกคนต้องการ
                    </p>
                </div>
            <div className="flex flex-col mobile:flex-row justify-between">
                <div className="font-[300] mobile:w-[374px]">
                    <h1 className="font-chonburi text-2xl mb-4 mt-8 mobile:mt-0">ชุดเปิดเตา 259 บาท</h1>
                    <span>รวมหมูคัดสรรด้วยกัน 6 ส่วน (+บวกฟรีชุดผัก)</span>
                    <ul className="list-disc pl-4">
                        <li>คอหมู</li>
                        <li>สามชั้น</li>
                        <li>สันคอ</li>
                    </ul>
                </div>

                <div className="font-[300] mobile:w-[374px]">
                    <h1 className="font-chonburi text-2xl mb-4 mt-8 mobile:mt-0">ของทานเล่น</h1>
                    <ul className="list-disc pl-4">
                        <li>แหนมย่าง</li>
                        <li>ถั่วแระญี่ปุ่น</li>
                        <li>นักเก็ต</li>
                        <li>เฟรนฟราย</li>
                        <li>หมูกรอบทอด</li>
                    </ul>
                </div>

                <div className="font-[300] mobile:w-[374px]">
                    <h1 className="font-chonburi text-2xl mb-4 mt-8 mobile:mt-0">เคร่ืองดื่มเย็นๆ</h1>
                    <ul className="flex">
                        <div>
                            <ul className="list-disc pl-4 w-[167.5px] mobile:w-[182px]">
                                <li>หงษ์ทอง(แบน)</li>
                                <li>รีเจนซี่ (แบน)</li>
                                <li>ลีโอ</li>
                                <li>ช้าง</li>
                                <li>สิงห์</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-disc pl-4  w-[167.5px] mobile:w-[182px]">
                                <li>โชจู</li>
                                <li>น้ำเปล่า</li>
                                <li>โซดา</li>
                                <li>น้ำแข็ง</li>
                                <li>น้ำอัดลม</li> 
                            </ul>                   
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default Menu;