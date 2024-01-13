import React, { useEffect, useRef, useState } from 'react';
import './styles/styles.css';
import './styles/style_table.css';
import Paging from '../use_hook/Paging.js'
import axios from 'axios';
import { GETALL } from '../route.js';
const Students = () => {
    const getTotalData = async () => {
        try{
            const response = await axios.get(GETALL);
            return response.data.length;
        }
        catch(error){
            console.log(error);
        }
    }
    const getPagingData = async (page) => {
        try{
            const response = await axios.get(`http://localhost:3003/students?_page=${page}&_limit=4`);
            return response.data;
        }
        catch(error){
            console.log(error);
        }
    }
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const count = useRef(0);
    useEffect(() => {
        async function handData(){
            const full_data = await getPagingData(page);
            setData(full_data);
        }
        handData();
    }, [page]);
    useEffect(() => {
        async function totalData(){
            count.current = await getTotalData();
        }
        console.log("count data");
        totalData();
    },[]);
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
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 ? data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.math}</td>
                                            <td>{item.literature}</td>
                                            <td>{item.english}</td>
                                            <td></td>
                                        </tr>
                                    )) : <tr><td colSpan={7}>Không có dữ liệu</td></tr>
                                }
                                
                            </tbody>
                        </table>

                    </div>
                    <div className="mt-8">
                        <Paging page={page} total={count.current} changePage={(page) => setPage(page)}></Paging>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Students;