import { useEffect, useRef, useState } from "react";

const useHover = () => {
    const [hover, setHover] = useState(false);
    const hoverRef = useRef(null);
    const handHoverCover = () => {
        setHover(true);
    }
    const handHoverOut = () => {
        setHover(false);
    }
    useEffect(() => {
        const variableDom = hoverRef.current;
        if(hoverRef){
            variableDom.addEventListener("mouseover", handHoverCover);
            variableDom.addEventListener("mouseout", handHoverOut)
        }
        return () => {
            variableDom.removeEventListener("mouseover", handHoverCover);
            variableDom.removeEventListener("mouseout", handHoverOut);
        }
    }, [])
    return{
        hover,
        hoverRef,
    }
}
export default useHover;