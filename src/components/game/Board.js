import Cell from "./Cell";

function Board(props){
    return (
        <div className="matrix">
        {
            props.data.map((item, index) => (
                <Cell key={index} onClick={() => props.onClick(index)} value={props.data[index]}></Cell>
            ))
        }
        </div>
    )
}
export default Board;