import { useState } from 'react';

const useFormInput = (initFormSignIn) => {
    const [ formInput, setFormInput] = useState(initFormSignIn);
    const handleFormInput = (e) => {
        e.preventDefault();
        setFormInput({
            ...formInput,
            [e.target.name] : e.target.value
        });
    }
    return {
        formInput,
        handleFormInput
    }
};

export default useFormInput;