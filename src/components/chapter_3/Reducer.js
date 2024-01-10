import {useReducer} from 'react';
function Reducer(){
    const initState = {
        name : "Hubert",
        age: 23,
    }
    const infoReducer = (state, action) => {
        switch(action.type){
            case "CLICK":
                state.name = action.payload.name;
                const stateCopy = JSON.parse(JSON.stringify(state))
                return stateCopy;
            default:
                return state;
        }
    }
    const handEvent = () => 
        dispatch({
            type: "CLICK",
            payload:{
                name: "Alex",
            } 
        });
    
    const [state, dispatch] = useReducer(infoReducer, initState);
    //const contextValue = [state, dispatch];
    return (
        <div>
            <div>
                <button onClick={handEvent}>Change Info</button>
            </div>
            <div>
                <div className="name">{state.name}</div>
                <div className="age">{state.age}</div>
            </div>
        </div>
    )
}
export default Reducer;