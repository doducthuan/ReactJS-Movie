import React, { useEffect, useState } from 'react';
import './styles/styles.css';
import './styles/style_table.css';
import { GETALL } from '../route.js';
import Paging from '../use_hook/Paging.js'
import axios from 'axios';
const Students = () => {
    const getData = async () => {
        try{
            const response = await axios.get(GETALL);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
    }
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
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
    useEffect(() => {
        b();
    }, []);
    const b = async() => {
        const get_data = await getData();
        setData(get_data);
        console.log(get_data)
    }
    //const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
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
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>MSSV</th>
                                    <th>Họ và tên</th>
                                    <th>Toán</th>
                                    <th>Văn</th>
                                    <th>Anh</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 && data.map((item, index) => (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.math}</td>
                                            <td>{item.literature}</td>
                                            <td>{item.english}</td>
                                        </tr>
                                    ))
                                }
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