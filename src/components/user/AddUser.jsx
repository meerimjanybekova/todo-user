import React,{useState} from "react";

import Card from "../Card";
import classes from './AddUser.module.css';
import Modal from "../ui/Modal";
import Button from "../Button";


const AddUser = (props) => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [error,setError] = useState(null)


    const inputNameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (name.trim().length=== 0 || age.length === 0) {
            setError({
                title:'Invalid Input.',
                message:'User Should not be empty. Type something'
            })

            return
        }
        
        if (age <1) {
            setError({
               title:'Age is not',
               message:'Must not be under 1 year'

            })
            
            return
        }
        const data = {
            name:name,
            age:age,
            id:Math.random().toString()
        }

        props.onAddUser(data);
        console.log(name,age);

    }

    const closeModalHandler = () => {
        setError(false)
   
    }

    return (
        <React.Fragment>
            {error && <Modal title={error.title} message={error.message} onConfirm={closeModalHandler}/>}
          <Card className={classes.input}>
        <form action="" onSubmit={submitHandler}>
             <label htmlFor="name">Name</label>
             <input id="name" type="text"  onChange={inputNameChangeHandler} />
             <label htmlFor="age">Age</label>
             <input  id="age" type="number" onChange={ageChangeHandler} />
       <Button type="submit">add </Button>
           </form>
        </Card>
        </React.Fragment>
       
        
    
   
        
    )
}

export default AddUser