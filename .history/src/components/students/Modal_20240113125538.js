import React from 'react';
import ReactDOM from 'react-dom';
const Modal = (props) => props.isShow ? ReactDOM.createPortal(
    <React.Fragment>
        {/* <div className="modal-overlay"></div> */}
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div>
                    <div>
                        <label>Mã số sinh viên</label>
                        <input
                            name="id"
                        />
                    </div>
                    <div>
                        <label>Họ và tên</label>
                        <input
                            name="name"
                        />
                    </div>
                    <div>
                        <label>Toán</label>
                        <input
                            name="math"
                        />
                    </div>
                    <div>
                        <label>Văn</label>
                        <input
                            name="literature"
                        />
                    </div>
                    <div>
                        <label>Anh</label>
                        <input
                            name="english"
                        />
                    </div>
                </div>
                <div>
                    <button onClick={props.hide}>Hủy</button>
                    <button className="">Cập nhật</button>
                </div>
            </div>

        </div>
    </React.Fragment>, document.body
) : null;
export default Modal;