import React from 'react';
import './styles.css';
const AdminLayout = (props) => {
    return (
        <div className="movie">
            <div className="dashboard movie-left">
                <div className="info-web">
                    <div>
                        <img src="../../../avatar_rmbg.png" alt="avatar" className="avatar"></img>
                    </div>
                    <div className="name-web"><p>𝑴𝒆̀𝒐 𝑯𝒆𝒏</p></div>
                </div>
            </div>
            <div className="movie-right">
                <div className="temp-movie-left"></div>
                <div className="movie-right-small">
                    <div className="header">
                    </div>
                    <div className="content-aside">
                        {props.children}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminLayout;