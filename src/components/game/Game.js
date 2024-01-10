import { tictoc } from "../../Data"
import Board from "./Board";
import '../../styles/Game.css';
import { useState } from "react";
function Game(){
    const [confirm, setConfirm] = useState(true);
    const [data, setData] = useState(tictoc);
    const handEvent = (index) =>{
        if(data[index] !== "") return;
        setData((data) => {            
            data[index] = confirm ? "O" : "X";
            setConfirm(!confirm);      
            return data;
        });
        setConfirm(!confirm);
    }
    console.log(data);
    return (
        <div>
            <Board data={data} onClick={handEvent}></Board>
        </div>
    )
}
export default Game;