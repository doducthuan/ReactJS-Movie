import React from 'react';
import './styles.css';
const Students = () => {
    return (
        <div className="full-view">
            <div className="border-data">
                <p className="font-sans text-2xl ml-3 mt-3">Bảng điểm lớp 12A1</p>
                <div>
                    <input className="search-all"/>
                    <button className="font-sans text-xl">Thêm mới</button>
                </div>
            </div>
        </div>
    );
};

export default Students;