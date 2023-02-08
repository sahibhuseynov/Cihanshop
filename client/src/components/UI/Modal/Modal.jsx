import React from 'react'
import './Modal.scss'
import { AiFillHeart,AiOutlineClose } from "react-icons/ai";
import {BsFillShareFill} from 'react-icons/bs'
const Modal = ({open,onClose}) => {
    if(!open) return null
  return (
    <div className='overlay' onClick={onClose}>
        <div className="modalContainer" onClick={(e) => {
            e.stopPropagation()
        }}>
            <div className="container">
            <div className="header">
                <div className="modal_left">
                    <AiFillHeart size={30}/>
                    <span>My Wishlist</span>
                </div>
                <div className="modal_right">
                    <AiOutlineClose size={30} onClick={onClose}  />
                </div>
            </div>
            <div className="body">
                <p>there are no items in this wishlist</p>
            </div>
            <div className="modal_footer">
                <button><BsFillShareFill /> SHARE</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal