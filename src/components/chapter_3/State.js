import { useState } from "react";

function State(){
    const [count, setCount] = useState(0);
    const handEvent = () => {
        setTimeout(() => {
            setCount(count => count + 1);
        }, 1000);
    }
    return (
        <div>
            <button onClick={handEvent}>Count : {count}</button>
        </div>
    )
}
export default State;