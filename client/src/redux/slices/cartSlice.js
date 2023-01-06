import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount:0,
    totalQuantity:0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action) => {
        const newItem = action.payload
        const existingItem = state.cartItems.find(item => item.id === newItem.id);


        

        if(!existingItem){
            state.totalQuantity++
            state.cartItems.push({
                id: newItem.id,
                productName: newItem.productName,
                imgUrl:newItem.imgUrl,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price
            })
        }else{
            existingItem.quantity ++
            existingItem.totalPrice = (existingItem.quantity ) * (newItem.price)

            /* totalamount */
        }
        
    },

    removeItem:(state,action) => {
        const itemID = action.payload
        state.cartItems = state.cartItems.filter((item) => item.id !== itemID)
        state.totalQuantity--
    },

   


  }
});

export const {addItem,removeItem} = cartSlice.actions

export default cartSlice.reducer