import React, { useEffect, useRef, useState } from 'react';
import './styles/styles.css';
import './styles/style_table.css';
import Paging from '../use_hook/Paging.js'
import axios from 'axios';
import { GETALL } from '../route.js';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { ReactDOM } from 'react';
const Students = () => {
    const getTotalData = async () => {
        try {
            const response = await axios.get(GETALL);
            return response.data.length;
        }
        catch (error) {
            console.log(error);
        }
    }
    const getPagingData = async (page) => {
        try {
            const response = await axios.get(`http://localhost:3003/students?_page=${page}&_limit=4`);
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const count = useRef(0);
    useEffect(() => {
        async function handData() {
            const full_data = await getPagingData(page);
            setData(full_data);
        }
        handData();
    }, [page]);
    useEffect(() => {
        async function totalData() {
            count.current = await getTotalData();
        }
        console.log("count data");
        totalData();
    }, []);
    const editItem = (id) => {

    }
    const deleteItem = (id) => {

    }
    return (
        <div className="full-view">
            <div className="border-data">
                <p className="font-sans text-2xl ml-3 mt-3">Bảng điểm lớp 12A1</p>
                <div className="table-data">
                    <div className="search-add mt-9 flex">
                        <input className="search-all text-lg" placeholder='Tìm kiếm ...' />
                        <button className="add-student font-sans text-lg bg-cyan-500 hover:bg-cyan-600 text-white" onClick={editItem(0)}>Thêm mới</button>
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
                                            <td>{(page - 1) * 4 + index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.math}</td>
                                            <td>{item.literature}</td>
                                            <td>{item.english}</td>
                                            <td className='flex justify-center gap-2'>
                                                <FaRegEdit className="icons text-[#22d3ee] text-xl cursor-pointer" onClick={editItem(item.id)} />
                                                <MdDeleteOutline className="icons text-[#f43f5e] text-xl cursor-pointer" onClick={deleteItem(item.id)} />
                                            </td>
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

// modal
const Modal = (props) => props.isShow ? ReactDOM.createPortal(
    <React.Fragment>
        <div>
            <div>
                <div>
                    <label>Mã số sinh viên</label>
                    <input 
                        name="id"
                    />
                </div>
                <div>
                    <label>Họ và tên</label>
                    <input 
                        name="name"
                    />
                </div>
                <div>
                    <label>Toán</label>
                    <input 
                        name="math"
                    />
                </div>
                <div>
                    <label>Văn</label>
                    <input 
                        name="literature"
                    />
                </div>
                <div>
                    <label>Anh</label>
                    <input 
                        name="english"
                    />
                </div>
            </div>
            <div>
                <button>Hủy</button>
                <button className="">Cập nhật</button>
            </div>
        </div>
    </React.Fragment>, document.body
) : null;
export default Students;