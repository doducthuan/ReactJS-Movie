import { useState } from "react"
import HackNew from "../chapter_5/HackNew";

const HandMounted = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle button</button>
            { show && <HackNew></HackNew>}
        </div>
    )
}
export default HandMounted;