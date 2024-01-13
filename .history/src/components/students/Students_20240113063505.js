import React from 'react';
import './styles.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
const Students = () => {
    const headCells = [
        {
            id: "stt",
            numeric: false,
            disablePadding: true,
            lable: "STT",
        },
        {
            id: "mssv",
            numeric: false,
            disablePadding: true,
            lable: "MSSV",
        },
        {
            id: "name",
            numeric: false,
            disablePadding: true,
            lable: "Họ và tên",
        },
        {
            id: "math",
            numeric: false,
            disablePadding: true,
            lable: "Toán",
        },
        {
            id: "literature",
            numeric: false,
            disablePadding: true,
            lable: "Văn",
        },
        {
            id: "english",
            numeric: false,
            disablePadding: true,
            lable: "Tiếng Anh",
        }
    ];
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
                        <TableHead>
                            <TableRow>

                            </TableRow>
                        </TableHead>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Students;