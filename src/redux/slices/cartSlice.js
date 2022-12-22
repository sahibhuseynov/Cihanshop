import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
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


        state.totalQuantity++

        if(!existingItem){
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
            existingItem.totalPrice = Number(existingItem.price) + (newItem.price)

            /* totalamount */
        }

    }
  }
});

export const {addItem} = cartSlice.actions

export default cartSlice.reducer