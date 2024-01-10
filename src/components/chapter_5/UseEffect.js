import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './styles.css';
const getData = async (page) =>{
    try{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
        return response.data;
    }
    catch(error){
        console.log(error);
    }   
}
const UseEffect = () =>{
    const [data, setData] = useState([]);
    useEffect(() => {
        loadMore.current();
    },[]);
    const [page, setPage] = useState(1);
    const loadMore = useRef({});
    loadMore.current = async () =>{
        const datas = await getData(page);
        const dataCopy = [...data, ...datas]
        setData(dataCopy);
        setPage(page + 1);
    }
    return (
        <div className="effect">
            <div className="list-image">
            {
                data.length > 0 && data.map((item, index) =>(
                    <div key={index}>
                        <img src={item.download_url} alt={item.author} className="image"/>
                    </div>
                ))
            }
            </div>
            <div className="load-more">
                <button className="btn-load-more" onClick={loadMore.current}>Load more</button>
            </div>
            
        </div>   
    )
}
export default UseEffect;