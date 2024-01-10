import React, { useReducer, useRef } from 'react';
import './styles.css';
const TextAutoResize = () => {
    const initTextState = {
        value: "",
        fontSize: 100,
    }
    const textareaReducer = (textareaState, action) => {
        console.log(action.payload.fontSize);
        switch(action.type){
            case "INCREASE":
                fontSizeRef.current.style.fontSize = textareaState.fontSize.toString() + "%";
                textareaState.fontSize = action.payload.fontSize;
                const initTextCopy = JSON.parse(JSON.stringify(textareaState))
                return initTextCopy;
            case "DECREASE":
                fontSizeRef.current.style.fontSize = textareaState.fontSize.toString() + "%";
                textareaState.fontSize = action.payload.fontSize;
                const initTextCopy2 = JSON.parse(JSON.stringify(textareaState))
                return initTextCopy2;
            default:
                return textareaState;
        }
    }
    const fontSizeRef = useRef();
    const [textareaState, dispatch] = useReducer(textareaReducer, initTextState);
    const handEvent = (e) => {
        if(e.keyCode !== 8){
            dispatch({
                type: "INCREASE",
                payload: {
                    fontSize: textareaState.fontSize + 10,
                }
            });
        }
        else if(e.keyCode === 8){
            if(e.target.value === ""){
                dispatch({
                    type: "DECREASE",
                    payload:{
                        fontSizeRef: initTextState.fontSize,
                    }
                })
            }else{
                dispatch({
                    type: "DECREASE",
                    payload: {
                        fontSize: textareaState.fontSize - 10,
                    }
                })
            }
            
        }
    }
    console.log(textareaState);
    return (
        <div>
            <input 
                className="textarea" 
                ref={fontSizeRef} 
                onKeyDown={handEvent}
            >
            </input>
        </div>
    );
};

export default TextAutoResize;