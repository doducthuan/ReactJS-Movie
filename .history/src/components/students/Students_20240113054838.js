import React from 'react';
import './styles.css';
const Students = () => {
    return (
        <div className="full-view">
            <div className="border-data">
                <p className="font-sans text-2xl ml-3 mt-3">Bảng điểm lớp 12A1</p>
                <div className="mt-7 ml-6">
                    <input className="search-all"/>
                    <button className="font-sans text-xl bg-sky-500">Thêm mới</button>
                </div>
            </div>
        </div>
    );
};

export default Students;