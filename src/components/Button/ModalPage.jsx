import { useState } from "react"
import Button from "./Button"
import Modal from "./Modal"


export default function ModalPage() {
    const [showModal,setShowModal]=useState(false)

    const handleClick = () => {
        setShowModal(true)
    }
    
    const handleClose = ()=>{
        setShowModal(false)
    }

    return <div>
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal && <Modal onClose={handleClose} />}
    </div>
}