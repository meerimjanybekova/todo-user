
import Button from "../Button";
import Card from "../Card";
import classes from "./UserList.module.css"


const UserList = (props) => {
const filteredData=(event)=>{
const carrentId = event.target.id
let filterItem = props.user.filter((el)=>el.id !== carrentId)
props.delItem([...filterItem])
 }

    return (
        <ul>
        <Card className={classes.users}>
            {props.user.map((user) =>(
                <li  key = {user.id} >{user.name}({user.age} years) <Button  id={user.id} onClick={filteredData}>Delete</Button></li>
            ))} 
     
        </Card>
        </ul>
        
    )
}

export default UserList;