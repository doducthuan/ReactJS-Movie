import React from 'react';
import useFormSignIn from '../use_hook/UseFormSignIn';
import axios from 'axios';
import './styles.css';
const SignIn = () => {
    const url = "http://localhost:3003/account";
    const addAccount = async () => {
        const response = await axios.post(url, formSignIn);
        console.log(response);
    }
    const initFormSignIn = {
        userName: "",
        password: "",
        fullName: "Aris",
        roleId: 1
    }
    const { formSignIn, handleFormSignIn } = useFormSignIn(initFormSignIn);
    return (
        <div className="view-full">
            <div className="signin-left">
                <img src="../../../avatar_rmbg.png" alt="avatar" className="signin-avatar"></img>
            </div>
            <div className="signin-right">
                <div className="form-signin">
                    <div className="info-username info-info">
                        <label>Tên đăng nhập</label>
                        <input
                            className="input-username"
                            name="userName"
                            onChange={handleFormSignIn}
                        />
                    </div>
                    <div className="info-password info-info">
                        <label>Mật khẩu</label>
                        <input
                            className="input-password"
                            name="password"
                            onChange={handleFormSignIn}
                        />
                    </div>
                    <div className="info-info">
                        <button className="btn-signin" onClick={() => addAccount()}>Đăng nhập</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SignIn;