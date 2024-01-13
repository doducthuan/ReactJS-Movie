import React, { useEffect, useRef, useState } from 'react';
import './styles/styles.css';
import './styles/style_table.css';
import Paging from '../use_hook/Paging.js'
import axios from 'axios';
import { GETALL } from '../route.js';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const Students = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const count = useRef(0);
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
    const toggle = () => {
        setShowModal(!showModal);
    }
    const editItem = (id) => {

    }
    const deleteItem = (id) => {

    }
    return (
        <div>
            <div className="full-view">
                <div className={!showModal ? "border-data" : "border-data opacity-50"}>
                    <p className="font-sans text-2xl ml-3 mt-3">Bảng điểm lớp 12A1</p>
                    <div className="table-data">
                        <div className="search-add mt-9 flex">
                            <input className="search-all text-lg" placeholder='Tìm kiếm ...' />
                            <button className="add-student font-sans text-lg bg-cyan-500 hover:bg-cyan-600 text-white" onClick={toggle}>Thêm mới</button>
                        </div>
                        <div>
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
                                                <td>
                                                    <div>
                                                        <FaRegEdit className="icons text-[#22d3ee] text-2xl cursor-pointer" onClick={editItem(item.id)} />
                                                        <MdDeleteOutline className="icons text-[#f43f5e] text-2xl cursor-pointer" onClick={deleteItem(item.id)} />
                                                    </div>

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
            {
                showModal ?
                    (
                        <>
                            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-opacity-40">
                                {/* <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}
                                <div className="border-0 rounded-lg shadow-lg flex relative flex-col w-[600px] h-[670px] bg-white outline-none focus:outline-none">
                                    <div className='w-[500px] h-[600px] m-[50px]'>
                                        <h3 id="title-modal" className="text-center">Cập nhật thông tin</h3>
                                        <div className="flex flex-col gap-4 mt-8 w-[500px] justify-center items-center">
                                            <div className='flex flex-col gap-2'>
                                                <label>Mã số sinh viên</label>
                                                <input readOnly className='input-value' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label>Họ và tên</label>
                                                <input className='input-value' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label>Toán</label>
                                                <input className='input-value' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label>Văn</label>
                                                <input className='input-value' />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label>Anh</label>
                                                <input className='input-value' />
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-8 pr-px-[100px]">
                                            <button onClick={toggle} className="w-[100px] h-[40px] border-solid border-2">Đóng</button>
                                            <button className="w-[100px] h-[40px] border-solid border-2">Cập nhật</button>
                                        </div>
                                    </div>
                                </div>

                                {/* </div> */}
                            </div>
                        </>
                    ) : null
            }

        </div>

    );
};

export default Students;