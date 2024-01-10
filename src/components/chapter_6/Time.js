import { useEffect, useRef, useState } from "react";

const Time = () => {
    const [time, setTime] = useState(1);
    const timeRef = useRef(null);
    const handStart = () => {
        if (timeRef.current ) return;
        timeRef.current = setInterval(() => {
            setTime((time) => time + 1);
            console.log("n");
        }, 1000)
    }
    const handStop = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
    useEffect(() =>{
        return () => clearInterval(timeRef.current);
    },[])
    console.log("interval");
    return (
        <div>
            <div>Time : {time} s</div>
            <div>
                <button onClick={handStart}>Start</button>
            </div>
            <div>
                <button onClick={handStop}>Stop</button>
            </div>
        </div>
    )
}
export default Time;