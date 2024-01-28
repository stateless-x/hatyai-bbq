import React,{useState, useEffect} from "react";
const useClientSide = (): boolean => {
    const [isClientSide, setIsClientSide] = useState(false);

    useEffect(() => {
        setIsClientSide(true);
    }, []);

    return isClientSide;
}
export default useClientSide;