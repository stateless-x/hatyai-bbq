import React from "react";
import Image from 'next/image';
import Link from 'next/link';

type ButtonProps = {
    targetId: string;
    message?: string;
    arrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({ targetId, message, arrow }) => {
    return (
        <div>
                <Link href={targetId}>
                    <button className={`flex bg-primary-yellow hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg`}>
                        {message}
                        {arrow && (
                            <Image
                                src="/assets/arrowRight.svg"
                                alt="Arrow Right"
                                width={24}
                                height={24}
                                className = 'ml-[10px]'
                            />
                        )}
                    </button>
                </Link>
        </div>
    );
}
export default Button;