import './styles.css';
import useHandInput from "./useHandInput";
const UseHook = () => {
    const initObject = {
        email: "",
        password: "",
        remember: false,
    }
    const {object, getObject} = useHandInput(initObject);
    const handSubmit = () => {
        console.log(object);
    }
    return (
        <div>
            <div className="form-sign">
                <input
                    className="input"
                    name="email"
                    placeholder="email"
                    onChange={getObject}
    
                />
                <input 
                    className="input"
                    name="password"
                    placeholder="password"
                    onChange={getObject}
                />
                <div className="remember">
                    <input
                        className="input-checkbox"
                        type="checkbox"
                        name="remember"
                        onChange={getObject}
                    />
                    <p>Ghi nhớ mật khẩu</p>
                </div>
                
                <button className="submit" onClick={handSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default UseHook;