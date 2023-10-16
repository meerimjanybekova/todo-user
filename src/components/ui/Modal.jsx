import { Fragment } from "react"
import ReactDOM  from "react-dom"
import Button from "../Button"
import Card from "../Card"
import classes from './Modal.css'


const Modal = (props) => {
    const BackDrop = (props) => {
        return <div onClick={props.onConfirm} className={props.className}></div>
    }
    const ModalOverLay = (props) => {
        return (
           <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={classes.content}>
                <p>{props.message}</p>
            </main>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>OK</Button>
            </footer>
        </Card>
        )
    }

return (
      <Fragment>
        {
           ReactDOM.createPortal(
                <BackDrop onConfirm ={props.onConfirm}className={props.className}/>,
                document.getElementById('backdrop-root')
           )
        }
        
        {
            ReactDOM.createPortal(

                <ModalOverLay
                message={props.message}
                title={props.title}
                onConfirm={props.onConfirm}
                className={props.className}
           />,
             document.getElementById('modal-root')
            )
        }
        
      </Fragment>
     )
}

export default Modal