import { useState, useEffect } from 'react';

const getWindowSize = () => {
    if (typeof window !== 'undefined') {
        return window.innerWidth;
    }
    return 0; 
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize(getWindowSize());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    return windowSize;
}

export default useWindowSize;