import '../../styles/State.css';
function Student(props){
    return (
        <div className="information">
            <img className="avatar" src={props.image} alt=""/>
            <p>{props.name}</p>
        </div>
    );
}
export default Student;