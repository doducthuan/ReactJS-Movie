import { useEffect, useRef } from "react"

const useNewTab = () => {
    const contentRef = useRef();
    useEffect(() => {
        if(contentRef){
            const links = contentRef.current.querySelectorAll("a");
            links.length > 0 &&
            links.forEach((item) => item.setAttribute("target", "_blank"));
        }
    },[])
    return {
        contentRef,
    }
}
export default useNewTab;