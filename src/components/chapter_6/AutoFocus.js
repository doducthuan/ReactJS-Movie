import React, { useEffect, useRef } from 'react';
import './styles.css';
const AutoFocus = () => {
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef.current);
        if(inputRef.current !== undefined){
            inputRef.current.focus();
            console.log("focus");
        }
    },[])
    return (
        <div>
            <input className="input" ref={inputRef}/>
        </div>
    );
}
export default AutoFocus;