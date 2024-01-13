import { useState } from 'react';

const useFormInput = (initFormSignIn) => {
    const [ formInput, setFormInput] = useState(initFormSignIn);
    console.log(formInput);
    const handleFormInput = (e) => {
        //e.preventDefault();
        setFormInput({
            ...formInput,
            [e.target.name] : e.target.name === "name" ? e.target.value : parseFloat(e.target.value)
        });
    }
    return {
        formInput,
        handleFormInput
    }
};

export default useFormInput;