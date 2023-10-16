
import { useState } from "react";
import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";
// import Modal from "./components/ui/Modal";

const arrayUser = []
function App() {
  
const [users, setUsers] = useState(arrayUser)

  const addUserHandler =(newUser) => {
     setUsers((prevData)=>{
      return [newUser, ...prevData]
     })
  }


  
  return (
    <div className="App">
       <AddUser onAddUser={addUserHandler}/>
       <UserList user={users} delItem={setUsers} />
    </div>
  );
}

export default App;
