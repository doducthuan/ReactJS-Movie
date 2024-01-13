import React, { useEffect, useRef, useState } from 'react';
import './styles/styles.css';
import './styles/style_table.css';
import Paging from '../use_hook/Paging.js'
import axios from 'axios';
import { GETALL } from '../route.js';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2';
//import useFormInput from '../use_hook/UseFormInput.js';
const Students = () => {
    const initForm = {id: "", name: "", math:"", literature:"", english: ""};
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState(initForm);
    const [showModal, setShowModal] = useState(false);
    const idRef = useRef();
    const nameRef = useRef();
    const mathRef = useRef();
    const literatureRef = useRef();
    const englishRef = useRef();
    const [count, setCount] = useState();
    const [reGen, setReGen] = useState(0);
    const getDetail = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3003/students/${id}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return {
                id:"",
                name: "",
                math: "",
                literature: "",
                english: "",
            }
        }
    }
    const addStudent = async (student) => {
        try {
            const update = await axios.post(GETALL,student);
            return update.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    const updateStudent = async (student) => {
        try {
            const update = await axios.put(`http://localhost:3003/students/${student.id}`, student);
            return update.data;
        }
        catch (error) {
            console.log(error);
        }
    }
    const getTotalData = async () => {
        try {
            const response = await axios.get(GETALL);
            return response.data.length;
        }
        catch (error) {
            console.log(error);
        }
    }
    const deleteStudent = async (id) => {
        try{
            const response = await axios.delete(`http://localhost:3003/students/${id}`)
            return response.data;
        }
        catch(error){
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
    }, [page, reGen,count]);
    useEffect(() => {
        async function totalData() {
            const count_data = await getTotalData();
            setCount(count_data);
        }
        totalData();
    }, [reGen]);
    const editItem = (id) => {
        if(id > 0){
            async function get_detail(){
                const detail = await getDetail(id);
                setInputValue(detail);
            }
            get_detail();
        }
        setShowModal(!showModal);
        console.log(id);
    }
    const closeItem = () => {
        setShowModal(!showModal);
        setInputValue({ id: "", name: "", math:"", literature:"", english: ""})
    }
    const validateData = (finalForm) => {
        const student = {id:idRef.current.value, name: nameRef.current.value, math: mathRef.current.value, literature: literatureRef.current.value, english:englishRef.current.value};
        console.log(student);
        updateItem(student);
    }
    const updateItem = (student) => {
        Swal.fire({
            title: inputValue.id > 0 ? "Cập nhật thông tin" : "Tạo mới",
            text: "abc",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: inputValue.id > 0 ? "Cập nhật" : "Tạo",
            cancelButtonText: "Hủy"
        }).then((result) =>{
            if(result.isConfirmed){
                if(inputValue.id > 0){
                    async function update_item(){
                        await updateStudent(student);
                        setReGen(1);
                        setShowModal(false);
                    }
                    update_item();
                }
                else{
                    async function add_student(){
                        await addStudent(student);
                        setReGen(1);
                        setShowModal(false);
                    }
                    add_student();
                }
            }else{

            }
        });
    }
    const deleteItem = (id) => {
        console.log("hoi cham");
        Swal.fire({
            title: "Xóa",
            text: "abc",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Xóa",
            cancelButtonText: "Hủy"
        }).then((result) =>{
            if(result.isConfirmed){
                async function delete_student(){
                    await deleteStudent(id);
                    setReGen(1);
                }
                delete_student();
            }else{

            }
        });
    }
    return (
        <div>
            <div className="full-view">
                <div className={!showModal ? "border-data" : "border-data opacity-50"}>
                    <p className="font-sans text-2xl ml-3 mt-3">Bảng điểm lớp 12A1</p>
                    <div className="table-data">
                        <div className="search-add mt-9 flex">
                            <input className="search-all text-lg" placeholder='Tìm kiếm ...' />
                            <button className="add-student font-sans text-lg bg-cyan-500 hover:bg-cyan-600 text-white" onClick={() => editItem(0)}>Thêm mới</button>
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
                                                        <FaRegEdit className="icons text-[#22d3ee] text-2xl cursor-pointer" onClick={() => editItem(item.id)} />
                                                        <MdDeleteOutline className="icons text-[#f43f5e] text-2xl cursor-pointer" onClick={() => deleteItem(item.id)} />
                                                    </div>

                                                </td>
                                            </tr>
                                        )) : <tr><td colSpan={7}>Không có dữ liệu</td></tr>
                                    }

                                </tbody>
                            </table>

                        </div>
                        <div className="mt-8">
                            <Paging page={page} total={count} changePage={(page) => setPage(page)}></Paging>
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
                                <div className="border-0 rounded-lg shadow-lg flex relative flex-col w-[550px] h-[670px] bg-white outline-none focus:outline-none">
                                    <div className='w-[450px] h-[600px] m-[50px]'>
                                        <h3 id="title-modal" className="text-center">{inputValue.id > 0 ? "Cập nhật thông tin" : "Tạo mới"}</h3>
                                        <div className="flex flex-col gap-4 mt-8 w-[450px] justify-center items-center">
                                            <div className='flex flex-col gap-2'>
                                                <label>Mã số sinh viên</label>
                                                {
                                                    inputValue.id > 0 ? (
                                                        <input className='input-value' readOnly
                                                        ref= {idRef}
                                                            name="id"
                                                            defaultValue={inputValue.id}
                                                            type="number"
                                                        />
                                                    ) : (
                                                        <input className='input-value' 
                                                            defaultValue={inputValue.id}
                                                            name = "id"
                                                            type="number"
                                                            ref= {idRef}
                                                        />
                                                    )
                                                }
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label>Họ và tên</label>
                                                <input className='input-value' 
                                                        defaultValue={inputValue.name}
                                                        ref={nameRef}
                                                        name="name"
                                                />
                                                
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label>Toán</label>
                                                <input className='input-value' 
                                                    defaultValue={inputValue.math}
                                                    name="math"
                                                    type="number"
                                                    ref= {mathRef}
                                                />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label>Văn</label>
                                                <input className='input-value' 
                                                    defaultValue={inputValue.literature}
                                                    name="literature"
                                                    type="number"
                                                    ref= {literatureRef}
                                                />
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label>Anh</label>
                                                <input className='input-value' 
                                                    defaultValue={inputValue.english}
                                                    name="english"
                                                    type="number"
                                                    ref= {englishRef}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-8 pl-[155px]">
                                            <button onClick={closeItem} className="w-[100px] h-[40px] border-solid border-2">Đóng</button>
                                            <button className="w-[100px] h-[40px] border-solid border-2 bg-primary text-white" onClick={validateData}>Cập nhật</button>
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