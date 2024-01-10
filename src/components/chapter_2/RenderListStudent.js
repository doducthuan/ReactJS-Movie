import {data} from '../Data.js'
import Student from './Student'
function RenderListStudent(props){
    return (
        <div className="list-info">
            {props.children}
            {
                data.map((item, index) => {
                    return (
                        <Student image={item.image} name={item.name}></Student>
                    );
                    
                })
            }
        </div>
    )
}
export default RenderListStudent;