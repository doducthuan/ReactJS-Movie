import {useState} from 'react';
import '../../styles/State.css';
import Student from './Student';
function State(){
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(0);
    const changeNumber = () => {
        setCount((count) => {
            return count + 1;
        })
    }
    return (
        <div className="choose">
            <Student image="https://kenh14cdn.com/thumb_w/620/2020/6/4/capture-159126746436172743111.jpg" name="Eimi Fukada"></Student>
            <div className={`toggle ${isActive ? 'active' : ''}`} onClick={() => isActive ? setIsActive(false) : setIsActive(true)}>
                <div className={`spinner ${isActive ? 'active' : ''}`}></div>
            </div>
            <Student image="https://bloggioitre.net/wp-content/uploads/2021/06/Mikami-Yua.jpg" name="Mikami Yua"></Student>
            <button onClick={changeNumber}> Total : {count}</button>
        </div>       
    )
}
export default State;