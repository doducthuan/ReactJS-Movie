import { useState } from "react";

const useHandInput = (initObject) => {
    const [object, setObject] = useState(initObject);
    const getObject = (e) => {
        setObject({
            ...object,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        })
    }
    return {
        object,
        getObject,
    }
}
export default useHandInput;