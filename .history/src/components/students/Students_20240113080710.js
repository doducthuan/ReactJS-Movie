import React, { useMemo } from 'react';
import './styles.css';
import './style_table.css';
import { useTable } from 'react-table';
import { COLUMNS } from './Columns';
const Students = () => {
    const data = [
        { id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
        { id: 20176884, name: "Hubert Do", math: 10, literature: 8, english: 10 },
    ];
    const columns = useMemo(() => COLUMNS, []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    return (
        <div className="full-view">
            <div className="border-data">
                <p className="font-sans text-2xl ml-3 mt-3">Bảng điểm lớp 12A1</p>
                <div className="table-data">
                    <div className="search-add mt-9 flex">
                        <input className="search-all text-lg" placeholder='Tìm kiếm ...' />
                        <button className="add-student font-sans text-lg bg-cyan-500 hover:bg-cyan-600 text-white">Thêm mới</button>
                    </div>
                    <div className="table-content">
                        <table {...getTableProps()}>
                            <thead>
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        <th>STT</th>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                        <th>Thao tác</th>
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()}>
                                {rows.map((row, index) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            <td>{index + 1}</td>
                                            {row.cells.map((cell) => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                );
                                                
                                            })}
                                            <td>Edit Xóa</td>
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