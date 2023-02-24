import React from 'react'
import './Modal.scss'
import { AiFillHeart,AiOutlineClose } from "react-icons/ai";
import {BsFillShareFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'
import { useTranslation } from 'react-i18next';
import { useSelector,useDispatch } from 'react-redux';
import { removeWishItem } from '../../../redux/slices/wishSlice';
const Modal = ({open,onClose}) => {
    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.wish.wishItems)
    
    const { t } = useTranslation();

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
                    <span>{t('My Wishlist')}</span>
                </div>
                <div className="modal_right">
                    <AiOutlineClose size={30} onClick={onClose}  />
                </div>
            </div>
            <div className="body" >
                {wishList.length === 0 && <p >{t("there are no items in this wishlist")}</p>}
                
                {
                    wishList.map((item) => {
                        return(
                            <div className="modalItem" key={item.id}>
                             
                                    <div className="item_name">
                                        <span>{item.productName}</span>
                                        
                                    </div>
                                    <div className="item_img">
                                        <img src={item.imgUrl} alt="" />
                                    </div>
                                   <div className="price">
                                          <span>${item.price}</span>
                                   </div>
                               
                               <div className="bottom">
                                <button >ADD TO CART</button>
                                <MdDelete style={{cursor:'pointer'}} onClick={() => dispatch(removeWishItem(item.id))} size={30}/>
                               </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="modal_footer">
                <button><BsFillShareFill />{t("SHARE")}</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Modal