import { useEffect, useState } from "react";
import './styles.css';
const Dependency = () => {
    const initInfo = {
        firstName: "Hubert",
        lastName: "Do",
    }
    const [info, setInfo] = useState(initInfo);
    useEffect(() =>{
        console.log("work when change lastName");
    },[info.lastName])
    return (
        <div className="contains">
            <input
                onChange={(e) =>{
                    setInfo({
                        ...info,
                        lastName: e.target.value,
                    })
                }}
                className="input"
            />
        </div>
    )
}
export default Dependency;