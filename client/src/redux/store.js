import { configureStore } from "@reduxjs/toolkit";
import darkSlice from "./slices/darkSlice";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import wishSlice from "./slices/wishSlice";
export  const store = configureStore({
    reducer:{
        dark:darkSlice,
        cart:cartSlice,
        user:userSlice,
        wish:wishSlice
    }
})

