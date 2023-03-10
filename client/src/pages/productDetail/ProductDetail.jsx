import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import products from '../../assets/data/products'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import './ProductDetail.scss'
import Card from '../../components/UI/Card/Card';
import { useDispatch} from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import { addWishItem, removeWishItem } from '../../redux/slices/wishSlice'
const ProductDetail = () => {
    const [wishlist, setWishlist] = useState(false)
    const dispatch = useDispatch();
   

    const addToCart = () => {
        dispatch(addItem({
            id:id,
            imgUrl:imgUrl,
            productName:productName,
            price:price,
            totalPrice:price

        }))
        toast('✔️​ Added to bag!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    const {id} = useParams()
    console.log(id)
    const product = products.find((item) => item.id === id)
    const {price,productName,imgUrl,imgDetail1,imgDetail2} = product

    console.log(wishlist)
    const handlewish = () => {
        setWishlist(prev => !prev)
        handleWishlist()
        toast(wishlist ? 'Removed from wishlist!' : '✔️​ Added to wishlist!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        if(wishlist){
            dispatch(removeWishItem(id))
        }
    }

    const handleWishlist = () => {
        dispatch(addWishItem({
            id:id,
            imgUrl:imgUrl,
            productName:productName,
            price:price,
            
        }))
    }
  return (
    
    <div className='productdetail'>
       <div className="detail__header">
        <div className="left">
            <div className="left__box">
                <img src={imgUrl} alt="" />
            </div>
            <div className="left__bottom">
                <div className="item"><img src={imgUrl} alt="" /></div>
                <div className="item"><img src={imgDetail1} alt="" /></div>
                <div className="item"><img src={imgUrl} alt="" /></div>
                <div className="item"><img src={imgDetail2} alt="" /></div>
            </div>
        </div>
        <div className="right">
            <h2>{productName}</h2>
            <span>${price}</span>
            
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiati.</p>

            <div className="strap">
                <label>Strap</label>
                <select >
                    <option >Leather</option>
                    <option >Bracelet</option>
                    <option >Rubber</option>
                </select>
            </div>

            <div className="diameter">
                <label>Diameter</label>
                <select >
                    <option >40mm</option>
                    <option >42mm</option>
                    <option >44mm</option>
                </select>
            </div>

            <div className="buttons__group">
                <button onClick={addToCart}>ADD TO CART</button>
                <button>BUY IT NOW</button>
                
            </div>
            <div className="wishlist__icon">
                {
                    wishlist ?  <AiFillHeart size={30} color='red' /> : <AiOutlineHeart size={30}  />
                }
                <button onClick={handlewish}>{
                    wishlist ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'
                }</button>
                <ToastContainer />
            </div>
        </div>
       </div>
        <h4>You may also like</h4>
       <Card data={products.slice(4)} />
    </div>
  )
}

export default ProductDetail