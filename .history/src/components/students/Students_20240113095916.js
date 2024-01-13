import React, { useMemo, useState } from 'react';
import './styles/styles.css';
import './styles/style_table.css';
import { useTable } from 'react-table';
import { COLUMNS } from './Columns';
import { GETALL } from '../route.js';
import Paging from '../use_hook/Paging.js'
import axios from 'axios';
const Students = () => {
    const getData = async () => {
        try{
            const response = await axios.get(GETALL);
            console.log(response.data);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
    }
    console.log(getData());
    const [page, setPage] = useState(1);
    const data = [];
    // const data = [
    //     { "id": 20166884, "name": "Nguyễn Văn Nam", "math": 10, "literature": 8, "english": 10 },
    //     { "id": 20166885, "name": "Bùi Thị Tuyết", "math": 10, "literature": 8, "english": 10 },
    //     { "id": 20166886, "name": "Phạm Văn Ba", "math": 10, "literature": 8, "english": 10 },
    //     { "id": 20166887, "name": "Lâm Khải Bằng", "math": 10, "literature": 8, "english": 10 },
    //     { "id": 20166888, "name": "Chu Tiểu An", "math": 10, "literature": 8, "english": 10 },
    //     { "id": 20166889, "name": "Phạm Bá Cương", "math": 10, "literature": 8, "english": 10 },
    //     { "id": 20166870, "name": "Chu Tất Đạt", "math": 10, "literature": 8, "english": 10 },
    //     { "id": 20166871, "name": "Lâm Tiểu Hi", "math": 10, "literature": 8, "english": 10 }
    // ]
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
                                {headerGroups.length > 0 && headerGroups.map((headerGroup) => (
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
                                {rows.length > 0 && rows.map((row, index) => {
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
                    <div className="mt-8">
                        <Paging page={page} total={data.length} changePage={(page) => setPage(page)}></Paging>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Students;