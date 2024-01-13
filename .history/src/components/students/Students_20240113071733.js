import React from 'react';
import './styles.css';
import { useTable } from 'react-table';

const Students = () => {
    const data = [
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { stt: 1, id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
    ];
    const headColumn = [
        { header: "STT", accessor: "stt" },
        { header: "MSSV", accessor: "id" },
        { header: "Họ và tên", accessor: "name" },
        { header: "Toán", accessor: "math" },
        { header: "Văn", accessor: "literature" },
        { header: "Anh", accessor: "english" }
    ];
    //const tableInstance = useTable({ headColumn, data });
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ headColumn, data });
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
                        <table {...getTableProps()}>
                            <thead>
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Students;