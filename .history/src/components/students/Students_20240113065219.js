import React from 'react';
import './styles.css';
import ReactTable from 'react-table';

const Students = () => {
    const data = [
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10},
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10},
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10},
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10},
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10},
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10},
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10},
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10},
    ]
    const headColumn = [
        {header: "STT",accessor: "stt"},
        {header: "MSSV",accessor: "id"},
        {header: "Họ và tên",accessor: "name"},
        {header: "Toán",accessor: "math"},
        {header: "Văn",accessor: "literature"},
        {header: "Anh",accessor: "english"}
    ]
    return (
        <div className="full-view">
            <div className="border-data">
                <p className="font-sans text-2xl ml-3 mt-3">Bảng điểm lớp 12A1</p>
                <div className="table-data">
                    <div className="search-add mt-9 ml-6 mr-6 flex">
                        <input className="search-all text-lg" placeholder='Tìm kiếm ...' />
                        <button className="add-student font-sans text-lg bg-cyan-500 hover:bg-cyan-600 text-white">Thêm mới</button>
                    </div>
                    <div className="table">
                        {/* <ReactTable
                            data={data}
                            columns={headColumn}
                            defaultPageSize = {5}
                        /> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Students;