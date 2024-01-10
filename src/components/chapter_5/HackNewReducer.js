import axios from 'axios';
import React, { useReducer, useRef } from 'react';

const HackNewReducer = () =>{
    const initState = {
        data: [],
        loading: true,
        search: "react",
    }
    const loadState = useRef({});
    loadState.current = async (state, action) => {     
        switch(action.type){
            case "ENTER":
                const stateCopy = JSON.parse(JSON.stringify(state));
                stateCopy.search = action.payload.search;
                stateCopy.loading = action.payload.loading;
                stateCopy.data = await getData();
                return stateCopy;
            default:
                break;
        }
        return state;
    }
    const [state, dispatch] = useReducer(loadState, initState);

    const getData = async () => {
        try{
            const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${state.search}`);
            return response.data?.hits;
        }
        catch(error){
            state.loading = false;
        }
    }
    const loadData = (e) => {
        if(e.key === "Enter"){
            dispatch({
                type: "ENTER",
                payload:{
                    data: [],
                    loading: false,
                    search: e.target.value,
                }
            })
            loadState.current();
        }
    }
    return (
        <div>
            <div className="border-search">
                <input className="input-search" placeholder='search ...' onKeyDown={loadData}/>
            </div>
                    
            <div className="load-data">
            {state.loading && <p className="loadding">Đang tải dữ liệu ...</p>}
            {
                
                state.data.length > 0 && !state.loading && state.data.map((item, index) => (
                    <div key={index}>{item.title}</div>
                ))
            }
            </div>
        </div>
    )
}
export default HackNewReducer;