import { useState } from 'react';

const useFormSignIn = (initFormSignIn) => {
    const [ formSignIn, setFormSignIn] = useState(initFormSignIn);
    const handleFormSignIn = (e) => {
        e.preventDefault();
        setFormSignIn({
            ...formSignIn,
            [e.target.name] : e.target.value
        });
    }
    return {
        formSignIn,
        handleFormSignIn
    }
};

export default useFormSignIn;