import { useState } from "react";
import './styles.css';
const Form = () => {
    const [sign, setSign] = useState({
        email: "",
        password: "",
        remember: false,
    });
    const handEvent = (e) => {
        setSign({
            ...sign,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        });
    }
    const handSubmit = () => {
        console.log(sign);
    }
    return (
        <div>
            <div className="form-sign">
                <input
                    className="input"
                    name="email"
                    placeholder="email"
                    onChange={handEvent}
    
                />
                <input 
                    className="input"
                    name="password"
                    placeholder="password"
                    onChange={handEvent}
                />
                <div className="remember">
                    <input
                        className="input-checkbox"
                        type="checkbox"
                        name="remember"
                        onChange={handEvent}
                    />
                    <p>Ghi nhớ mật khẩu</p>
                </div>
                
                <button className="submit" onClick={handSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default Form;