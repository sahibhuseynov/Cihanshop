import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishItems: [],
    wishQuantity:0

}

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addWishItem:(state,action) => {
            const newItem = action.payload
            const existingItem = state.wishItems.find(item => item.id === newItem.id);

            if(!existingItem){
                state.wishQuantity++
                state.wishItems.push({
                    id:newItem.id,
                    imgUrl:newItem.imgUrl,
                    productName:newItem.productName,
                    price:newItem.price,
                    
                })
            }
            
        },
        removeWishItem:(state,action) =>{
            state.wishQuantity--
            const itemID = action.payload
            state.wishItems = state.wishItems.filter((item) => item.id !== itemID)
        }
    }
})

export const {addWishItem,removeWishItem} = wishSlice.actions
export default wishSlice.reducer