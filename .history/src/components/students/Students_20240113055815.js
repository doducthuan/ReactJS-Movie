import React from 'react';
import './styles.css';
const Students = () => {
    return (
        <div className="full-view">
            <div className="border-data">
                <p className="font-sans text-2xl ml-3 mt-3">Bảng điểm lớp 12A1</p>
                <div className="search-add mt-9 ml-6 mr-6 flex">
                    <input className="search-all w-46 h-10"/>
                    <button className="font-sans text-xl bg-sky-500 w-12 h-10">Thêm mới</button>
                </div>
            </div>
        </div>
    );
};

export default Students;